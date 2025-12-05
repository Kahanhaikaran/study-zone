
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import BreadcrumbServices from '@/common/breadcrumb/BreadcrumbServices';
import ServicesGridArea from './ServicesGridArea';

const ServicesGrid = () => {
  return (
    <>
    <HeaderOne />
    <BreadcrumbServices title="Services - Grid Style" subtitle="Services Grid" />
    <ServicesGridArea /> 
    <FooterOne />      
    </>
  );
};

export default ServicesGrid;