
import BreadcrumbServices from '@/common/breadcrumb/BreadcrumbServices';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import ServicesListArea from './ServicesListArea';

const ServicesList = () => {
  return (
    <>
    <HeaderOne />
    <BreadcrumbServices title="Services - List View Style" subtitle="Services List View" />
    <ServicesListArea />
    <FooterOne />      
    </>
  );
};

export default ServicesList;