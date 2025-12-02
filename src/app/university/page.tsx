import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Universities - Shiksha Sagar",
  description: "Explore the list of universities we support at Shiksha Sagar.",
};

const universities = [
  { id: "amity", name: "AMITY" },
  { id: "imt", name: "IMT" },
  { id: "lpu", name: "LPU" },
  { id: "symbiosis", name: "SYMBIOSIS" },
  { id: "annamalai", name: "ANNAMALAI" },
  { id: "ip-university", name: "IP University" },
  { id: "nios", name: "NIOS" },
  { id: "upes", name: "UPES" },
  { id: "bvdu", name: "BVDU" },
  { id: "isbm", name: "ISBM" },
  { id: "nmims", name: "NMIMS" },
  { id: "vmou", name: "VMOU" },
  { id: "ignou", name: "IGNOU" },
  { id: "jnu-jaipur", name: "JNU JAIPUR" },
  { id: "smu", name: "SMU" },
];

const UniversityPage = () => {
  return (
    <Wrapper>
      <>
        <HeaderOne />
        <BreadcrumbEvent title="Universities" subtitle="Universities" />

        <section className="university-page section-padding">
          <div className="container">
          {/* Top heading + grid of university cards (like Services list) */}
          <div className="row justify-content-center mb-30">
            <div className="col-lg-10 text-center">
              <h1 className="mb-15">Universities</h1>
              <p className="subtitle mb-20">
                Select your university to view solved assignments, exam notes, synopsis and project guidance on a dedicated page.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {universities.map((u) => (
              <div key={u.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="service-card-lite courses-card-items h-100">
                  <div className="service-card-head d-flex align-items-center justify-content-between">
                    <div className="head-text text-start">
                      <h4 className="mb-1">{u.name}</h4>
                      <p className="mb-0 small text-muted">
                        Solved assignments, exam notes, synopsis &amp; project support.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 d-flex flex-column gap-2">
                    <span className="badge bg-light text-dark align-self-start">Distance &amp; Regular</span>
                    <span className="badge bg-light text-dark align-self-start">Pan‑India support</span>
                  </div>
                  <Link href={`/university/${u.id}`} className="theme-btn yellow-btn mt-3">
                    View {u.name} Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>

        <FooterOne />
      </>
    </Wrapper>
  );
};

export default UniversityPage;

