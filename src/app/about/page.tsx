 
import React from 'react';
import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "About - Shiksha Sagar Academic Support",
	description: "Learn how Shiksha Sagar delivers personalized academic assistance.",
	keywords: "Shiksha Sagar, about Shiksha Sagar, academic support story",
};


const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;