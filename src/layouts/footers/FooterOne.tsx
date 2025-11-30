
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
                                    <div className="footer-brand">
                                        <Link href="/" className="footer-logo">
                                            {style_2 ? <img src="/assets/img/logo/logo-sz.svg" alt="MyShikshaSagar logo" /> 
                                            :                                        
                                            <img src="/assets/img/logo/logo-sz.svg" alt="MyShikshaSagar logo" />
                                            }
                                        </Link>
                                        <p className="footer-brand-text">
                                            Your on-demand academic studio for assignments, research, and exam prep.
                                        </p>
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Is the burden of studies weighing you down? We craft assignments, projects, notes, and dissertations that let you focus on learning while we handle the paperwork.
                                    </p>
                                    <div className="social-icon">
                                        <a href="https://www.facebook.com/profile.php?id=61580290574882" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                                        <a href="https://www.instagram.com/acade_mixpro?igsh=MWY3a3VyNzk1bTE4dg==" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                        <a href="https://wa.me/917303628683" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
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
                                    <li><Link href="/services/assignment-writing">Assignments & Case Studies</Link></li>
                                    <li><Link href="/services/dissertation-writing-service-2025">Projects & Viva Decks</Link></li>
                                    <li><Link href="/services/study-materials">Exam Notes & Handwriting</Link></li>
                                    <li><Link href="/services/dissertation-writing-service-2025">Dissertations & Thesis Support</Link></li>
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
                                    <li><Link href="/about">About Shiksha Sagar</Link></li>
                                    <li><Link href="/services">Our Services</Link></li>
                                    <li>
                                        <a
                                            href="https://wa.me/917303628683?text=provide%20me%20sample%20work"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Sample Work
                                        </a>
                                    </li>
                                    <li><Link href="/#faq">FAQs</Link></li>
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
                                            <span className="label">Remote support</span>
                                            <p>Connect online across India or request safe on-campus drop-offs.</p>
                                        </li>
                                        <li>
                                            <span className="label">Email</span>
                                            <a href="mailto:myShikshaSagar@gmail.com" className="link">myShikshaSagar@gmail.com</a>
                                        </li>
                                        <li>
                                            <span className="label">Call</span>
                                            <a href="tel:+918882309876">+91-8882309876</a>
                                        </li>
                                        <li>
                                            <span className="label">WhatsApp</span>
                                            <a href="https://wa.me/917303628683" target="_blank" rel="noopener noreferrer" className="link">
                                                Chat instantly <i className="fab fa-whatsapp" style={{ marginLeft: '6px' }}></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`footer-bottom wow fadeInUp ${style_2 ? "style-4" : ""}`} data-wow-delay=".3s">
                    <p>Copyright © {footerYear} <Link href="/">Shiksha Sagar Services</Link> · All rights reserved.</p>
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