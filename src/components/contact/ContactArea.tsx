
import React from "react";

const contactDetails = [
	{
		label: "Phone / WhatsApp",
		value: "+91-8882309876",
		subtext: "Tap to call or chat",
		icon: "fas fa-phone",
		link: "tel:+918882309876",
		altLink: "https://wa.me/917303628683",
	},
	{
		label: "Email",
		value: "myShikshaSagar@gmail.com",
		subtext: "Send detailed requirements",
		icon: "fas fa-envelope-open-text",
		link: "mailto:myShikshaSagar@gmail.com",
	},
	{
		label: "Support Hours",
		value: "10 AM – 11 PM IST",
		subtext: "Available all 7 days",
		icon: "fas fa-clock",
	},
	{
		label: "Service Region",
		value: "India (Global delivery)",
		subtext: "Online/ Offline assistance",
		icon: "fas fa-globe",
	},
];

const ContactArea = () => {
	return (
		<section className="contact-section section-padding pt-0 fix">
			<div className="container">
				<div className="section-title text-center">
					<h6 className="wow fadeInUp">Contact</h6>
					<h2 className="wow fadeInUp" data-wow-delay=".2s">
						One message away from fast academic support
					</h2>
					<p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
						Reach out through any channel below. You'll get a quick confirmation with timelines and cost.
					</p>
				</div>

				<div className="contact-info-wrapper">
					<div className="row g-4">
						{contactDetails.map((detail) => (
							<div className="col-lg-3 col-sm-6" key={detail.label}>
								<div className="contact-info-card h-100 wow fadeInUp" data-wow-delay=".2s">
									<div className="icon">
										<i className={detail.icon}></i>
									</div>
									<p className="label">{detail.label}</p>
									{detail.link ? (
										<a href={detail.link} className="value">
											{detail.value}
										</a>
									) : (
										<p className="value">{detail.value}</p>
									)}
									<p className="subtext">{detail.subtext}</p>
									{detail.altLink && (
										<a href={detail.altLink} target="_blank" rel="noopener noreferrer" className="alt-link">
											Open WhatsApp
										</a>
									)}
								</div>
							</div>
						))}
					</div>

					<div className="contact-cta-bar wow fadeInUp" data-wow-delay=".3s">
						<div>
							<h4>Prefer a quick call?</h4>
							<p>Average response time: under 30 minutes during support hours.</p>
						</div>
						<div className="cta-actions">
							<a href="tel:+918882309876" className="theme-btn yellow-btn">
								Call Now
							</a>
							<a href="https://wa.me/917303628683" target="_blank" rel="noopener noreferrer" className="theme-btn yellow-btn style-2">
								WhatsApp
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactArea;