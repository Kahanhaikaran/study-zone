import HomeOne from "@/components/home"; 
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";
// meta data

export const metadata: Metadata = {
	title: "StudyZone - Academic Support Platform",
	description: "Personalized academic support for assignments, projects, and exams.",
	keywords: "StudyZone, academic support, assignments, projects, exam help",
};

const index = () => {
	return (
		<Wrapper>
			<HomeOne />    
		</Wrapper>
	);
};

export default index;
