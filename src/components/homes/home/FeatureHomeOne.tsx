
import React from 'react';

const coreServices = [
  {
    icon: "flaticon-teacher",
    title: "Assignments for All Subjects",
    description: "Get researched, plagiarism-free submissions tailored to your syllabus and university format.",
  },
  {
    icon: "flaticon-online-education",
    title: "Project & Dissertation Help",
    description: "From topic selection to final report, receive original content and expert guidance end-to-end.",
  },
  {
    icon: "flaticon-community",
    title: "Exam Notes & PPTs",
    description: "Score-ready notes, presentations, and summaries that make revision effortless.",
  },
  {
    icon: "flaticon-membership",
    title: "Online / Offline Exam Support",
    description: "Confidently prepare with live guidance, mock questions, and last-minute doubt clearing.",
  },
  {
    icon: "flaticon-group",
    title: "Confidential Academic Partner",
    description: "Strict privacy, secure delivery, and on-time updates keep you in control of every milestone.",
  },
];

const FeatureHomeOne = () => {
  return (
    <>
      <section className="feature-section">
        <div className="row gx-0 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5">
          {coreServices.map((service, index) => (
            <div
              className="col wow fadeInUp"
              data-wow-delay={`${index * 0.2}s`}
              key={service.title}
            >
              <div className="feature-box-items">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <div className="content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeatureHomeOne;