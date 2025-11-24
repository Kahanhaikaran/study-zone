import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";

interface ServicePageProps {
	params: { slug: string };
}

export async function generateStaticParams() {
	return services.map((service) => ({ slug: service.slug }));
}

const ServiceDetailsPage = ({ params }: ServicePageProps) => {
	const service = getServiceBySlug(params.slug);

	if (!service) {
		notFound();
	}

	return (
		<section className="section-padding service-details">
			<div className="container">
				<div className="row g-4">
					<div className="col-lg-8">
						<div className="service-details__content">
							<h1>{service.title}</h1>
							<p className="lead text-muted">{service.tagline}</p>
							<p>{service.description}</p>

							<div className="service-details__card mt-4">
								<h3>What you get</h3>
								<ul className="list-unstyled mt-3">
									{service.deliverables.map((item) => (
										<li key={item}>
											<i className="far fa-check-circle"></i> {item}
										</li>
									))}
								</ul>
							</div>

							<div className="service-details__card mt-4">
								<h3>Why students choose this service</h3>
								<ul className="list-unstyled mt-3">
									{service.highlights.map((item) => (
										<li key={item}>
											<i className="far fa-star"></i> {item}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="sidebar-widget">
							<h4>Need this service?</h4>
							<p>Reach out with your requirements and deadline. We reply within minutes.</p>
							<div className="d-flex flex-column gap-3 mt-3">
								<a href="tel:+917303628683" className="theme-btn w-100 text-center">
									Call +91 73036 28683
								</a>
								<a
									href="https://wa.me/917303628683"
									className="theme-btn yellow-btn w-100 text-center"
									target="_blank"
									rel="noopener noreferrer"
								>
									Chat on WhatsApp
								</a>
								<Link href="/contact" className="theme-btn style-2 w-100 text-center">
									Assign Work Online
								</Link>
							</div>
							<div className="mt-4">
								<p className="small text-muted mb-1">Would you like to explore other services?</p>
								<Link href="/services" className="text-decoration-underline">
									View all services
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceDetailsPage;

