
import Count from '@/common/Count';
import Link from 'next/link';
import React from 'react';

const HeroHomeOne = () => {
  return (
    <>
        <section className="hero-section hero-1 fix">
            <div className="shape-left">
                <img src="/assets/img/hero/shape-left.png" alt="img" />
            </div>
            <div className="shape-right">
                <img src="/assets/img/hero/shape-right.png" alt="img" />
            </div>
            <div className="dot-shape float-bob-x">
                <img src="/assets/img/hero/dot.png" alt="img" />
            </div>
            <div className="vector-shape float-bob-y">
                <img src="/assets/img/hero/vectoe.png" alt="img" />
            </div>
            <div className="container">
                <div className="row align-items-center g-5 hero-grid">
                    <div className="col-xl-5 col-lg-6">
                        <div className="hero-content text-center text-lg-start">
                            <span className="hero-subtitle wow fadeInUp">Study support that adapts to you</span>
                            <h1 className="hero-title wow fadeInUp" data-wow-delay=".3s">
                                Is the burden of studies weighing you down?
                            </h1>
                            <p className="hero-description wow fadeInUp" data-wow-delay=".5s">
                                We are the solution to every academic roadblock—assignments, dissertations, projects,
                                notes, or exam guidance. Partner with our expert freelance team and achieve your goals
                                with confidence, clarity, and zero stress.
                            </p>
                            <div className="hero-button wow fadeInUp" data-wow-delay=".7s">
                                <Link href="/services" className="theme-btn yellow-btn">Explore Services</Link>
                                <a href="tel:+918882309876" className="theme-btn yellow-btn">Call +91-8882309876</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="hero-visual">
                            <div className="hero-visual-frame">
                                <img
                                    src="/assets/img/hero/hero-1.jpg"
                                    alt="Shiksha Sagar hero"
                                    className="img-custom-anim-left"
                                    data-wow-duration="1.5s"
                                    data-wow-delay="0.3s"
                                />
                            </div>
                            <div className="stat-card floating fact">
                                <p className="label">Fact &amp; Figures</p>
                                <h3>
                                    <span className="odometer" data-count="5780">
                                        <Count number={5780} text="+" />
                                    </span>
                                </h3>
                                <p className="muted">Assignments Completed</p>
                            </div>
                            <div className="stat-card floating rating">
                                <div>
                                    <h3>4.8/5</h3>
                                    <p className="muted">Average rating</p>
                                </div>
                                <p className="muted mb-0">Based on 5,820+ student reviews</p>
                            </div>
                            <div className="circle-img float-bob-y">
                                <img src="/assets/img/hero/circle.png" alt="Graphic accent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default HeroHomeOne;