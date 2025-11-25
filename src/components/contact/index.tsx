import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "@/common/MarqueeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import ContactArea from "./ContactArea";

const Contact = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="Contact" subtitle="Contact" />
			<ContactArea />
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default Contact;
