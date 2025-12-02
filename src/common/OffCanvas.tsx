
import MobileMenu from '@/layouts/headers/MobileMenu';
import Link from 'next/link';
import React from 'react';

const OffCanvas = ({setOpenCanvas, openCanvas} : any) => {
  return (
    <>
      <div className="fix-area">
            <div className={`offcanvas__info ${openCanvas ? "info-open" : ""}`}>
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-3 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo">
                                <Link href="/">
                                    <img src="/assets/img/logo/logo.png" alt="MyShikshaSagar logo" />
                                </Link>
                            </div>
                            <div className="offcanvas__close" onClick={() => setOpenCanvas(false)}>
                                <button>
                                <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <h3 className="offcanvas-title">Need academic support?</h3>
                        <p>We respond daily between <strong>10 AM – 11 PM IST</strong>. Choose a channel below and get a plan within minutes.</p>
                        <div className="social-icon d-flex align-items-center">
                            <a href="https://www.facebook.com/profile.php?id=61580290574882" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/acade_mixpro?igsh=MWY3a3VyNzk1bTE4dg==" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://wa.me/917303628683" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                        </div>
                        <div className="mobile-menu fix mb-3 mean-container">
                          <MobileMenu />
                        </div>
                        <div className="offcanvas__contact">
                            <h3>Information</h3>
                            <ul className="contact-list">
                                <li>
                                    <span>
                                        Address: {" "}
                                    </span>
                                    India · Remote support, global delivery
                                </li>
                                <li>
                                    <span>
                                        Call Us: {" "}
                                    </span>
                                    <a href="tel:+917303628683">+91 73036 28683</a>
                                </li>
                                <li>
                                    <span>
                                        WhatsApp: {" "}
                                    </span>
                                    <a href="https://wa.me/917303628683" target="_blank" rel="noopener noreferrer">Chat instantly</a>
                                </li>
                                <li>
                                    <span>
                                        Email: {" "}
                                    </span>
                                    <a href="mailto:myShikshaSagar@gmail.com">myShikshaSagar@gmail.com</a>
                                </li>
                                <li>
                                    <span>
                                        Hours: {" "}
                                    </span>
                                    10 AM – 11 PM IST (7 days)
                                </li>
                            </ul>
                            <div className="offcanvas-button">
                                <a href="tel:+917303628683" className="theme-btn yellow-btn"><i className="far fa-phone"></i> Call Now</a>
                                <a href="https://wa.me/917303628683" className="theme-btn yellow-btn" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`offcanvas__overlay ${openCanvas? "overlay-open" : ""}`} onClick={() => setOpenCanvas(false)}></div>
    </>
  );
};

export default OffCanvas;