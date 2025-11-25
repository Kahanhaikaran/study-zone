 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Pricing from '@/components/pricing';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Pricing - StudyZone Academic Support",
	description: "Transparent pricing for StudyZone academic services.",
	keywords: "StudyZone pricing, academic support rates",
};


const index = () => {
  return (
    <Wrapper>
      <Pricing />
    </Wrapper>
  );
};

export default index;