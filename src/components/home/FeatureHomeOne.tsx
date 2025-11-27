
import React from 'react';

const coreServices = [
  {
    icon: "fas fa-file-alt",
    accent: "#FFD25D",
    title: "Assignments for All Subjects",
    description: "Research-backed answers and plagiarism-free submissions aligned to your syllabus and format.",
  },
  {
    icon: "fas fa-project-diagram",
    accent: "#12D1C0",
    title: "Project & Dissertation Help",
    description: "From topic approval to final report, get original content plus end-to-end mentor guidance.",
  },
  {
    icon: "fas fa-book-open",
    accent: "#FFC857",
    title: "Exam Notes & PPTs",
    description: "Score-ready notes, sleek slides, and summaries that make revision effortless.",
  },
  {
    icon: "fas fa-chalkboard-teacher",
    accent: "#8BC6FF",
    title: "Online / Offline Exam Support",
    description: "Mock drills, last-minute doubt clearing, and live guidance for any exam pattern.",
  },
  {
    icon: "fas fa-shield-alt",
    accent: "#FF9EC2",
    title: "Confidential Academic Partner",
    description: "Private handling, secure delivery, and real-time updates so you stay in control.",
  },
];

const FeatureHomeOne = () => {
  return (
    <>
      <section className="feature-section section-padding">
        <div className="container">
          <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xxl-5">
            {coreServices.map((service, index) => (
              <div
                className="col wow fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
                key={service.title}
              >
                <div className="feature-box-items hero-tint">
                  <div
                    className="icon"
                    style={{
                      color: service.accent,
                      backgroundColor: `${service.accent}1f`,
                      boxShadow: `0 10px 25px ${service.accent}33`,
                    }}
                  >
                    <i className={service.icon} aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureHomeOne;