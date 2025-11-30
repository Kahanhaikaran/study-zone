"use client";

import React, { useState } from 'react';
import { services } from '@/data/services';

const PricingArea = () => {
  const [formData, setFormData] = useState({
    service: '',
    university: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const selectedService = services.find(s => s.slug === formData.service);
    const serviceName = selectedService ? selectedService.title : formData.service;
    
    const message = `Hello! I'm interested in getting pricing information.

Service: ${serviceName}
University: ${formData.university}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number (from ContactArea.tsx)
    const whatsappNumber = '917303628683';
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <section className="pricing-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-5">
                <h6>Price List</h6>
                <h2>Get Pricing Information</h2>
                <p className="mt-3">
                  Fill out the form below and we'll send you pricing details via WhatsApp
                </p>
              </div>
              
              <div className="pricing-form-wrapper">
                <form id="pricing-form" onSubmit={handleSubmit} className="pricing-form">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="service">Service</label>
                        <select
                          name="service"
                          id="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="form-control"
                        >
                          <option value="">Select Service</option>
                          {services.map((service) => (
                            <option key={service.slug} value={service.slug}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="university">University</label>
                        <input
                          type="text"
                          name="university"
                          id="university"
                          placeholder="Enter your university name"
                          value={formData.university}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <div className="form-submit">
                        <button type="submit" className="theme-btn yellow-btn">
                          Get Price
                          <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingArea;