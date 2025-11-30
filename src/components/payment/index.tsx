import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import MarqueeOne from "@/common/MarqueeOne";
import React from "react";
import PaymentArea from "./PaymentArea";

const Payment = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="Payment" subtitle="Payment" />
			<PaymentArea />
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default Payment;

