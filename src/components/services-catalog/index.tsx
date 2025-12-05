
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import BreadcrumbServices from '@/common/breadcrumb/BreadcrumbServices';
import MarqueeOne from '@/common/MarqueeOne';
import ServicesCatalogArea from './ServicesCatalogArea';

const ServicesCatalog = () => {
  return (
		<>
			<HeaderOne />
			<BreadcrumbServices title="All Services" subtitle="Services" />
			<ServicesCatalogArea />
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default ServicesCatalog;