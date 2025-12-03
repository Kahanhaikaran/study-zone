"use client";

import ScrollToTop from "@/common/ScrollToTop";
import { animationCreate } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
	require("bootstrap/dist/js/bootstrap");
}

type QueryFormState = {
	name: string;
	email: string;
	phone: string;
	message: string;
	captchaAnswer: string;
};

type CaptchaState = {
	question: string;
	value: number;
} | null;

const buildCaptcha = () => {
	const a = Math.floor(Math.random() * 5) + 3; // 3-7
	const b = Math.floor(Math.random() * 5) + 2; // 2-6
	return {
		question: `${a} + ${b}`,
		value: a + b,
	};
};

const Wrapper = ({ children }: any) => {
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	const [showQueryForm, setShowQueryForm] = useState(true);
	// Initialise captcha as null so server and client render the same
	// markup during hydration. We generate the real captcha only on the client.
	const [captcha, setCaptcha] = useState<CaptchaState>(null);
	const [formState, setFormState] = useState<QueryFormState>({
		name: "",
		email: "",
		phone: "",
		message: "",
		captchaAnswer: "",
	});
	const [formError, setFormError] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Create captcha once after the component mounts on the client
	useEffect(() => {
		if (typeof window === "undefined") return;
		setCaptcha(buildCaptcha());
	}, []);

	useEffect(() => {
		// animation
		const timer = setTimeout(() => {
			animationCreate();
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	// Auto-open query form when visiting home with ?openQueryForm=1
	useEffect(() => {
		if (!isHomePage || typeof window === "undefined") return;
		const params = new URLSearchParams(window.location.search);
		if (params.get("openQueryForm") === "1") {
			setShowQueryForm(true);
		}
	}, [isHomePage]);

	// Close or prevent showing the popup form on specific hash sections (e.g. testimonials, FAQ)
	useEffect(() => {
		if (!isHomePage || typeof window === "undefined") {
			return;
		}

		const shouldHideForHash = (hash: string | null) => {
			if (!hash) return false;
			const clean = hash.toLowerCase();
			return clean.includes("testimonials") || clean.includes("faq");
		};

		// Initial check on mount
		if (shouldHideForHash(window.location.hash)) {
			setShowQueryForm(false);
		}

		// Update when hash changes (e.g. clicking navbar links to #testimonials or #faq)
		const handleHashChange = () => {
			if (shouldHideForHash(window.location.hash)) {
				setShowQueryForm(false);
			}
		};

		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, [isHomePage]);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		const placeholderColors = ["#e0e7ff", "#fecdd3", "#fde68a", "#d9f99d"];
		let colorIndex = 0;
		const processedImages = new WeakSet<HTMLImageElement>();
		const processedBackgrounds = new WeakSet<HTMLElement>();

		const getNextAccent = () => {
			const color = placeholderColors[colorIndex % placeholderColors.length];
			colorIndex += 1;
			return color;
		};

		const clampDimension = (value: number, fallback: number) => {
			if (!Number.isFinite(value) || value <= 0) {
				return fallback;
			}
			return Math.max(40, Math.round(value));
		};

		const buildPlaceholderSvg = (width: number, height: number, label: string) => {
			const safeWidth = clampDimension(width, 320);
			const safeHeight = clampDimension(height, Math.round(safeWidth * 0.62));
			const accent = getNextAccent();
			const safeLabel = label.replace(/[<>]/g, "").slice(0, 32) || "Placeholder";

			return `
<svg xmlns="http://www.w3.org/2000/svg" width="${safeWidth}" height="${safeHeight}" viewBox="0 0 ${safeWidth} ${safeHeight}" preserveAspectRatio="none">
	<defs>
		<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
			<stop offset="0%" stop-color="#f1f5f9"/>
			<stop offset="100%" stop-color="#e2e8f0"/>
		</linearGradient>
	</defs>
	<rect width="100%" height="100%" rx="18" fill="url(#grad)" />
	<path d="M0 ${safeHeight} L ${safeWidth} 0" stroke="${accent}" stroke-width="8" stroke-linecap="round" opacity="0.35"/>
	<circle cx="${safeWidth * 0.25}" cy="${safeHeight * 0.4}" r="${Math.min(safeWidth, safeHeight) * 0.12}" fill="${accent}" opacity="0.25"/>
	<text x="50%" y="50%" text-anchor="middle" fill="#94a3b8" font-family="Inter, Arial, sans-serif" font-size="${Math.min(
				Math.max(14, safeWidth * 0.08),
				28,
			)}" font-weight="600" letter-spacing="0.08em" dy="0.35em">${safeLabel.toUpperCase()}</text>
</svg>
`.trim();
		};

		const shouldReplaceImage = (img: HTMLImageElement) => {
			const rawSrc = img.getAttribute("src") || "";
			if (!rawSrc || rawSrc.startsWith("data:image/svg+xml")) {
				return false;
			}
			if (img.dataset.placeholderApplied === "true") {
				return false;
			}
			// Don't replace if image has successfully loaded (has valid dimensions)
			if (img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
				return false;
			}
			const normalized = rawSrc.toLowerCase();
			return (
				normalized.includes("/assets/img") ||
				normalized.endsWith(".png") ||
				normalized.endsWith(".jpg") ||
				normalized.endsWith(".jpeg") ||
				normalized.endsWith(".gif") ||
				normalized.endsWith(".svg") ||
				normalized.endsWith(".webp")
			);
		};

		const applyImagePlaceholder = (img: HTMLImageElement) => {
			if (!shouldReplaceImage(img) || processedImages.has(img)) {
				return;
			}

			const apply = () => {
				const rect = img.getBoundingClientRect();
				const width = rect.width || img.naturalWidth || Number(img.getAttribute("width")) || 320;
				const height =
					rect.height || img.naturalHeight || Number(img.getAttribute("height")) || Math.round(width * 0.62) || 200;
				const label = img.getAttribute("alt")?.trim() || "Image";
				const svgMarkup = buildPlaceholderSvg(width, height, label);

				img.dataset.placeholderApplied = "true";
				img.dataset.originalSrc = img.getAttribute("src") || "";
				img.setAttribute("src", `data:image/svg+xml;utf8,${encodeURIComponent(svgMarkup)}`);
				img.setAttribute("alt", `${label || "Image"} placeholder`);
				img.classList.add("media-placeholder");
				processedImages.add(img);
			};

			// Only apply placeholder if image failed to load
			if (img.complete) {
				// Image has finished loading - check if it actually loaded successfully
				if (img.naturalWidth === 0 || img.naturalHeight === 0) {
					// Image failed to load (0x0 dimensions)
					apply();
				}
				// If image loaded successfully (has dimensions), don't replace it
				return;
			}

			// Image is still loading - only replace on error
			const handleError = () => {
				img.removeEventListener("load", handleLoad);
				img.removeEventListener("error", handleError);
				apply();
			};

			const handleLoad = () => {
				// Image loaded successfully - don't replace it
				img.removeEventListener("load", handleLoad);
				img.removeEventListener("error", handleError);
			};

			img.addEventListener("load", handleLoad);
			img.addEventListener("error", handleError);
		};

		const shouldReplaceBackground = (element: HTMLElement) => {
			if (processedBackgrounds.has(element)) {
				return false;
			}
			const inlineStyle = element.getAttribute("style")?.toLowerCase() || "";
			const computedStyle = window.getComputedStyle(element).backgroundImage?.toLowerCase() || "";
			return inlineStyle.includes("/assets/img") || computedStyle.includes("/assets/img");
		};

		const applyBackgroundPlaceholder = (element: HTMLElement) => {
			if (!shouldReplaceBackground(element)) {
				return;
			}

			const rect = element.getBoundingClientRect();
			const width = rect.width || 320;
			const height = rect.height || Math.round(width * 0.6) || 200;
			const label = element.dataset.placeholderLabel || "Image";

			element.dataset.placeholderLabel = label;
			element.classList.add("bg-media-placeholder");
			element.style.backgroundColor = "#f8fafc";
			if (window.getComputedStyle(element).position === "static") {
				element.style.position = "relative";
			}
			if (!element.style.minHeight) {
				element.style.minHeight = `${clampDimension(height, 180)}px`;
			}

			const svgMarkup = buildPlaceholderSvg(width, height, label);
			element.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(svgMarkup)}")`;
			element.style.backgroundRepeat = "no-repeat";
			element.style.backgroundSize = "cover";
			element.style.backgroundPosition = "center";

			processedBackgrounds.add(element);
		};

		const handleNode = (node: Node) => {
			if (node instanceof HTMLImageElement) {
				applyImagePlaceholder(node);
			}
			if (node instanceof HTMLElement) {
				applyBackgroundPlaceholder(node);
				node.querySelectorAll("img").forEach(applyImagePlaceholder);
				node.querySelectorAll<HTMLElement>("[style*='/assets/img']").forEach(applyBackgroundPlaceholder);
			}
		};

		const bootstrapScan = () => {
			document.querySelectorAll("img").forEach((img) => {
				// Only process images that have finished loading and failed
				if (img.complete && (img.naturalWidth === 0 || img.naturalHeight === 0)) {
					applyImagePlaceholder(img);
				} else if (!img.complete) {
					// Image is still loading - set up error handler
					applyImagePlaceholder(img);
				}
				// If image is complete and has dimensions, skip it (it loaded successfully)
			});
			document.querySelectorAll<HTMLElement>("[style*='/assets/img']").forEach(applyBackgroundPlaceholder);
			document.querySelectorAll<HTMLElement>("*").forEach((element) => {
				const bg = window.getComputedStyle(element).backgroundImage || "";
				if (bg.toLowerCase().includes("/assets/img")) {
					applyBackgroundPlaceholder(element);
				}
			});
		};

		// Delay initial scan slightly to allow images to start loading
		setTimeout(bootstrapScan, 100);

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === "attributes" && mutation.target instanceof HTMLImageElement && mutation.attributeName === "src") {
					applyImagePlaceholder(mutation.target);
				}
				mutation.addedNodes.forEach((node) => {
					handleNode(node);
				});
			});
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ["src", "style"],
		});

		return () => observer.disconnect();
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormState((prev) => ({
			...prev,
			[name]: value,
		}));
		setFormError(null);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!formState.name || !formState.email || !formState.phone || !formState.message) {
			setFormError("Please fill in all fields.");
			return;
		}

		if (!captcha) {
			setFormError("Captcha is still loading. Please wait a moment and try again.");
			return;
		}

		const expected = captcha.value;
		const userAnswer = Number(formState.captchaAnswer.trim());

		if (!Number.isFinite(userAnswer) || userAnswer !== expected) {
			setFormError("Captcha is incorrect. Please try again.");
			setCaptcha(buildCaptcha());
			setFormState((prev) => ({ ...prev, captchaAnswer: "" }));
			return;
		}

		setIsSubmitting(true);

		try {
			const whatsappNumber = "917303628683";
			const messageLines = [
				"Hello! I have a query from the website popup form.",
				"",
				`Name: ${formState.name}`,
				`Email: ${formState.email}`,
				`Phone: ${formState.phone}`,
				"",
				`Message: ${formState.message}`,
			];
			const fullMessage = messageLines.join("\n");
			const encoded = encodeURIComponent(fullMessage);

			if (typeof window !== "undefined") {
				window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
			}

			setShowQueryForm(false);
			setFormState({
				name: "",
				email: "",
				phone: "",
				message: "",
				captchaAnswer: "",
			});
			setCaptcha(buildCaptcha());
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleClose = () => {
		setShowQueryForm(false);
	};

	return (
		<>
			{isHomePage && showQueryForm && (
				<div className="query-modal-backdrop">
					<div className="query-modal">
						<button
							type="button"
							className="query-modal-close"
							aria-label="Close query form"
							onClick={handleClose}
						>
							<i className="fas fa-times" />
						</button>
						<h3 className="query-modal-title">Query Form</h3>
						<p className="query-modal-subtitle">
							Share your assignment or project details and we&apos;ll respond quickly.
						</p>
						<form className="query-modal-form" onSubmit={handleSubmit}>
							<div className="query-modal-grid">
								<div className="form-group">
									<label htmlFor="query-name">Name</label>
									<input
										id="query-name"
										name="name"
										type="text"
										className="form-control"
										placeholder="Enter your full name"
										value={formState.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="query-email">Email</label>
									<input
										id="query-email"
										name="email"
										type="email"
										className="form-control"
										placeholder="Enter your email address"
										value={formState.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="query-phone">Phone Number</label>
									<input
										id="query-phone"
										name="phone"
										type="tel"
										className="form-control"
										placeholder="Enter your phone or WhatsApp number"
										value={formState.phone}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="form-group form-group-full">
									<label htmlFor="query-message">Message</label>
									<textarea
										id="query-message"
										name="message"
										className="form-control"
										rows={3}
										placeholder="Describe your assignment, project, or exam help needed"
										value={formState.message}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="form-group form-group-captcha form-group-full">
									<label htmlFor="query-captcha">
										Captcha: What is{" "}
										<span className="captcha-question">
											{captcha ? captcha.question : "0 + 0"}
										</span>
										?
									</label>
									<div className="captcha-row">
										<input
											id="query-captcha"
											name="captchaAnswer"
											type="number"
											className="form-control"
											placeholder="Enter answer"
											value={formState.captchaAnswer}
											onChange={handleChange}
											required
										/>
									</div>
								</div>
							</div>
							{formError && <p className="query-modal-error">{formError}</p>}
							<button type="submit" className="theme-btn yellow-btn query-submit-btn" disabled={isSubmitting}>
								{isSubmitting && <span className="query-loader" aria-hidden="true" />}
								<span className="query-submit-label">
									{isSubmitting ? "Opening WhatsApp..." : "Submit"}
								</span>
							</button>
						</form>
						<p className="query-modal-footnote">
							We respect your privacy. Your details are used only to respond to your query.
						</p>
					</div>
				</div>
			)}

			{children}
			<ScrollToTop />
		</>
	);
};

export default Wrapper;
