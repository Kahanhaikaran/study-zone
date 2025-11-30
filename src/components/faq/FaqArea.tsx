
import React from 'react';

const academicFaqs = [
	{
		id: 'collapseOne',
		headingId: 'headingOne',
		question: 'What types of academic work can you help me with?',
		answer:
			'We handle daily assignments, handwritten notes, lab files, reports, projects, presentations, viva decks, and long-form work like dissertations or theses. If it is part of your coursework or exam prep, we can guide or execute it end-to-end.',
	},
	{
		id: 'collapseTwo',
		headingId: 'headingTwo',
		question: 'Will the work match my college or university guidelines?',
		answer:
			'Yes. You can share your rubric, sample, or official template and we strictly follow the same format, structure, and citation style so your work looks exactly as your institute expects.',
	},
	{
		id: 'collapseThree',
		headingId: 'headingThree',
		question: 'How fast can you deliver assignments, notes, or projects?',
		answer:
			'Short tasks can be delivered within 24 hours and larger projects are planned with clear milestones and deadlines. We confirm timelines before starting and keep you updated so there are no last-minute surprises.',
	},
	{
		id: 'collapseFour',
		headingId: 'headingFour',
		question: 'Is the content 100% plagiarism-free and original?',
		answer:
			'Yes. Every solution is created from scratch, referenced correctly, and checked through trusted plagiarism tools. On request, we can also provide you with a plagiarism report for additional assurance.',
	},
	{
		id: 'collapseFive',
		headingId: 'headingFive',
		question: 'Will my personal details and files stay confidential?',
		answer:
			'Absolutely. Your name, contact details, subjects, and files are only accessible to the assigned expert and our core team. We never resell or reuse your material and all communication remains strictly 1:1.',
	},
	{
		id: 'collapseSix',
		headingId: 'headingSix',
		question: 'How do I get started and place a new request?',
		answer:
			'Simply share your requirements via WhatsApp, call, or email along with your deadline. We review the task, confirm scope and pricing, and start once you approve—then share drafts, revisions, and final files on time.',
	},
];

const FaqArea = () => {
	const leftFaqs = academicFaqs.slice(0, 3);
	const rightFaqs = academicFaqs.slice(3);

	return (
		<>
			<section id="faq" className="gallery-section section-padding pt-0 fix">
				<div className="faq-wrapper style-5">
					<div className="container">
						<div className="section-title text-center">
							<h6>FAQs</h6>
							<h2>Everything you need to know</h2>
						</div>
						<div className="row g-4">
							<div className="col-lg-6">
								<div className="faq-content">
									<div className="faq-items">
										<div className="accordion" id="accordionLeft">
											{leftFaqs.map((faq, index) => (
												<div className={`accordion-item ${index === leftFaqs.length - 1 ? 'm-0' : ''}`} key={faq.id}>
													<h2 className="accordion-header" id={faq.headingId}>
														<button
															className="accordion-button collapsed"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target={`#${faq.id}`}
															aria-expanded="false"
															aria-controls={faq.id}
														>
															{faq.question}
														</button>
													</h2>
													<div
														id={faq.id}
														className="accordion-collapse collapse"
														aria-labelledby={faq.headingId}
														data-bs-parent="#accordionLeft"
													>
														<div className="accordion-body">
															<p>{faq.answer}</p>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="faq-content">
									<div className="faq-items">
										<div className="accordion" id="accordionRight">
											{rightFaqs.map((faq, index) => (
												<div className={`accordion-item ${index === rightFaqs.length - 1 ? 'm-0' : ''}`} key={faq.id}>
													<h2 className="accordion-header" id={faq.headingId}>
														<button
															className="accordion-button collapsed"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target={`#${faq.id}`}
															aria-expanded="false"
															aria-controls={faq.id}
														>
															{faq.question}
														</button>
													</h2>
													<div
														id={faq.id}
														className="accordion-collapse collapse"
														aria-labelledby={faq.headingId}
														data-bs-parent="#accordionRight"
													>
														<div className="accordion-body">
															<p>{faq.answer}</p>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FaqArea;