import React from 'react';
import Services from '@/components/services';
import Wrapper from '@/layouts/Wrapper';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Services - Shiksha Sagar - Academic Support Services",
	description: "Academic solutions for every study requirement",
	keywords: "academic services, assignment writing, study materials",
};

const index = () => {
  return (
    <Wrapper>
      <Services />
    </Wrapper>
  );
};

export default index;

