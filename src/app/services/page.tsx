import Link from "next/link";
import { services } from "@/data/services";

const getInitials = (title: string) => {
	return title
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((word) => word.charAt(0))
		.join("")
		.toUpperCase();
};

const ServicesPage = () => {
	return (
		<section className="section-padding">
			<div className="container">
				<div className="section-title text-center">
					<h6 className="wow fadeInUp">Our Services</h6>
					<h2 className="wow fadeInUp" data-wow-delay=".2s">
						Academic solutions for every study requirement
					</h2>
					<p className="mt-3">
						Choose a service to see complete details, deliverables, and how we support you from start to finish.
					</p>
				</div>
				<div className="row g-4 service-grid mt-1">
					{services.map((service, index) => (
						<div className="col-lg-4 col-md-6" key={service.slug}>
							<div className="service-card wow fadeInUp" data-wow-delay={`${(index % 3) * 0.15}s`}>
								<div className="service-card__icon">
									<span>{getInitials(service.title)}</span>
								</div>
								<div className="service-card__body">
									<h5>{service.title}</h5>
									<p>{service.tagline}</p>
									<ul className="service-card__list list-unstyled">
										{service.highlights.slice(0, 3).map((point) => (
											<li key={point}>
												<i className="far fa-check-circle"></i>
												<span>{point}</span>
											</li>
										))}
									</ul>
								</div>
								<div className="service-card__footer">
									<Link href={`/services/${service.slug}`} className="service-card__link">
										View details <i className="far fa-arrow-right"></i>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesPage;

