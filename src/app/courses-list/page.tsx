
import CoursesList from '@/components/courses-list';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Courses List - StudyZone Academic Support",
	description: "List view of StudyZone services for assignments, projects, and exams.",
	keywords: "StudyZone services list, academic support",
};


const index = () => {
  return (
    <Wrapper>
      <CoursesList />
    </Wrapper>
  );
};

export default index;