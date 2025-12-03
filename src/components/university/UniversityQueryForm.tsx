"use client";

import React, { useState } from "react";

type UniversityQueryFormProps = {
	universityName: string;
};

type FormState = {
	name: string;
	phone: string;
	email: string;
	course: string;
	year: string;
	semester: string;
	serviceType: string;
	message: string;
};

const COURSES = [
	"BA",
	"BSc",
	"BCom",
	"BBA",
	"BCA",
	"BSc IT",
	"BSc CS",
	"B.Tech",
	"BE",
	"B.Ed",
	"LLB",
	"MA",
	"MSc",
	"MCom",
	"MBA",
	"MCA",
	"MSW",
	"M.Tech",
	"PG Diploma",
	"Certificate",
	"Other",
];

const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

const SEMESTERS = [
	"1 (First)",
	"2 (Second)",
	"3 (Third)",
	"4 (Fourth)",
	"5 (Fifth)",
	"6 (Sixth)",
	"7 (Seventh)",
	"8 (Eighth)",
];

const SERVICE_TYPES = [
	"Solved Assignments",
	"Exam Notes",
	"Synopsis & Project",
	"Dissertation / Thesis",
	"Handwritten Copies",
	"Other Academic Help",
];

const whatsappNumber = "917303628683";

const UniversityQueryForm: React.FC<UniversityQueryFormProps> = ({ universityName }) => {
	const [formState, setFormState] = useState<FormState>({
		name: "",
		phone: "",
		email: "",
		course: "",
		year: "",
		semester: "",
		serviceType: "",
		message: "",
	});
	const [error, setError] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
		setError(null);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (
			!formState.name ||
			!formState.phone ||
			!formState.course ||
			!formState.year ||
			!formState.semester ||
			!formState.serviceType
		) {
			setError("Please fill in all required fields marked with *.");
			return;
		}

		setIsSubmitting(true);

		try {
			const lines = [
				"Hello! I have a query for university support.",
				"",
				`University: ${universityName}`,
				`Course: ${formState.course}`,
				`Semester / Year: Semester ${formState.semester}, ${formState.year}`,
				`Service Type: ${formState.serviceType}`,
				"",
				`Name: ${formState.name}`,
				`Phone / WhatsApp: ${formState.phone}`,
				formState.email ? `Email: ${formState.email}` : "",
				formState.message ? `\n${formState.message}` : "",
			].filter(Boolean);

			const text = encodeURIComponent(lines.join("\n"));

			if (typeof window !== "undefined") {
				window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
			}

			setFormState({
				name: "",
				phone: "",
				email: "",
				course: "",
				year: "",
				semester: "",
				serviceType: "",
				message: "",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="university-query" className="section-padding query-section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="university-rich-copy">
							<h3 className="mb-10">Quick help for your {universityName} work</h3>
							<p className="mb-15">
								Share a few basic details and we&apos;ll respond on WhatsApp with the right solved assignments, notes,
								synopsis or project options.
							</p>
							<div className="query-highlight-row mb-3">
								<div className="query-highlight-chip">
									<i className="far fa-bell" aria-hidden="true" />
									<span>Fast response</span>
								</div>
								<div className="query-highlight-chip">
									<i className="far fa-file-alt" aria-hidden="true" />
									<span>University format</span>
								</div>
								<div className="query-highlight-chip">
									<i className="far fa-shield-check" aria-hidden="true" />
									<span>Expert verified</span>
								</div>
							</div>
							<form className="query-modal-form" onSubmit={handleSubmit}>
								<div className="query-modal-grid">
									<div className="form-group">
										<label htmlFor="uq-name">
											Name <span className="text-danger">*</span>
										</label>
										<input
											id="uq-name"
											name="name"
											type="text"
											className="form-control"
											placeholder="Enter your full name"
											value={formState.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="form-group">
										<label htmlFor="uq-phone">
											Phone / WhatsApp <span className="text-danger">*</span>
										</label>
										<input
											id="uq-phone"
											name="phone"
											type="tel"
											className="form-control"
											placeholder="Enter your phone or WhatsApp number"
											value={formState.phone}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="form-group">
										<label htmlFor="uq-email">Email (optional)</label>
										<input
											id="uq-email"
											name="email"
											type="email"
											className="form-control"
											placeholder="Enter your email address"
											value={formState.email}
											onChange={handleChange}
										/>
									</div>
									<div className="form-group">
										<label>University</label>
										<input
											type="text"
											className="form-control"
											value={universityName}
											disabled
											readOnly
										/>
									</div>
									<div className="form-group">
										<label htmlFor="uq-course">
											Course <span className="text-danger">*</span>
										</label>
										<select
											id="uq-course"
											name="course"
											className="form-select form-control"
											value={formState.course}
											onChange={handleChange}
											required
										>
											<option value="">Select course</option>
											{COURSES.map((course) => (
												<option key={course} value={course}>
													{course}
												</option>
											))}
										</select>
									</div>
									<div className="form-group">
										<label htmlFor="uq-year">
											Year <span className="text-danger">*</span>
										</label>
										<select
											id="uq-year"
											name="year"
											className="form-select form-control"
											value={formState.year}
											onChange={handleChange}
											required
										>
											<option value="">Select year</option>
											{YEARS.map((year) => (
												<option key={year} value={year}>
													{year}
												</option>
											))}
										</select>
									</div>
									<div className="form-group">
										<label htmlFor="uq-semester">
											Semester <span className="text-danger">*</span>
										</label>
										<select
											id="uq-semester"
											name="semester"
											className="form-select form-control"
											value={formState.semester}
											onChange={handleChange}
											required
										>
											<option value="">Select semester</option>
											{SEMESTERS.map((semester) => (
												<option key={semester} value={semester}>
													{semester}
												</option>
											))}
										</select>
									</div>
									<div className="form-group">
										<label htmlFor="uq-serviceType">
											Service Type <span className="text-danger">*</span>
										</label>
										<select
											id="uq-serviceType"
											name="serviceType"
											className="form-select form-control"
											value={formState.serviceType}
											onChange={handleChange}
											required
										>
											<option value="">Select service type</option>
											{SERVICE_TYPES.map((service) => (
												<option key={service} value={service}>
													{service}
												</option>
											))}
										</select>
									</div>
									<div className="form-group form-group-full">
										<label htmlFor="uq-message">Additional details (optional)</label>
										<textarea
											id="uq-message"
											name="message"
											className="form-control"
											rows={3}
											placeholder="Subjects, deadlines or any specific notes you want to share"
											value={formState.message}
											onChange={handleChange}
										/>
									</div>
								</div>
								{error && <p className="query-modal-error">{error}</p>}
								<button type="submit" className="theme-btn yellow-btn query-submit-btn" disabled={isSubmitting}>
									{isSubmitting && <span className="query-loader" aria-hidden="true" />}
									<span className="query-submit-label">
										{isSubmitting ? "Opening WhatsApp..." : "Get details on WhatsApp"}
									</span>
								</button>
								<p className="query-modal-footnote mt-2 mb-0">
									All details are shared privately over WhatsApp. We never spam or share your data.
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UniversityQueryForm;


