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
  if (['dissertation-writing-service-2025', 'phd-thesis-writing-service', 'synopsis-service', 'research-proposal'].includes(slug)) {
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

// Get service image with a special cover for Research Proposal (image 10)
const getServiceImage = (service: Service, index: number): string => {
  if (service.slug === 'research-proposal') {
    return '/assets/img/services/10.png';
  }

  const images = [
    '/assets/img/services/1.png',
    '/assets/img/services/2.png',
    '/assets/img/services/3.png',
    '/assets/img/services/4.png',
    '/assets/img/services/5.png',
    '/assets/img/services/6.png',
    '/assets/img/services/7.png',
    '/assets/img/services/8.png',
    '/assets/img/services/9.png',
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
              <h6 className="wow fadeInUp heading-label">
                Our Services
              </h6>
              <h2 className="wow fadeInUp services-title" data-wow-delay=".2s">
                Stress-free academic support for every milestone
              </h2>
              <p className="wow fadeInUp services-subtitle" data-wow-delay=".3s">
                Assignments, research, exams, and presentations handled by domain experts with full confidentiality.
              </p>
            </div>
            <ul className="nav" role="tablist">
              {Object.entries(serviceCategories).map(([key, label], index) => {
                const isActive = key === 'All';
                return (
                  // Keep tabs snappy but add a subtle fade-in
                  <li key={key} className="nav-item wow fadeInUp" data-wow-delay=".05s" role="presentation">
                    <a 
                      href={`#${key}`} 
                      data-bs-toggle="tab" 
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      role="tab"
                      tabIndex={isActive ? 0 : -1}
                      aria-selected={isActive ? "true" : "false"}
                      aria-controls={key}
                      id={`${key}-tab`}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
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
                  role="tabpanel"
                  aria-labelledby={`${category}-tab`}
                  aria-hidden={category !== 'All' ? "true" : "false"}
                >
                  <div className="row">
                    {categoryServices.map((service, index) => (
                      <div 
                        key={service.slug} 
                      // Uniform, minimal animation on cards
                      className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".05s"
                      >
                        <div className="courses-card-main-items">
                          <div className="courses-card-items">
                            <div className="courses-image">
                              <img src={getServiceImage(service, index)} alt={service.title} />
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
                              <ul className="list-unstyled mb-3" style={{ fontSize: '13px' }}>
                                {service.highlights.slice(0, 2).map((highlight, idx) => (
                                  <li key={idx} className="mb-1">
                                    <i className="far fa-check-circle text-success me-2"></i>
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                              <Link href={`/services/${service.slug}`} className="theme-btn hover-white hero-btn mt-1">
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

