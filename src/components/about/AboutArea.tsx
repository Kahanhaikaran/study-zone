
import Link from "next/link";
import React from "react";

const services = [
	"Assignments across every subject",
	"Detailed, original project work",
	"Exam-ready notes & PPTs",
	"Dissertations and thesis mentoring",
	"Online & offline exam guidance",
];

const AboutArea = () => {
	const phoneHref = "tel:+918882309876";
	const whatsappHref = "https://wa.me/918882309876";

	return (
		<section className="about-section fix">
			<div className="about-wrapper">
				<div className="container">
					<div className="row g-4 align-items-center">
						<div className="col-lg-5">
							<div className="section-title mb-0">
								<h6 className="wow fadeInUp">About Shiksha Sagar Support</h6>
								<h2 className="wow fadeInUp" data-wow-delay=".3s">
									We are the solution to every academic problem
								</h2>
								<p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
									I’m a freelance academic service provider helping school and college students complete every
									requirement with accuracy, speed, and complete confidentiality.
								</p>
								<p className="wow fadeInUp" data-wow-delay=".5s">
									From assignment writing and project assistance to exam preparation, notes, PPTs, custom reports,
									and even handwriting support—everything is tailored to your syllabus and delivered on time.
								</p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="about-content">
								<ul className="list-unstyled about-list wow fadeInUp" data-wow-delay=".5s">
									{services.map((item) => (
										<li key={item}>
											<i className="far fa-check-circle"></i> {item}
										</li>
									))}
								</ul>
								<p className="wow fadeInUp" data-wow-delay=".6s">
									Every great achievement begins with a single step. Let us make that step easier with original
									work, expert guidance, and unwavering confidentiality.
								</p>
								<div className="counter-box-items">
									<div className="counter-content wow fadeInUp" data-wow-delay=".3s">
										<h2>100%</h2>
										<p>Plagiarism-Free Promise</p>
									</div>
									<div className="text wow fadeInUp" data-wow-delay=".5s">
										<p>Need urgent help? Call or WhatsApp anytime for reliable, affordable academic assistance.</p>
										<div className="d-flex gap-3 flex-wrap">
											<a className="theme-btn style-2" href={phoneHref}>
												Call +91-8882309876
											</a>
											<a
												className="theme-btn hover-white"
												href={whatsappHref}
												target="_blank"
												rel="noopener noreferrer"
											>
												Chat on WhatsApp
											</a>
										</div>
									</div>
								</div>
								<Link href="/contact" className="theme-btn wow fadeInUp" data-wow-delay=".7s">
									Discuss Your Requirements
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutArea;