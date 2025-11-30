
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Payment from '@/components/payment';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Payment - Shiksha Sagar Academic Support",
	description: "Secure payment options for Shiksha Sagar academic services.",
	keywords: "Shiksha Sagar payment, academic support payment, secure payment",
};

const index = () => {
  return (
    <Wrapper>
      <Payment />
    </Wrapper>
  );
};

export default index;

