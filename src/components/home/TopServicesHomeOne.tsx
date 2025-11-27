"use client";
import Link from 'next/link';
import React from 'react';
import { services, Service } from '@/data/services';

// Define service categories
const serviceCategories = {
  'All': 'All Services',
  'Writing': 'Writing Services',
  'Research': 'Research Services',
  'Study': 'Study Support',
  'Digital': 'Digital Services',
};

// Map services to categories
const getServiceCategory = (service: Service): string => {
  const slug = service.slug.toLowerCase();
  if (['assignment-writing', 'essay-writing', 'web-content-writing'].includes(slug)) {
    return 'Writing';
  }
  if (['dissertation-writing-service-2025', 'phd-thesis-writing-service', 'synopsis-service'].includes(slug)) {
    return 'Research';
  }
  if (['study-materials', 'hand-writing'].includes(slug)) {
    return 'Study';
  }
  if (['search-engine-optimization'].includes(slug)) {
    return 'Digital';
  }
  return 'All';
};

// Get services by category
const getServicesByCategory = (category: string): Service[] => {
  if (category === 'All') {
    return services;
  }
  return services.filter(service => getServiceCategory(service) === category);
};

// Get service image (using PNG images 1-8)
const getServiceImage = (index: number): string => {
  const images = [
    '/assets/img/courses/1.png',
    '/assets/img/courses/2.png',
    '/assets/img/courses/3.png',
    '/assets/img/courses/4.png',
    '/assets/img/courses/5.png',
    '/assets/img/courses/6.png',
    '/assets/img/courses/7.png',
    '/assets/img/courses/8.png',
    '/assets/img/courses/9.png',
  ];
  return images[index % images.length];
};

const TopServicesHomeOne = () => {
  return (
    <>
      <section className="popular-courses-section fix section-padding section-bg top-services">
        <div className="container">
          <div className="section-title-area align-items-end">
            <div className="section-title">
              <h6 className="wow fadeInUp">
                Our Services
              </h6>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">Explore Top Services</h2>
            </div>
            <ul className="nav">
              {Object.entries(serviceCategories).map(([key, label], index) => (
                <li key={key} className="nav-item wow fadeInUp" data-wow-delay={`${(index + 1) * 0.2}s`}>
                  <a 
                    href={`#${key}`} 
                    data-bs-toggle="tab" 
                    className={`nav-link ${key === 'All' ? 'active' : ''}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-content">
            {Object.keys(serviceCategories).map((category) => {
              const categoryServices = getServicesByCategory(category);
              return (
                <div 
                  key={category} 
                  id={category} 
                  className={`tab-pane fade ${category === 'All' ? 'show active' : ''}`}
                >
                  <div className="row">
                    {categoryServices.map((service, index) => (
                      <div 
                        key={service.slug} 
                        className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow fadeInUp" 
                        data-wow-delay={`${(index + 1) * 0.2}s`}
                      >
                        <div className="courses-card-main-items">
                          <div className="courses-card-items">
                            <div className="courses-image">
                              <img src={getServiceImage(index)} alt={service.title} />
                            </div>
                            <div className="courses-content">
                              <ul className="post-cat">
                                <li>
                                  <Link href="/services">{serviceCategories[getServiceCategory(service) as keyof typeof serviceCategories]}</Link>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <h5>
                                <Link href={`/services/${service.slug}`}>
                                  {service.title}
                                </Link>
                              </h5>
                              <p className="text-muted mb-2" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                                {service.tagline}
                              </p>
                              <ul className="list-unstyled mb-0" style={{ fontSize: '13px' }}>
                                {service.highlights.slice(0, 2).map((highlight, idx) => (
                                  <li key={idx} className="mb-1">
                                    <i className="far fa-check-circle text-success me-2"></i>
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="courses-card-items-hover">
                            <div className="courses-content">
                              <ul className="post-cat">
                                <li>
                                  <Link href="/services">{serviceCategories[getServiceCategory(service) as keyof typeof serviceCategories]}</Link>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <h5>
                                <Link href={`/services/${service.slug}`}>
                                  {service.title}
                                </Link>
                              </h5>
                              <p className="mb-3" style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.95)' }}>
                                {service.description}
                              </p>
                              <ul className="list-unstyled mb-3" style={{ fontSize: '13px' }}>
                                {service.highlights.slice(0, 2).map((highlight, idx) => (
                                  <li key={idx} className="mb-2" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                                    <i className="far fa-check-circle me-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}></i>
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                              <Link href={`/services/${service.slug}`} className="theme-btn yellow-btn">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopServicesHomeOne;

