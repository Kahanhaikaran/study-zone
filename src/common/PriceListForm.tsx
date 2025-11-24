"use client";

import { services } from "@/data/services";
import React from "react";

interface PriceListFormProps {
	open: boolean;
	onClose: () => void;
}

const PriceListForm = ({ open, onClose }: PriceListFormProps) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div className={`price-list-overlay ${open ? "open" : ""}`}>
			<div className="price-list-backdrop" onClick={onClose}></div>
			<div className="price-list-panel">
				<button type="button" className="price-list-close" onClick={onClose} aria-label="Close price list form">
					×
				</button>
				<div className="price-list-header">
					<h3>Fill the form to Get the Pricelist</h3>
					<p>Share a few details and we&apos;ll email you the complete service-wise pricing sheet.</p>
				</div>
				<form className="price-list-form" onSubmit={handleSubmit}>
					<div className="row g-4">
						<div className="col-lg-6">
							<div className="form-clt">
								<label htmlFor="service" className="form-label">
									Select -:
								</label>
								<select id="service" className="form-select" defaultValue="">
									<option value="" disabled>
										Choose a service
									</option>
									{services.map((service) => (
										<option key={service.slug} value={service.slug}>
											{service.title}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="form-clt">
								<label htmlFor="university" className="form-label">
									University
								</label>
								<input type="text" id="university" placeholder="University / Board" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="form-clt">
								<label htmlFor="name" className="form-label">
									Name
								</label>
								<input type="text" id="name" placeholder="Full name" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="form-clt">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input type="email" id="email" placeholder="name@email.com" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="form-clt">
								<label htmlFor="phone" className="form-label">
									Phone
								</label>
								<input type="tel" id="phone" placeholder="+91 98765 43210" />
							</div>
						</div>
						<div className="col-lg-6 align-self-end">
							<button type="submit" className="theme-btn yellow-btn w-100">
								Get Price List
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PriceListForm;

