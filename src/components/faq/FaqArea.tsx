
import React from 'react';

const academicFaqs = [
	{
		id: 'collapseOne',
		headingId: 'headingOne',
		question: 'What kind of academic work do you handle?',
		answer:
			'We support everything from everyday assignments and handwritten journals to research-heavy dissertations, viva decks, and presentation-ready PPTs. If it is part of your coursework, we can execute it.',
		defaultOpen: true,
	},
	{
		id: 'collapseTwo',
		headingId: 'headingTwo',
		question: 'Can you follow my college or university format?',
		answer:
			'Yes. Share your rubric, template, or past sample and we will mirror the exact structure, citation style, and submission guidelines so it feels native to your institute.',
	},
	{
		id: 'collapseThree',
		headingId: 'headingThree',
		question: 'How fast can you deliver assignments or notes?',
		answer:
			'Turnarounds start from 24 hours for short tasks and scale up with project complexity. We always commit to a deadline upfront and share progress checkpoints so you are never left guessing.',
	},
	{
		id: 'collapseFour',
		headingId: 'headingFour',
		question: 'Is the content plagiarism-free?',
		answer:
			'Every draft is created from scratch, referenced properly, and scanned through leading plagiarism tools. We can attach the originality report with your delivery on request.',
	},
	{
		id: 'collapseFive',
		headingId: 'headingFive',
		question: 'Will my details stay confidential?',
		answer:
			'Absolutely. Your name, subject, and files are handled only by the assigned expert. We never reuse or resell your content, and communication stays 1:1 through secure channels.',
	},
	{
		id: 'collapseSix',
		headingId: 'headingSix',
		question: 'How do I get started with a new task?',
		answer:
			'Send your requirements on WhatsApp at +91 73036 28683 or email us. We confirm the scope, share the quote, and begin once you approve. You receive drafts, revisions, and final files right on time.',
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
												<div className={`accordion-item ${index === leftFaqs.length - 1 ? 'mb-0' : ''}`} key={faq.id}>
													<h2 className="accordion-header" id={faq.headingId}>
														<button
															className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
															type="button"
															data-bs-toggle="collapse"
															data-bs-target={`#${faq.id}`}
															aria-expanded={index === 0}
															aria-controls={faq.id}
														>
															{faq.question}
														</button>
													</h2>
													<div
														id={faq.id}
														className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
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
												<div className={`accordion-item ${index === rightFaqs.length - 1 ? 'mb-0' : ''}`} key={faq.id}>
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