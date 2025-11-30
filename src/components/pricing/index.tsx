import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import PricingArea from "./PricingArea";

const Pricing = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="Price List" subtitle="Price List" />
			<PricingArea />       
			<FooterOne />
		</>
	);
};

export default Pricing;
