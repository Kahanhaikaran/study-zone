
import Link from 'next/link';
import React from 'react';

const FooterOne = ({style_2} : any) => {
  const footerYear = new Date().getFullYear();

  return (
    <>
       <footer className={`footer-section fix ${style_2 ? "" : "footer-bg"}`}>
            <div className="container">
                <div className={`footer-widget-wrapper ${style_2 ? "style-4" : ""}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link href="/">
                                        {style_2 ? <img src="/assets/img/logo/placeholder-logo.svg" alt="img" /> 
                                        :                                        
                                        <img src="/assets/img/logo/placeholder-logo.svg" alt="img" />
                                        }
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Is the burden of studies weighing you down? We craft assignments, projects, notes, and dissertations that let you focus on learning while we handle the paperwork.
                                    </p>
                                    <div className="social-icon">
                                        <a href="https://www.instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                        <a href="https://www.linkedin.com" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="https://wa.me/917303628683" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Key Services</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/services">Assignments & Case Studies</Link></li>
                                    <li><Link href="/services">Projects & Viva Decks</Link></li>
                                    <li><Link href="/services">Exam Notes & Handwriting</Link></li>
                                    <li><Link href="/services">Dissertations & Thesis Support</Link></li>
                                    <li><Link href="/services">Custom Academic Solutions</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/about">About StudyZone</Link></li>
                                    <li><Link href="/services">Our Services</Link></li>
                                    <li><Link href="/courses">Sample Work</Link></li>
                                    <li><Link href="/faq">FAQs</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Contact Us</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <li>
                                            Remote support across India – connect online or schedule an on-campus drop.
                                        </li>
                                        <li>
                                            <a href="mailto:hello@studyzone.in" className="link">hello@studyzone.in</a>
                                        </li>
                                        <li>
                                            <a href="tel:+917303628683">+91 73036 28683</a>
                                        </li>
                                        <li>
                                            <a href="https://wa.me/917303628683" target="_blank" rel="noopener noreferrer" className="link">Chat on WhatsApp</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`footer-bottom wow fadeInUp ${style_2 ? "style-4" : ""}`} data-wow-delay=".3s">
                    <p>Copyright © {footerYear} <Link href="/">Study Zone Services</Link> · All rights reserved.</p>
                </div>
            </div>
            <div className={`footer-name ${style_2 ? "style-2" : ""}`}>
                <h2>
                    Study smarter with us
                </h2>
            </div>
        </footer>
    </>
  );
};

export default FooterOne;