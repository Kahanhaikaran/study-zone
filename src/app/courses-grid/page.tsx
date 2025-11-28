
import CoursesGrid from '@/components/courses-grid';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Courses Grid - Shiksha Sagar Academic Support",
	description: "Grid view of Shiksha Sagar's academic support services.",
	keywords: "Shiksha Sagar services grid, academic help",
};


const index = () => {
  return (
    <Wrapper>
      <CoursesGrid />
    </Wrapper>
  );
};

export default index;