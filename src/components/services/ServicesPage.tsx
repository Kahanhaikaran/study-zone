"use client";

import Link from "next/link";
import { services } from "@/data/services";

const cardThemes = [
	{ icon: "fas fa-book-open", accent: "#ffcc4d" },
	{ icon: "fas fa-pen-fancy", accent: "#2fd2b1" },
	{ icon: "fas fa-lightbulb", accent: "#4c7df3" },
];

const ServicesPage = () => {
	return (
		<section className="section-padding services-modern-wrapper">
			<div className="container">
				<div className="section-title text-center">
					<h6 className="wow fadeInUp">Our Services</h6>
					<h2 className="wow fadeInUp" data-wow-delay=".15s">
						Modern solutions for every academic milestone
					</h2>
					<p className="mt-3">
						Each service is packaged like a clean card so you can scan benefits, deliverables, and dive deeper with a single click.
					</p>
				</div>
				<div className="row g-4 mt-1">
					{services.map((service, index) => {
						const theme = cardThemes[index % cardThemes.length];
						return (
							<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={service.slug}>
								{/* Light scroll animation without heavy staggering */}
								<div className="service-card-lite courses-card-items h-100 wow fadeInUp" data-wow-delay=".05s">
									<div className="service-card-head">
										<div className="icon-circle" style={{ color: theme.accent }}>
											<i className={theme.icon}></i>
										</div>
										<div className="head-text">
											<span className="tag">{service.deliverables[0]}</span>
											<h4>{service.title}</h4>
										</div>
									</div>
									<p className="mb-3">{service.tagline}</p>
									<ul className="pill-group">
										{service.highlights.slice(0, 3).map((point) => (
											<li key={point} className="pill">
												<i className="far fa-check-circle"></i>
												<span>{point}</span>
											</li>
										))}
									</ul>
									<div className="service-card-footer">
										<div className="footer-meta">
											<strong>{service.deliverables.length}</strong>
											<span>Deliverables</span>
										</div>
										<div className="footer-meta">
											<strong>{service.highlights.length}</strong>
											<span>Benefits</span>
										</div>
										<Link href={`/services/${service.slug}`} className="theme-btn yellow-btn flex-shrink-0">
											View Details
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<style jsx>{`
				.services-modern-wrapper {
					position: relative;
					background: transparent;
				}
				.service-card-lite {
					border-radius: 18px;
					padding: 22px 20px;
					background: #0d1930;
					box-shadow: 0 14px 32px rgba(15, 23, 42, 0.45);
					border: 1px solid rgba(148, 163, 184, 0.18);
					display: flex;
					flex-direction: column;
					gap: 14px;
					height: 100%;
					transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease, background-color 0.22s ease;
				}
				.service-card-lite:hover {
					transform: translateY(-4px);
					box-shadow: 0 22px 55px rgba(15, 23, 42, 0.7);
					border-color: rgba(250, 204, 21, 0.6);
					background: #101f3a;
				}
				.service-card-head {
					display: flex;
					align-items: center;
					gap: 16px;
				}
				.icon-circle {
					width: 46px;
					height: 46px;
					border-radius: 999px;
					background: rgba(15, 23, 42, 0.85);
					display: grid;
					place-items: center;
					font-size: 18px;
					box-shadow: 0 10px 22px rgba(15, 23, 42, 0.7);
				}
				.head-text h4 {
					margin: 0;
					color: #f9fafb;
					font-size: 17px;
				}
				.tag {
					display: inline-block;
					margin-bottom: 4px;
					font-size: 12px;
					color: rgba(148, 163, 184, 0.95);
				}
				p {
					color: rgba(226, 232, 240, 0.9);
					font-size: 13px;
					margin-bottom: 4px;
				}
				.pill-group {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
					gap: 6px;
					padding: 0;
					margin: 4px 0 0;
					list-style: none;
				}
				.pill {
					display: flex;
					align-items: center;
					gap: 6px;
					font-size: 12px;
					padding: 7px 12px;
					border-radius: 999px;
					border: 1px solid rgba(148, 163, 184, 0.35);
					background: rgba(15, 23, 42, 0.8);
					color: rgba(229, 231, 235, 0.96);
				}
				.pill i {
					color: #22c55e;
					font-size: 13px;
				}
				.service-card-footer {
					display: flex;
					align-items: flex-end;
					justify-content: space-between;
					gap: 14px;
					padding-top: 14px;
					border-top: 1px solid rgba(148, 163, 184, 0.35);
					font-size: 12px;
					color: rgba(148, 163, 184, 0.95);
					flex-wrap: wrap;
					margin-top: auto;
				}
				.footer-meta {
					min-width: 90px;
				}
				.footer-meta strong {
					display: block;
					font-size: 18px;
					color: #f9fafb;
				}
				.footer-meta span {
					color: rgba(148, 163, 184, 0.95);
				}
				@media (max-width: 991px) {
					.section-title p {
						max-width: 520px;
						margin-left: auto;
						margin-right: auto;
					}
				}
				@media (max-width: 767px) {
					.service-card-lite {
						padding: 20px 18px;
					}
					.pill-group {
						grid-template-columns: 1fr;
					}
				}
				@media (max-width: 575px) {
					.service-card-footer {
						flex-direction: column;
						align-items: flex-start;
					}
					.section-padding {
						padding: 60px 0;
					}
				}
			`}</style>
		</section>
	);
};

export default ServicesPage;

