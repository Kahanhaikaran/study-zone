import React from "react";

import HeroHomeOne from "./HeroHomeOne";
import ChooseHomeOne from "./ChooseHomeOne";
import BrandsHomeOne from "./BrandsHomeOne";
import MarqueeOne from "@/common/MarqueeOne";
import FeatureHomeOne from "./FeatureHomeOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import NewsletterHomeOne from "./NewsletterHomeOne";
// import TopCategoryHomeOne from "./TopCategoryHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import TopServicesHomeOne from "./TopServicesHomeOne";
import FaqArea from "@/components/faq/FaqArea";

const HomeOne = () => {
	return (
	<> 
	    <HeaderOne />
        <HeroHomeOne />
        <BrandsHomeOne />
        <FeatureHomeOne />
        {/* <TopCategoryHomeOne /> */}
		<TopServicesHomeOne />
		<MarqueeOne />
		<ChooseHomeOne />
		
		<NewsletterHomeOne />
		<TestimonialHomeOne />
		<FaqArea />
		{/* <BlogHomeOne /> */}
		<MarqueeOne /> 
		<a
			href="https://wa.me/917303628683"
			className="floating-whatsapp"
			aria-label="Chat on WhatsApp"
			target="_blank"
			rel="noreferrer"
		>
			<i className="fab fa-whatsapp" aria-hidden="true" />
		</a>
		<FooterOne />      
	</>
	);
};

export default HomeOne;
