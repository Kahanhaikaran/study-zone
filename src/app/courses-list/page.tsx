
import CoursesList from '@/components/courses-list';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Courses List - Shiksha Sagar Academic Support",
	description: "List view of Shiksha Sagar services for assignments, projects, and exams.",
	keywords: "Shiksha Sagar services list, academic support",
};


const index = () => {
  return (
    <Wrapper>
      <CoursesList />
    </Wrapper>
  );
};

export default index;