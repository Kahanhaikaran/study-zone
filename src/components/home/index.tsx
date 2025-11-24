import React from "react";

import HeroHomeOne from "./HeroHomeOne";
import TeamHomeOne from "./TeamHomeOne";
import BlogHomeOne from "./BlogHomeOne";
import ChooseHomeOne from "./ChooseHomeOne";
import BrandsHomeOne from "./BrandsHomeOne";
import MarqueeOne from "@/common/MarqueeOne";
import FeatureHomeOne from "./FeatureHomeOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import NewsletterHomeOne from "./NewsletterHomeOne";
import TopCategoryHomeOne from "./TopCategoryHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import PopularCoursesHomeOne from "./PopularCoursesHomeOne";

const HomeOne = () => {
	return (
	<> 
	    <HeaderOne />
        <HeroHomeOne />
        <FeatureHomeOne />
        <TopCategoryHomeOne />
		<PopularCoursesHomeOne />
		<MarqueeOne />
		<ChooseHomeOne />
		<TeamHomeOne />
		<NewsletterHomeOne />
		<TestimonialHomeOne />
		<BrandsHomeOne />
		{/* <BlogHomeOne /> */}
		<MarqueeOne /> 
		<FooterOne />      
	</>
	);
};

export default HomeOne;
