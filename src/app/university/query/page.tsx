import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import UniversityQueryForm from "@/components/university/UniversityQueryForm";
import { Metadata } from "next";

type QueryPageProps = {
	searchParams?: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
	title: "University Assignment & Project Query - Guide Techs",
	description:
		"Share your university, course, semester and subjects to get personalised WhatsApp help for solved assignments, exam notes, synopsis and projects.",
};

const getUniversityNameFromSearch = (searchParams: QueryPageProps["searchParams"]): string => {
	if (!searchParams) return "Your University";
	const raw = searchParams.university;
	if (!raw) return "Your University";
	const value = Array.isArray(raw) ? raw[0] : raw;
	return value || "Your University";
};

const UniversityQueryPage = ({ searchParams }: QueryPageProps) => {
	const universityName = getUniversityNameFromSearch(searchParams);

	return (
		<Wrapper>
			<>
				<HeaderOne />
				<BreadcrumbEvent title="University Query" subtitle="Universities" />

				<section className="university-detail-page section-padding">
					<div className="container">
						<div className="row justify-content-center mb-30">
							<div className="col-lg-10">
								<div className="section-title text-center mb-10">
									<span className="subtitle">University Solutions</span>
									<h1 className="title">Tell us what you need for your university work</h1>
									<p className="mt-10">
										Fill this simple form with your course, semester and subjects in one message. We&apos;ll reply
										on WhatsApp with the right solved assignments, exam notes, synopses or project guidance matched
										to your university.
									</p>
								</div>
							</div>
						</div>
					</div>

					<UniversityQueryForm universityName={universityName} />
				</section>

				<FooterOne />
			</>
		</Wrapper>
	);
};

export default UniversityQueryPage;


