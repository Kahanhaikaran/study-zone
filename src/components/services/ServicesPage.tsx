"use client";

import Link from "next/link";
import { services } from "@/data/services";

const cardThemes = [
	{ icon: "fas fa-book-open" },
	{ icon: "fas fa-pen-fancy" },
	{ icon: "fas fa-lightbulb" },
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
										<div className="icon-circle">
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
									<Link href={`/services/${service.slug}`} className="theme-btn yellow-btn">
										View Details
									</Link>
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
					background: transparent;
					box-shadow: 0 14px 32px rgba(15, 23, 42, 0.15);
					border: 1px solid rgba(148, 163, 184, 0.18);
					display: flex;
					flex-direction: column;
					gap: 14px;
					height: 100%;
					transition: transform 0.3s ease, box-shadow 0.3s ease;
				}
				.service-card-lite:hover {
					transform: translateY(-8px) scale(1.02);
					box-shadow: 0 24px 60px rgba(15, 23, 42, 0.25), 0 8px 24px rgba(15, 23, 42, 0.15);
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
					background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.15) 100%);
					display: grid;
					place-items: center;
					font-size: 18px;
					color: #3b82f6;
					box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
					border: 1px solid rgba(59, 130, 246, 0.2);
				}
				.head-text h4 {
					margin: 0;
					font-size: 17px;
				}
				.tag {
					display: inline-block;
					margin-bottom: 4px;
					font-size: 12px;
					color: rgba(148, 163, 184, 0.95);
				}
				p {
					font-size: 13px;
					margin-bottom: 4px;
				}
				.pill-group {
					display: flex;
					flex-direction: column;
					gap: 10px;
					padding: 0;
					margin: 12px 0 0;
					list-style: none;
				}
				.pill {
					display: flex;
					align-items: flex-start;
					gap: 10px;
					font-size: 13px;
					line-height: 1.5;
					padding: 12px 14px;
					border-radius: 12px;
					border: 1px solid rgba(148, 163, 184, 0.2);
					background: linear-gradient(135deg, rgba(249, 250, 251, 0.95) 0%, rgba(241, 245, 249, 0.9) 100%);
					color: #1e293b;
					transition: transform 0.25s ease, box-shadow 0.25s ease;
					box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
				}
				.pill:hover {
					transform: translateY(-2px) scale(1.02);
					box-shadow: 0 6px 16px rgba(15, 23, 42, 0.15), 0 2px 8px rgba(15, 23, 42, 0.1);
				}
				.pill i {
					color: #22c55e;
					font-size: 14px;
					margin-top: 2px;
					flex-shrink: 0;
				}
				.pill span {
					flex: 1;
					font-weight: 500;
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
					.section-padding {
						padding: 60px 0;
					}
				}
			`}</style>
		</section>
	);
};

export default ServicesPage;

