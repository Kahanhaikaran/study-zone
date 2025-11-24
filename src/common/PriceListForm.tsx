"use client";

import { services } from "@/data/services";
import React, { useMemo, useState } from "react";

interface PriceListFormProps {
	open: boolean;
	onClose: () => void;
}

const WHATSAPP_NUMBER = "8882309876";

const PriceListForm = ({ open, onClose }: PriceListFormProps) => {
	const [formValues, setFormValues] = useState({
		service: "",
		university: "",
		name: "",
		email: "",
		phone: "",
	});

	const serviceOptions = useMemo(
		() =>
			services.map((service) => ({
				value: service.slug,
				label: service.title,
			})),
		[]
	);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { id, value } = event.target;
		setFormValues((prev) => ({ ...prev, [id]: value }));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const selectedService =
			serviceOptions.find((option) => option.value === formValues.service)?.label || "Not specified";

		const messageLines = [
			"Price List Request",
			"",
			`Service: ${selectedService}`,
			`University: ${formValues.university || "Not specified"}`,
			`Name: ${formValues.name || "Not specified"}`,
			`Email: ${formValues.email || "Not specified"}`,
			`Phone: ${formValues.phone || "Not specified"}`,
		];

		const encodedMessage = encodeURIComponent(messageLines.join("\n"));
		const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
		window.open(whatsappUrl, "_blank");
		onClose();
		setFormValues({
			service: "",
			university: "",
			name: "",
			email: "",
			phone: "",
		});
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
								<select id="service" className="form-select" value={formValues.service} onChange={handleChange}>
									<option value="">Choose a service</option>
									{serviceOptions.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
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
								<input
									type="text"
									id="university"
									value={formValues.university}
									onChange={handleChange}
									placeholder="University / Board"
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="form-clt">
								<label htmlFor="name" className="form-label">
									Name
								</label>
								<input type="text" id="name" value={formValues.name} onChange={handleChange} placeholder="Full name" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="form-clt">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									type="email"
									id="email"
									value={formValues.email}
									onChange={handleChange}
									placeholder="name@email.com"
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="form-clt">
								<label htmlFor="phone" className="form-label">
									Phone
								</label>
								<input
									type="tel"
									id="phone"
									value={formValues.phone}
									onChange={handleChange}
									placeholder="+91 98765 43210"
								/>
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

