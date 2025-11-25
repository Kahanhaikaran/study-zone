
import Link from 'next/link';
import React from 'react';

const FooterOne = ({style_2} : any) => {
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
                                        Education the foundation personal and societal growth, empowering individuals with knowledge.
                                    </p>
                                    <div className="social-icon">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Online Platform</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/courses">Coursera</Link></li>
                                    <li><Link href="/courses">MasterClass</Link></li>
                                    <li><Link href="/courses">Skillshare</Link></li>
                                    <li><Link href="/courses">LinkedIn Learning</Link></li>
                                    <li><Link href="/courses">FutureLearn</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Quick Link</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/about">About StudyZone</Link></li>
                                    <li><Link href="/instructor">Instructors</Link></li>
                                    <li><Link href="/courses">Best Courses</Link></li>
                                    <li><Link href="/contact">Student Reviews</Link></li>
                                    <li><Link href="/faq">FAQs</Link></li>
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
                                            55 Main Street, 2nd block
                                            Malborne, Australia
                                        </li>
                                        <li>
                                            55 Main Street, 2nd block
                                            Malborne, Australia
                                        </li>
                                        <li>
                                            <a href="mailto:info@example.com" className="link">info@example.com</a>
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
                    <p>Copyright © <Link href="/">....</Link>, all rights reserved.</p>
                </div>
            </div>
            <div className={`footer-name ${style_2 ? "style-2" : ""}`}>
                <h2>
                    nameHere
                </h2>
            </div>
        </footer>
    </>
  );
};

export default FooterOne;