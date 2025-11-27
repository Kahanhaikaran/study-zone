"use client";
import React from 'react';

const NewsletterHomeOne = () => {
  return (
    <>
      <section className="cta-newsletter-section fix">
        <div className="container">
          <div className="cta-newsletter-wrapper hero-contact">
            <span className="floating-dot dot-a" />
            <span className="floating-dot dot-b" />
            <span className="floating-line line-a" />
            <div className="row g-4 align-items-center cta-newsletter-grid">
              <div className="col-lg-5">
                <div
                  className="cta-visual animation__arryLeftRight wow img-custom-anim-left text-center"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <img src="/assets/img/cta/girl-img.jpg" alt="StudyZone support specialist" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="section-title text-center text-lg-start hero-copy">
                  <h6 className="wow fadeInUp">Ready to get help?</h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Contact us for assignments, projects,
                    notes, or exam guidance today.
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Accurate, confidential, and affordable academic support for school and college students.
                  </p>
                </div>
                <div
                  className="newsletter-input-items mt-4 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <a href="tel:+9108882309876" className="theme-btn yellow-btn text-center">
                    Call +91-08882309876
                  </a>
                  <a
                    href="https://wa.me/917303628683"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn hover-white text-center"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                <ul className="list-items wow fadeInUp text-center text-lg-start hero-list" data-wow-delay=".7s">
                  <li>
                    <i className="far fa-check-circle"></i>
                    Customized writing & project solutions
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>
                    Exam preparation, notes & PPT support
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>
                    Confidential, on-time delivery every time
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewsletterHomeOne;
