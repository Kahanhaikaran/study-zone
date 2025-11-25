
import CoursesGrid from '@/components/courses-grid';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Courses Grid - StudyZone Academic Support",
	description: "Grid view of StudyZone's academic support services.",
	keywords: "StudyZone services grid, academic help",
};


const index = () => {
  return (
    <Wrapper>
      <CoursesGrid />
    </Wrapper>
  );
};

export default index;