import Link from "next/link";
import { services } from "@/data/services";

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
				<div className="row g-4 mt-1">
					{services.map((service, index) => (
						<div className="col-lg-4 col-md-6" key={service.slug}>
							<div className="courses-card-items wow fadeInUp h-100" data-wow-delay={`${index * 0.1}s`}>
								<div className="courses-content">
									<h5>{service.title}</h5>
									<p>{service.tagline}</p>
									<ul className="list-unstyled mt-3">
										{service.highlights.slice(0, 2).map((point) => (
											<li key={point}>
												<i className="far fa-check-circle"></i> {point}
											</li>
										))}
									</ul>
									<Link href={`/services/${service.slug}`} className="theme-btn yellow-btn mt-3">
										View Details
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

