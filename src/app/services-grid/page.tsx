
import ServicesGrid from '@/components/services-grid';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Services Grid - Shiksha Sagar Academic Support",
	description: "Grid view of Shiksha Sagar's academic support services.",
	keywords: "Shiksha Sagar services grid, academic help",
};


const index = () => {
  return (
    <Wrapper>
      <ServicesGrid />
    </Wrapper>
  );
};

export default index;