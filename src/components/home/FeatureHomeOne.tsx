
import React from 'react';

const coreServices = [
  {
    icon: "fas fa-file-alt",
    accent: "#4c7df3",
    title: "Assignments for All Subjects",
    description: "Get researched, plagiarism-free submissions tailored to your syllabus and university format.",
  },
  {
    icon: "fas fa-project-diagram",
    accent: "#ec4899",
    title: "Project & Dissertation Help",
    description: "From topic selection to final report, receive original content and expert guidance.",
  },
  {
    icon: "fas fa-book-open",
    accent: "#22c55e",
    title: "Exam Notes & PPTs",
    description: "Score-ready notes, presentations, and summaries that make revision effortless.",
  },
  {
    icon: "fas fa-chalkboard-teacher",
    accent: "#f97316",
    title: "Online / Offline Exam Support",
    description: "Confidently prepare with live guidance, mock questions, and last-minute doubt clearing.",
  },
  {
    icon: "fas fa-shield-alt",
    accent: "#a855f7",
    title: "Confidential Academic Partner",
    description: "Strict privacy, secure delivery, and on-time updates keep you in control of every milestone.",
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
                <div className="feature-box-items">
                  <div
                    className="icon"
                    style={{
                      color: service.accent,
                      backgroundColor: `${service.accent}1f`,
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