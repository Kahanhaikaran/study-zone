import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import FooterOne from "@/layouts/footers/FooterOne";
import NewsletterHomeOne from "../home/NewsletterHomeOne";
import AboutPageSection from "./AboutPageSection";

const About = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="About" subtitle="About" />
      <AboutPageSection />
      <NewsletterHomeOne />
			<FooterOne />
		</>
	);
};

export default About;
