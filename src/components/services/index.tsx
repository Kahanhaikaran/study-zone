import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import FooterOne from "@/layouts/footers/FooterOne";
import ServicesPage from "./ServicesPage";

const Services = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="Services" subtitle="Services" />
			<ServicesPage />
			<FooterOne />
		</>
	);
};

export default Services;

