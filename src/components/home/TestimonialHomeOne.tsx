"use client";
import React, { useRef } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const TestimonialHomeOne = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const swiperInstanceRef = useRef<any | null>(null);

  return (
    <>
      <section id="testimonials" className="testimonial-section fix section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">
                        Students Reviews
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        2500+ Students Say About Our <br /> Academic Support
                    </h2>
                </div>
                <Swiper 
                spaceBetween={30}
                speed={2000}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                onSwiper={(swiper) => {
                  swiperInstanceRef.current = swiper;

                  if (paginationRef.current) {
                    // @ts-expect-error Swiper typing
                    swiper.params.pagination.el = paginationRef.current;

                    const { pagination } = swiper;

                    if (pagination) {
                      if (pagination.destroy) {
                        pagination.destroy();
                      }

                      pagination.init();
                      pagination.render();
                      pagination.update();

                      swiper.el.querySelectorAll('.swiper-pagination').forEach((node) => {
                        if (node !== paginationRef.current) {
                          node.remove();
                        }
                      });
                    }
                  }
                }}
                breakpoints={{
                  1199: {
                      slidesPerView: 2,
                  },
                  991: {
                      slidesPerView: 1,
                  },
                  767: {
                      slidesPerView: 1,
                  },
                  575: {
                      slidesPerView: 1,
                  },
                  0: {
                      slidesPerView: 1,
                  },
              }}
                className="swiper testimonial-slider"> 
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items">
                            <div className="testimonial-image">
                                <img src="/assets/img/testimonial/01.png" alt="img" />
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p>
                                    "My dissertation timeline was impossible until their team broke
                                    it into milestones. I submitted early and finally slept."
                                </p>
                                <div className="client-info">
                                    <h4>Neha Kapoor</h4>
                                    <span>Masters Student</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items bg-2">
                            <div className="testimonial-image">
                                <img src="/assets/img/testimonial/02.png" alt="img" />
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p>
                                    "They rewrote my entire project deck overnight with zero
                                    plagiarism. The professor called it the model submission."
                                </p>
                                <div className="client-info">
                                    <h4>Rahul Deshmukh</h4>
                                    <span>BBA Final Year</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items">
                            <div className="testimonial-image">
                                <img src="/assets/img/testimonial/01.png" alt="img" />
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p>
                                    "Exam week used to wreck me. Their concise notes and mock
                                    tests helped me jump two grade bands in one semester."
                                </p>
                                <div className="client-info">
                                    <h4>Saanvi Mehta</h4>
                                    <span>BSc Computer Science</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items bg-2">
                            <div className="testimonial-image">
                                <img src="/assets/img/testimonial/02.png" alt="img" />
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p>
                                    "From topic selection to final viva prep, they guided me like a
                                    mentor. I cleared my thesis defense with full confidence."
                                </p>
                                <div className="client-info">
                                    <h4>Aditya Rao</h4>
                                    <span>MBA Candidate</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                     
                    
                </Swiper>
                <div className="testimonial-controls">
                  <button
                    ref={prevRef}
                    className="testimonial-nav testimonial-prev"
                    aria-label="Previous testimonial"
                    onClick={() => swiperInstanceRef.current?.slidePrev()}
                  >
                    <i className="far fa-arrow-left"></i>
                  </button>
                  <div className="swiper-dot">
                    <div ref={paginationRef} className="dot"></div>
                  </div>
                  <button
                    ref={nextRef}
                    className="testimonial-nav testimonial-next"
                    aria-label="Next testimonial"
                    onClick={() => swiperInstanceRef.current?.slideNext()}
                  >
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
            </div>
        </section>
    </>
  );
};

export default TestimonialHomeOne;