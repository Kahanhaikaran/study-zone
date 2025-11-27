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
					<h2 className="wow fadeInUp" data-wow-delay=".2s">
						Modern solutions for every academic milestone
					</h2>
					<p className="mt-3">
						Each service is packaged like a modern product card so you can quickly scan benefits, deliverables, and dive deeper with a single click.
					</p>
				</div>
				<div className="row g-4 mt-1">
					{services.map((service, index) => {
						const theme = cardThemes[index % cardThemes.length];
						return (
							<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={service.slug}>
								<div className="service-card-lite courses-card-items h-100 wow fadeInUp" data-wow-delay={`${index * 0.08}s`}>
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
					background: #f6f7fb;
				}
				.service-card-lite {
					border: 1px solid rgba(3, 7, 18, 0.08);
					border-radius: 18px;
					padding: 28px 24px;
					background: #ffffff;
					transition: transform 0.25s ease, box-shadow 0.25s ease;
					display: flex;
					flex-direction: column;
					gap: 18px;
					height: 100%;
				}
				.service-card-lite:hover {
					transform: translateY(-6px);
					box-shadow: 0 22px 45px rgba(15, 23, 42, 0.12);
				}
				.service-card-head {
					display: flex;
					align-items: center;
					gap: 16px;
				}
				.icon-circle {
					width: 52px;
					height: 52px;
					border-radius: 14px;
					background: rgba(15, 23, 42, 0.06);
					display: grid;
					place-items: center;
					font-size: 19px;
				}
				.head-text h4 {
					margin: 0;
					color: #0f172a;
				}
				.tag {
					display: inline-block;
					margin-bottom: 4px;
					font-size: 13px;
					color: rgba(15, 23, 42, 0.6);
				}
				.pill-group {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
					gap: 10px;
					padding: 0;
					margin: 0;
					list-style: none;
				}
				.pill {
					display: flex;
					align-items: center;
					gap: 8px;
					font-size: 13px;
					padding: 8px 14px;
					border-radius: 40px;
					border: 1px solid rgba(15, 23, 42, 0.1);
					background: rgba(248, 249, 252, 0.8);
					color: #0f172a;
				}
				.pill i {
					color: #16a34a;
				}
				.service-card-footer {
					display: flex;
					align-items: flex-end;
					justify-content: space-between;
					gap: 16px;
					padding-top: 16px;
					border-top: 1px solid rgba(15, 23, 42, 0.08);
					font-size: 13px;
					color: rgba(15, 23, 42, 0.7);
					flex-wrap: wrap;
					margin-top: auto;
				}
				.footer-meta {
					min-width: 100px;
				}
				.footer-meta strong {
					display: block;
					font-size: 19px;
					color: #0f172a;
				}
				.footer-meta span {
					color: rgba(15, 23, 42, 0.55);
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
						padding: 22px 18px;
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

