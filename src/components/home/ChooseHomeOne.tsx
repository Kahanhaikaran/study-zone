

import Count from '@/common/Count';
import React from 'react';

const ChooseHomeOne = () => {
  return (
    <>
      <section className="choose-us-section fix section-padding">
            <div className="container">
                <div className="main-choose-us-wrapper">
                    <div className="line-shape">
                        <img src="/assets/img/line-shape.png" alt="" />
                    </div>
                    <div className="choose-us-top">
                        <div className="section-title mb-0">
                            <h6 className="wow fadeInUp">
                                Why Choose Us
                            </h6>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Reliable, confidential academic
                                help tailored to every student
                            </h2>
                        </div>
                        <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                            <div className="icon">
                                <i className="flaticon-satisfaction"></i>
                            </div>
                            <div className="content">
                               <h2><span className="odometer" data-count="100"> <Count number={100} text='%' /> </span></h2>
                               <p>
                                    100% plagiarism-free deliverables verified before hand-off.
                               </p>
                            </div>
                        </div>
                    </div>
                    <div className="choose-us-bottom">
                        <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                            <div className="icon">
                                <i className="flaticon-graduation"></i>
                            </div>
                            <div className="content">
                                <p>On-Time Delivery</p>
                                <h2><span className="odometer" data-count="24"><Count number={24} text='/7' /></span></h2>
                                <p>
                                    24/7 availability for urgent requests, revisions, and exam support.
                                </p>
                            </div>
                        </div>
                        <div className="icon-items style-2 wow fadeInUp" data-wow-delay=".5s">
                            <div className="icon">
                                <i className="flaticon-instructor"></i>
                            </div>
                            <div className="content">
                                <p>Students Assisted</p>
                                <h2><span className="odometer" data-count="500"><Count number={500} text='+' /></span></h2>
                                <p>
                                    Personalized guidance from experienced mentors across subjects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ChooseHomeOne;