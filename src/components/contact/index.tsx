import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
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
			<FooterOne />
		</>
	);
};

export default Contact;
