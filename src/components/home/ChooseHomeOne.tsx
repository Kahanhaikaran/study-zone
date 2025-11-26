

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
                               <h2><span className="odometer" data-count="99.07"> <Count number={99.07} text='%' /> </span></h2>
                               <p>
                                    Customer satisfaction across assignments, projects, and exams.
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
                                <p>Assignment Specialists</p>
                                <h2><span className="odometer" data-count="275"><Count number={275} text='+' /></span></h2>
                                <p>
                                    Subject experts, research writers, and project mentors working behind every delivery.
                                </p>
                            </div>
                        </div>
                        <div className="icon-items style-2 wow fadeInUp" data-wow-delay=".5s">
                            <div className="icon">
                                <i className="flaticon-instructor"></i>
                            </div>
                            <div className="content">
                                <p>Students Satisfied</p>
                                <h2><span className="odometer" data-count="1400"><Count number={1400} text='+' /></span></h2>
                                <p>
                                    Learners from universities across India trusting us for repeat semesters.
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