"use client";

import ScrollToTop from "@/common/ScrollToTop";
import { animationCreate } from "@/utils/utils";
import { useEffect } from "react";

if (typeof window !== "undefined") {
	require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: any) => {
	useEffect(() => {
		// animation
		const timer = setTimeout(() => {
			animationCreate();
		}, 100);

		return () => clearTimeout(timer);
	}, []);

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

			if (img.complete && (img.naturalWidth || img.naturalHeight)) {
				apply();
				return;
			}

			const handleFinish = () => {
				img.removeEventListener("load", handleFinish);
				img.removeEventListener("error", handleFinish);
				apply();
			};

			img.addEventListener("load", handleFinish);
			img.addEventListener("error", handleFinish);
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
			document.querySelectorAll("img").forEach(applyImagePlaceholder);
			document.querySelectorAll<HTMLElement>("[style*='/assets/img']").forEach(applyBackgroundPlaceholder);
			document.querySelectorAll<HTMLElement>("*").forEach((element) => {
				const bg = window.getComputedStyle(element).backgroundImage || "";
				if (bg.toLowerCase().includes("/assets/img")) {
					applyBackgroundPlaceholder(element);
				}
			});
		};

		bootstrapScan();

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

	return (
		<>
			{children}
			<ScrollToTop />
		</>
	);
};

export default Wrapper;
