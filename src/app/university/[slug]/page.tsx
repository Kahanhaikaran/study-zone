import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import { Metadata } from "next";
import React from "react";

type UniversitySlug =
  | "amity"
  | "imt"
  | "lpu"
  | "symbiosis"
  | "annamalai"
  | "ip-university"
  | "nios"
  | "upes"
  | "bvdu"
  | "isbm"
  | "nmims"
  | "vmou"
  | "ignou"
  | "jnu-jaipur"
  | "smu";

const prettyName = (slug: UniversitySlug): string => {
  switch (slug) {
    case "ip-university":
      return "IP University";
    case "jnu-jaipur":
      return "JNU JAIPUR";
    default:
      return slug.toUpperCase().replace(/-/g, " ");
  }
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: UniversitySlug };
}): Metadata => {
  const name = prettyName(params.slug);
  return {
    title: `${name} University Support - Shiksha Sagar`,
    description: `Solved assignments, exam notes, synopsis and project guidance for ${name} distance and regular learning students.`,
  };
};

const UniversityDetailPage = ({ params }: { params: { slug: UniversitySlug } }) => {
  const name = prettyName(params.slug);

  return (
    <Wrapper>
      <>
        <HeaderOne />
        <BreadcrumbEvent title={name} subtitle="Universities" />

        <section className="university-detail-page section-padding">
          <div className="container">
            <div className="row justify-content-center mb-30">
              <div className="col-lg-10">
                <div className="section-title text-center mb-10">
                  <span className="subtitle">University Solutions</span>
                  <h1 className="title">{name}</h1>
                  <p className="mt-10">
                    Solved assignments, exam notes, synopses and project help tailored for {name} students.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mb-30">
              <div className="col-lg-10">
                <div className="university-highlight-row">
                  <div className="highlight-card">
                    <i className="far fa-clock" aria-hidden="true" />
                    <div>
                      <p className="label">Fast delivery</p>
                      <p className="value">48-hour priority slots</p>
                    </div>
                  </div>
                  <div className="highlight-card">
                    <i className="far fa-copy" aria-hidden="true" />
                    <div>
                      <p className="label">Plagiarism safe</p>
                      <p className="value">Turnitin-checked</p>
                    </div>
                  </div>
                  <div className="highlight-card">
                    <i className="far fa-comments" aria-hidden="true" />
                    <div>
                      <p className="label">WhatsApp support</p>
                      <p className="value">Direct expert chat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="university-rich-copy">
                  <h2 className="mb-15">What we do for {name} students</h2>
                  <ul className="ua-list">
                    <li>University-wise solved assignments prepared as per latest {name} guidelines.</li>
                    <li>Exam-focused notes that cover important questions and easy-to-revise points.</li>
                    <li>Custom synopsis and full project guidance from topic selection to final report.</li>
                    <li>Support for both distance and regular learning students across multiple programmes.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-40">
              <div className="col-lg-10">
                <div className="university-rich-copy">
                  <h3 className="mb-15">Why students trust us for {name}</h3>
                  <ul className="ua-list">
                    <li>Ready help for last-minute submissions and exams with WhatsApp-first support.</li>
                    <li>Content aligned to university pattern so you submit in the correct format.</li>
                    <li>Focus on clarity and scoring rather than complicated theory language.</li>
                    <li>Personalised guidance for synopsis and projects instead of one-size-fits-all files.</li>
                  </ul>
                  <p className="mt-20 mb-0">
                    Whenever you are stuck with {name} assignments, exams or projects, click below, share your course and semester,
                    and we&apos;ll guide you directly on WhatsApp.
                  </p>
                  <div className="mt-3 d-flex justify-content-center justify-content-md-start">
                    <a
                      href={`/university/query?university=${encodeURIComponent(name)}`}
                      className="theme-btn yellow-btn"
                    >
                      Get more detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterOne />
      </>
    </Wrapper>
  );
};

export default UniversityDetailPage;


