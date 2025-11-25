 
import React from 'react';
import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "About - StudyZone Academic Support",
	description: "Learn how StudyZone delivers personalized academic assistance.",
	keywords: "StudyZone, about StudyZone, academic support story",
};


const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;