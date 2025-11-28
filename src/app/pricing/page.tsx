 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Pricing from '@/components/pricing';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Pricing - Shiksha Sagar Academic Support",
	description: "Transparent pricing for Shiksha Sagar academic services.",
	keywords: "Shiksha Sagar pricing, academic support rates",
};


const index = () => {
  return (
    <Wrapper>
      <Pricing />
    </Wrapper>
  );
};

export default index;