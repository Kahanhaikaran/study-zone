
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Courses from '@/components/courses';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Courses - StudyZone Academic Support",
	description: "Browse StudyZone services covering assignments, projects, and exam prep.",
	keywords: "StudyZone courses, academic services list",
};


const index = () => {
  return (
    <Wrapper>
      <Courses />      
    </Wrapper>
  );
};

export default index;