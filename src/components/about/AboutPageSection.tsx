import Link from "next/link";
import React from "react";

const AboutPageSection = () => {
	return (
		<section className="about-section section-padding pt-0 about-light-panel">
			<div className="container">
				<div className="about-card">
					<div className="row g-5 align-items-center">
						<div className="col-lg-6 order-lg-2">
							<div className="about-visual wow fadeInUp" data-wow-delay=".2s">
								<img src="/assets/img/about/about-main.png" alt="Students collaborating" />
								<div className="about-note">
									<div className="value">3000+</div>
									<p>Projects delivered with 98% repeat requests</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 order-lg-1">
							<div className="about-copy">
								<p className="eyebrow wow fadeInUp">About Shiksha Sagar Support</p>
								<h2 className="wow fadeInUp" data-wow-delay=".1s">
									Personal academic help that feels like a teammate
								</h2>
								<p className="wow fadeInUp" data-wow-delay=".2s">
									Shiksha Sagar is a freelance-led academic studio that lightens the workload for college and university
									students. We combine research, writing, design, and mentoring so you can focus on learning while we
									handle the documentation and submission grind.
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									From quick notes and presentations to long-form dissertations, every deliverable is customized to
									your syllabus, deadline, and preferred tone. Transparency, confidentiality, and plagiarism-free work
									keep clients coming back semester after semester.
								</p>
								<div className="about-stats wow fadeInUp" data-wow-delay=".4s">
									<div className="stat">
										<strong>500+</strong>
										<span>Students guided every year</span>
									</div>
									<div className="stat">
										<strong>4.8/5</strong>
										<span>Average rating</span>
									</div>
									<div className="stat">
										<strong>24/7</strong>
										<span>Support window</span>
									</div>
								</div>
								<ul className="about-list wow fadeInUp" data-wow-delay=".5s">
									<li>
										<i className="far fa-check-circle"></i> Assignments, dissertations, and exam prep created from scratch
									</li>
									<li>
										<i className="far fa-check-circle"></i> Confidential interactions—your information never leaves the room
									</li>
									<li>
										<i className="far fa-check-circle"></i> Multi-format delivery (Word, PPT, handwritten, PDF) based on your instructions
									</li>
								</ul>
								<div className="about-actions wow fadeInUp" data-wow-delay=".6s">
									<Link href="/services" className="theme-btn yellow-btn">
										View Services
									</Link>
									<a href="tel:+918882309876" className="theme-btn yellow-btn">
										Call +91-8882309876
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutPageSection;

