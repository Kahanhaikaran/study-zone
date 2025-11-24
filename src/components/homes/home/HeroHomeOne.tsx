
'use client';

import Count from '@/common/Count';
import Link from 'next/link';
import React from 'react';

const HeroHomeOne = () => {
  return (
    <>
        <section className="hero-section hero-1 fix">
            <div className="shape-left">
                <img src="assets/img/hero/shape-left.png" alt="img" />
            </div>
            <div className="shape-right">
                <img src="assets/img/hero/shape-right.png" alt="img" />
            </div>
            <div className="dot-shape float-bob-x">
                <img src="assets/img/hero/dot.png" alt="img" />
            </div>
            <div className="vector-shape float-bob-y">
                <img src="assets/img/hero/vectoe.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <span className="wow fadeInUp">Study support that adapts to you</span>
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                Is the burden of studies
                                weighing you down?
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                                We are the solution to every academic roadblock—assignments, dissertations, projects,
                                notes, or exam guidance. Partner with our expert freelance team and achieve your goals
                                with confidence, clarity, and zero stress.
                            </p>
                            <div className="hero-button wow fadeInUp d-flex gap-3 flex-wrap justify-content-center" data-wow-delay=".7s">
                                <Link href="/about" className="theme-btn hover-white">Explore Services</Link>
                                <Link href="tel:+917303628683" className="theme-btn style-2">Call +91 73036 28683</Link>
                            </div>
                            <form
                              className="hero-search wow fadeInUp"
                              data-wow-delay=".8s"
                              onSubmit={(e) => e.preventDefault()}
                            >
                                <input type="text" placeholder="Search services, notes, exams..." />
                                <button type="submit" className="theme-btn yellow-btn">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="assets/img/hero/hero-1.jpg" alt="img" className="img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                        <div className="counter-box float-bob-x">
                            <p>More then</p>
                            <h2><span className="odometer" data-count="2800">
                              <Count number={2800} text='+' />
                              </span></h2>
                            <p>Quality Courses</p>
                        </div>
                        <div className="rating-box float-bob-y">
                            <div className="content">
                                <h2><span className="odometer" data-count="4.8">
                                  <Count number={4} text=".8k" />
                                  </span></h2>
                                <p>5820+ Reviews</p>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <img src="assets/img/hero/trustpilot-logopng.png" alt="img" />
                        </div>
                        <div className="circle-img float-bob-y"> 
                            <img src="assets/img/hero/circle.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default HeroHomeOne;