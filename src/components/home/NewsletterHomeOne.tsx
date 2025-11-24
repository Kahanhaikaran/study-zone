"use client";
import React from 'react';

const NewsletterHomeOne = () => {
  return (
    <>
      <section className="cta-newsletter-section fix blue-bg">
        <div
          className="girl-shape animation__arryLeftRight wow img-custom-anim-left"
          data-wow-duration="1.5s"
          data-wow-delay="0.3s"
        >
          <img src="assets/img/cta/girl-img.png" alt="img" />
        </div>
        <div className="shape-1">
          <img src="assets/img/cta/shape-1.png" alt="img" />
        </div>
        <div className="shape-2">
          <img src="assets/img/cta/shape-2.png" alt="img" />
        </div>
        <div className="container">
          <div className="cta-newsletter-wrapper">
            <div className="section-title text-center">
              <h6 className="text-white wow fadeInUp">Ready to get help?</h6>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Contact us for assignments, projects,
                notes, or exam guidance today.
              </h2>
              <p className="text-white-50 wow fadeInUp" data-wow-delay=".4s">
                Accurate, confidential, and affordable academic support for school and college students.
              </p>
            </div>
            <div
              className="newsletter-input-items mt-4 mt-md-0 wow fadeInUp flex-column flex-md-row gap-3"
              data-wow-delay=".5s"
            >
              <a href="tel:+917303628683" className="theme-btn yellow-btn w-100 text-center">
                Call +91 73036 28683
              </a>
              <a
                href="https://wa.me/917303628683"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn hover-white w-100 text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
            <ul className="list-items wow fadeInUp" data-wow-delay=".7s">
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
      </section>
    </>
  );
};

export default NewsletterHomeOne;