 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Contact from '@/components/contact';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Contact - StudyZone Academic Support",
	description: "Get in touch with StudyZone for assignments, projects, and exam help.",
	keywords: "StudyZone contact, academic help contact",
};


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;