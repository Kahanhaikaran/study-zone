 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Contact from '@/components/contact';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Contact - Shiksha Sagar Academic Support",
	description: "Get in touch with Shiksha Sagar for assignments, projects, and exam help.",
	keywords: "Shiksha Sagar contact, academic help contact",
};


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;