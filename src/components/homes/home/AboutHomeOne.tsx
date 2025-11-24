
import Link from "next/link";
import React from "react";

const AboutHomeOne = () => {
	return (
		<section className="about-section fix section-padding pt-0">
			<div className="about-wrapper">
				<div className="row g-4 align-items-center">
					<div className="col-xl-6">
						<div className="section-title">
							<h6 className="wow fadeInUp">Need custom academic help?</h6>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
								StudyZone Support has you covered
							</h2>
						</div>
						<p className="wow fadeInUp" data-wow-delay=".5s">
							Assignments, dissertations, exam notes, PPTs, handwriting support, SEO projects, or thesis writing—our
							freelance team tackles every academic requirement with speed, confidentiality, and clarity.
						</p>
						<div className="d-flex gap-3 flex-wrap mt-4 wow fadeInUp" data-wow-delay=".6s">
							<Link href="/services" className="theme-btn">
								View Our Services
							</Link>
							<Link href="/about" className="theme-btn style-2">
								Learn About Us
							</Link>
						</div>
					</div>
					<div className="col-xl-6">
						<div className="about-image wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
							<img src="assets/img/about/01.jpg" alt="img" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutHomeOne;