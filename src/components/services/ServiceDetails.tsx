"use client";

import Link from "next/link";
import { getServiceBySlug } from "@/data/services";
import HeaderOne from "@/layouts/headers/HeaderOne";
import BreadcrumbServices from "@/common/breadcrumb/BreadcrumbServices";
import FooterOne from "@/layouts/footers/FooterOne";

interface ServiceDetailsProps {
	service: ReturnType<typeof getServiceBySlug>;
}

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
	if (!service) {
		return null;
	}

	const heroStats = [
		{ value: "5,780+", label: "Projects" },
		{ value: "4.8/5", label: "Rating" },
		{ value: "24/7", label: "Support" },
	];

	const assurances = ["100% confidentiality", "Plagiarism-free delivery", "On-time submissions"];

	const processSteps = [
		{
			title: "Share requirements",
			copy: "Send syllabus, rubric, or topic on WhatsApp. We acknowledge within minutes.",
		},
		{
			title: "Get a roadmap",
			copy: "We break the work into milestones, share timelines, and lock deliverables.",
		},
		{
			title: "Receive drafts",
			copy: "Review chapter-wise / module-wise drafts with unlimited minor edits.",
		},
		{
			title: "Submit with confidence",
			copy: "Final files arrive with plagiarism report, formatting, and viva pointers.",
		},
	];

	return (
		<>
			<HeaderOne />
			<BreadcrumbServices title={service.title} subtitle={service.title} />

			<section className="section-padding service-hero">
				<div className="container">
					<div className="hero-panel row g-4 align-items-center">
						<div className="col-lg-7">
							<div className="hero-copy wow fadeInUp">
								<span className="eyebrow">Academic Support Service</span>
								<h1>{service.title}</h1>
								<p className="lead">{service.tagline}</p>
								<p className="muted">{service.description}</p>
								<ul className="chip-list">
									{service.highlights.map((item) => (
										<li key={item} className="chip">
											<i className="far fa-check-circle"></i>
											<span>{item}</span>
										</li>
									))}
								</ul>
								<div className="cta-stack">
									<a href="https://wa.me/917303628683" className="theme-btn yellow-btn" target="_blank" rel="noopener noreferrer">
										Request on WhatsApp
									</a>
									<Link href="/contact" className="theme-btn style-2">
										Submit a brief
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="hero-meta-card wow fadeInUp" data-wow-delay=".1s">
								<div className="stat-grid">
									{heroStats.map((stat) => (
										<div key={stat.label} className="stat-item">
											<strong>{stat.value}</strong>
											<span>{stat.label}</span>
										</div>
									))}
								</div>
								<div className="assurance-box">
									<h5>Guaranteed by StudyZone</h5>
									<ul>
										{assurances.map((point) => (
											<li key={point}>
												<i className="far fa-shield-check"></i>
												{point}
											</li>
										))}
									</ul>
								</div>
								<div className="contact-mini">
									<p className="label">Need to talk?</p>
									<a href="tel:+9108882309876">
										<i className="fas fa-phone"></i> +91-08882309876
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding service-body pt-0">
				<div className="container">
					<div className="row g-5">
						<div className="col-lg-8">
							<div className="info-panel wow fadeInUp">
								<h3>What&apos;s delivered</h3>
								<p>Every file is formatted per university guidelines, editable, and backed by references.</p>
								<ul className="styled-list">
									{service.deliverables.map((item) => (
										<li key={item}>
											<i className="fas fa-check"></i>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="info-panel wow fadeInUp" data-wow-delay=".1s">
								<h3>How we work together</h3>
								<div className="process-grid">
									{processSteps.map((step, index) => (
										<div key={step.title} className="process-step">
											<span className="step-count">{index + 1}</span>
											<div>
												<h5>{step.title}</h5>
												<p>{step.copy}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className=" sticky-card wow fadeInUp">
								<h4>Need this service?</h4>
								<p>Share your brief, word count, and deadline. We reply within minutes.</p>
								<div className="d-flex flex-column gap-3 mt-4">
									<a href="tel:+9108882309876" className="theme-btn w-100 text-center">
										Call +91-08882309876
									</a>
									<a href="https://wa.me/917303628683" className="theme-btn yellow-btn w-100 text-center" target="_blank" rel="noopener noreferrer">
										Chat on WhatsApp
									</a>
									<Link href="/contact" className="theme-btn style-2 w-100 text-center">
										Assign Work Online
									</Link>
								</div>
								<div className="divider"></div>
								<p className="small text-muted mb-1">Want to explore more?</p>
								<Link href="/services" className="text-decoration-underline">
									View all services
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<FooterOne />

			<style jsx>{`
				.service-hero {
					background: #f7f9fc;
				}
				.hero-panel {
					background: #fff;
					border-radius: 28px;
					box-shadow: 0 25px 65px rgba(6, 22, 54, 0.08);
					padding: clamp(24px, 3vw, 48px);
					position: relative;
					overflow: hidden;
				}
				.hero-copy {
					position: relative;
					z-index: 1;
					color: #0f172a;
				}
				.hero-copy h1 {
					color: #0f172a;
					margin-bottom: 12px;
					font-size: clamp(28px, 4vw, 44px);
				}
				.hero-copy p {
					color: #4b5a70;
				}
				.hero-copy .muted {
					margin-bottom: 18px;
				}
				.eyebrow {
					display: inline-flex;
					align-items: center;
					gap: 6px;
					font-size: 13px;
					text-transform: uppercase;
					letter-spacing: 0.08em;
					color: #facc15;
					margin-bottom: 14px;
				}
				.chip-list {
					display: flex;
					flex-wrap: wrap;
					gap: 10px;
					padding: 0;
					margin: 0 0 22px 0;
					list-style: none;
				}
				.chip {
					background: #f8fafc;
					border-radius: 999px;
					padding: 10px 16px;
					display: inline-flex;
					align-items: center;
					gap: 8px;
					font-size: 14px;
					color: #0f172a;
					border: 1px solid rgba(15, 23, 42, 0.08);
				}
				.cta-stack {
					display: flex;
					gap: 12px;
					flex-wrap: wrap;
				}
				.hero-meta-card {
					position: relative;
					z-index: 1;
					padding: clamp(24px, 3vw, 32px);
					border-radius: 24px;
					background: #fff;
					box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
					color: #0f172a;
				}
				.stat-grid {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 12px;
				}
				.stat-item {
					padding: 12px 0;
					text-align: center;
					border-right: 1px solid rgba(15, 23, 42, 0.08);
				}
				.stat-item:last-child {
					border-right: none;
				}
				.stat-item strong {
					display: block;
					font-size: 18px;
					color: #0f172a;
				}
				.stat-item span {
					font-size: 13px;
					color: rgba(15, 23, 42, 0.6);
				}
				.assurance-box {
					margin-top: 20px;
					padding: 18px;
					border-radius: 18px;
					background: #f6f7fb;
				}
				.assurance-box ul {
					padding: 0;
					margin: 12px 0 0 0;
					list-style: none;
					display: flex;
					flex-direction: column;
					gap: 10px;
					font-size: 14px;
				}
				.assurance-box li {
					display: flex;
					align-items: center;
					gap: 8px;
					color: #0f172a;
				}
				.contact-mini {
					margin-top: 22px;
					display: flex;
					flex-direction: column;
					gap: 4px;
				}
				.contact-mini .label {
					text-transform: uppercase;
					font-size: 10px;
					letter-spacing: 0.1em;
					color: rgba(15, 23, 42, 0.5);
				}
				.contact-mini a {
					font-weight: 600;
					color: #0f172a;
				}
				.service-body {
					background: #f6f7fb;
				}
				.info-panel {
					background: #fff;
					padding: 32px;
					border-radius: 24px;
					box-shadow: 0 12px 45px rgba(15, 23, 42, 0.08);
					margin-bottom: 26px;
				}
				.info-panel + .info-panel {
					margin-top: 10px;
				}
				.info-panel > p {
					max-width: 640px;
				}
				.styled-list {
					list-style: none;
					padding: 0;
					margin: 24px 0 0;
					display: flex;
					flex-direction: column;
					gap: 14px;
				}
				.styled-list li {
					display: flex;
					align-items: center;
					gap: 12px;
					font-weight: 500;
					color: #0f172a;
				}
				.styled-list i {
					color: #16a34a;
					background: rgba(22, 163, 74, 0.1);
					width: 32px;
					height: 32px;
					border-radius: 50%;
					display: grid;
					place-items: center;
				}
				.process-grid {
					display: grid;
					gap: 20px;
					margin-top: 24px;
				}
				.process-step {
					display: flex;
					gap: 16px;
					align-items: flex-start;
					padding: 18px;
					border-radius: 18px;
					border: 1px solid rgba(15, 23, 42, 0.08);
					background: #fdfdfd;
				}
				.step-count {
					width: 44px;
					height: 44px;
					border-radius: 14px;
					background: rgba(76, 125, 243, 0.12);
					color: #4c7df3;
					font-weight: 600;
					display: grid;
					place-items: center;
				}
				.process-step h5 {
					margin-bottom: 6px;
				}
				.sticky-card {
					background: #fff;
					padding: 30px;
					border-radius: 24px;
					box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
					position: sticky;
					top: 120px;
				}
				.divider {
					height: 1px;
					background: rgba(15, 23, 42, 0.08);
					margin: 28px 0;
				}
				@media (max-width: 991px) {
					.hero-copy,
					.hero-meta-card {
						text-align: center;
					}
					.chip-list {
						justify-content: center;
					}
					.cta-stack {
						justify-content: center;
					}
					.stat-grid {
						grid-template-columns: repeat(2, 1fr);
					}
					.stat-item:nth-child(2) {
						border-right: none;
					}
					.sticky-card {
						position: static;
						margin-top: 8px;
					}
				}
				@media (max-width: 767px) {
					.hero-panel {
						padding: 22px 18px;
					}
					.hero-meta-card {
						margin: 0 auto;
					}
					.stat-grid {
						grid-template-columns: 1fr;
					}
					.stat-item {
						border-right: none;
						border-bottom: 1px solid rgba(15, 23, 42, 0.08);
					}
					.stat-item:last-child {
						border-bottom: none;
					}
					.process-step {
						flex-direction: column;
					}
					.process-step .step-count {
						width: 100%;
					}
				}
				@media (max-width: 575px) {
					.section-padding {
						padding: 60px 0;
					}
					.hero-meta-card,
					.info-panel,
					.sticky-card {
						padding: 22px;
					}
					.chip {
						width: 100%;
						justify-content: center;
					}
					.cta-stack {
						flex-direction: column;
					}
					.styled-list li {
						align-items: flex-start;
						flex-direction: column;
						gap: 8px;
					}
				}
			`}</style>
		</>
	);
};

export default ServiceDetails;

