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

const amitySynopsisPrograms = ["MBA", "MCA", "PGDHHM", "PGDM"];

const UniversityDetailPage = ({ params }: { params: { slug: UniversitySlug } }) => {
  const name = prettyName(params.slug);
  const isAmity = params.slug === "amity";

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
                    {isAmity
                      ? "End-to-end solved assignment, exam notes, synopsis and project support for Amity distance and regular learning courses."
                      : `Solved assignments, exam notes, synopsis and project support tailored for ${name} distance and regular learning students.`}
                  </p>
                  <div className="mt-3 d-flex justify-content-center">
                    <a href="/pricing" className="theme-btn yellow-btn">
                      Get more detail
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="university-accordion">
                  {/* ASSIGNMENT */}
                  <details className="ua-panel" open>
                    <summary className="ua-header">
                      <span>ASSIGNMENT</span>
                      <i className="far fa-chevron-down ua-icon" />
                    </summary>
                    <div className="ua-body">
                      <p>
                        {isAmity
                          ? "We provide Amity solved assignments prepared by experienced Indian subject experts. Each solution follows university guidelines and focuses on clear, exam-oriented answers."
                          : `We provide solved assignments for key programmes of ${name}, prepared by experienced subject experts and aligned with university guidelines.`}
                      </p>
                      <p>
                        Students often struggle with time, formatting rules, and topic clarity. Our team simplifies complex topics,
                        structures answers, and delivers plagiarism-checked content so you can focus on learning and revision.
                      </p>
                    </div>
                  </details>

                  {/* EXAM NOTES */}
                  <details className="ua-panel">
                    <summary className="ua-header">
                      <span>EXAM NOTES</span>
                      <i className="far fa-chevron-down ua-icon" />
                    </summary>
                    <div className="ua-body">
                      <p>
                        Compact, exam-ready notes that summarise the full syllabus into easy-to-revise points. Ideal for last-minute
                        preparation and quick concept revision.
                      </p>
                      <ul className="ua-list">
                        <li>Unit-wise summaries and important questions</li>
                        <li>Definitions, diagrams and key formulas where required</li>
                        <li>Previous trend-based topics and probable questions</li>
                      </ul>
                    </div>
                  </details>

                  {/* SYNOPSIS AND PROJECT */}
                  <details className="ua-panel">
                    <summary className="ua-header">
                      <span>SYNOPSIS AND PROJECT</span>
                      <i className="far fa-chevron-down ua-icon" />
                    </summary>
                    <div className="ua-body">
                      {isAmity && (
                        <>
                          <h4 className="ua-subtitle mb-3">Programmes Covered</h4>
                          <ul className="ua-tag-list mb-4">
                            {amitySynopsisPrograms.map((p) => (
                              <li key={p}>{p}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      <p>
                        We guide you from topic selection to final report for synopsis and full project work. Our experts help you
                        shape clear objectives, strong literature review, research methodology and well‑structured analysis.
                      </p>
                      <p>
                        All work is customised as per university format, plagiarism-checked and delivered within timelines so you
                        can submit with confidence.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-40">
              <div className="col-lg-10">
                <div className="university-rich-copy">
                  <h2 className="mb-20">
                    {isAmity
                      ? "Best Assignment & Project Services for Amity Students"
                      : `Why Students Choose Us for ${name} Solved Assignments`}
                  </h2>
                  <p>
                    Guide Techs is a trusted name among university students for solved assignments, synopses, projects, and exam
                    support. Our in‑house experts bring 10+ years of experience across management, IT, engineering, commerce,
                    humanities and more.
                  </p>
                  {isAmity && (
                    <p>
                      For Amity learners, we understand the exact pattern of assignments, project guidelines, and evaluation style.
                      That is why students across India rely on us for Amity solved assignments and Amity solved project guidance.
                    </p>
                  )}

                  <h3 className="mt-30 mb-15">What You Get</h3>
                  <ul className="ua-list">
                    <li>Experienced assignment guides with full conceptual knowledge</li>
                    <li>Support across multiple streams and specialisations</li>
                    <li>On‑time delivery for every assignment and project</li>
                    <li>Turnitin‑checked, plagiarism‑free content</li>
                    <li>Affordable and student‑friendly pricing</li>
                  </ul>

                  <h3 className="mt-30 mb-15">Subjects & Areas We Cover</h3>
                  <p>
                    We help with homework and solved assignments in Accounts, Finance, Statistics, Computer Science, Mathematics,
                    Economics, Management, Law, Nursing, HR, Marketing, IT, Operations, Logistics, Hospital Administration and many
                    more domains.
                  </p>
                  <p>
                    From programming (C, C++, Java, Python, Data Structures, PHP, JavaScript) to business plans, case studies,
                    research papers, theses and dissertations – our team can support you end‑to‑end.
                  </p>

                  <h3 className="mt-30 mb-15">Why Guide Techs</h3>
                  <ul className="ua-list">
                    <li>Dedicated subject experts for every course and university</li>
                    <li>24/7 query handling over WhatsApp and email</li>
                    <li>Strict quality checks before delivery</li>
                    <li>Custom solutions prepared from scratch as per your guidelines</li>
                  </ul>

                  <p className="mt-25">
                    If you are searching for an expert who can help with solved assignments, synopsis or project work for {name},
                    you can share your requirements with Guide Techs and get personalised guidance for A+ performance.
                  </p>
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


