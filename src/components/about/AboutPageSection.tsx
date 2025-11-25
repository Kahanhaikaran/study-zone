import Link from "next/link";
import React from "react";

const AboutPageSection = () => {
	return (
		<section className="about-section section-padding pt-0">
			<div className="container">
				<div className="row g-5 align-items-center">
					<div className="col-lg-6">
						<div className="section-title mb-4">
							<h6 className="wow fadeInUp">About StudyZone Support</h6>
							<h2 className="wow fadeInUp" data-wow-delay=".2s">
								Personal academic help that feels like a teammate
							</h2>
						</div>
						<p className="wow fadeInUp" data-wow-delay=".3s">
							StudyZone is a freelance-led academic support studio that lightens the workload for college and
							university students. We combine research, writing, design, and mentoring so you can focus on learning
							while we take care of the documentation and submission side of things.
						</p>
						<p className="wow fadeInUp" data-wow-delay=".4s">
							From quick notes and presentations to long-form dissertations, every deliverable is customized to
							your syllabus, deadline, and preferred tone. Transparency, confidentiality, and plagiarism-free work
							are the promises that keep clients coming back semester after semester.
						</p>
						<div className="row g-3 mt-2">
							<div className="col-sm-6">
								<div className="about-stat wow fadeInUp" data-wow-delay=".5s">
									<h3>500+</h3>
									<p>Students guided every year</p>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="about-stat wow fadeInUp" data-wow-delay=".6s">
									<h3>24/7</h3>
									<p>Support for urgent submissions</p>
								</div>
							</div>
						</div>
						<ul className="about-list wow fadeInUp mt-4" data-wow-delay=".7s">
							<li>
								<i className="far fa-check-circle"></i> Assignments, dissertations, and exam prep created from
								scratch
							</li>
							<li>
								<i className="far fa-check-circle"></i> Confidential interactions—your information never leaves the
								room
							</li>
							<li>
								<i className="far fa-check-circle"></i> Multi-format delivery (Word, PPT, handwritten, PDF) based on
								your instructions
							</li>
						</ul>
						<div className="d-flex flex-wrap gap-3 mt-4 wow fadeInUp" data-wow-delay=".8s">
							<Link href="/services" className="theme-btn">
								View Services
							</Link>
							<a href="tel:+917303628683" className="theme-btn style-2">
								Call +91 73036 28683
							</a>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="about-page-image wow fadeInUp" data-wow-delay=".4s">
							<img src="/assets/img/about/about-main.jpg" alt="Students collaborating" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutPageSection;

