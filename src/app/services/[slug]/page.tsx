import React from 'react';
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";
import ServiceDetails from "@/components/services/ServiceDetails";
import Wrapper from "@/layouts/Wrapper";

import { Metadata } from 'next';

interface ServicePageProps {
	params: { slug: string };
}

export async function generateStaticParams() {
	return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
	const service = getServiceBySlug(params.slug);
	
	if (!service) {
		return {
			title: "Service Not Found",
		};
	}

	return {
		title: `${service.title} - StudyZone`,
		description: service.tagline,
	};
}

const ServiceDetailsPage = ({ params }: ServicePageProps) => {
	const service = getServiceBySlug(params.slug);

	if (!service) {
		notFound();
	}

	return (
		<Wrapper>
			<ServiceDetails service={service} />
		</Wrapper>
	);
};

export default ServiceDetailsPage;

