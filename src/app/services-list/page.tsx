
import ServicesList from '@/components/services-list';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Services List - Shiksha Sagar Academic Support",
	description: "List view of Shiksha Sagar services for assignments, projects, and exams.",
	keywords: "Shiksha Sagar services list, academic support",
};


const index = () => {
  return (
    <Wrapper>
      <ServicesList />
    </Wrapper>
  );
};

export default index;