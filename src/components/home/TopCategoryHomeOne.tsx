import Link from "next/link";
import React from "react";
import { services } from "@/data/services";

const iconClasses = [
	"flaticon-graphic-design",
	"flaticon-cooperation",
	"flaticon-megaphone",
	"flaticon-healthcare",
	"flaticon-pc",
	"flaticon-insurance",
	"flaticon-video-files",
	"flaticon-coding",
	"flaticon-color-palette",
];

const TopCategoryHomeOne = () => {
	const featuredServices = services.slice(0, 9);

	return (
		<section className="top-category section-padding">
			<div className="container">
				<div className="row g-4">
					<div className="col-lg-5">
						<div className="section-title">
							<h6 className="wow fadeInUp">Top Services</h6>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
								Everything students need — from notes to dissertations
							</h2>
						</div>
						<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
							Pick the category you need help with and jump straight into the service details. Each one is crafted
							to match StudyZone’s offering.
						</p>
						<div className="top-category-button">
							<Link href="/services" className="theme-btn yellow-btn mt-40 wow fadeInUp" data-wow-delay=".3s">
								View All Services
							</Link>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="top-category-wrapper">
							<div className="row g-0">
								{featuredServices.map((service, index) => (
									<div
										className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
										data-wow-delay={`${0.3 + (index % 3) * 0.2}s`}
										key={service.slug}
									>
										<div className={`top-category-box-items ${index % 3 === 2 ? "border-right-none" : ""}`}>
											<Link href={`/services/${service.slug}`}>
												<div className="icon">
													<i className={iconClasses[index] || "flaticon-study"}></i>
												</div>
												<h6>{service.title}</h6>
											</Link>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopCategoryHomeOne;
