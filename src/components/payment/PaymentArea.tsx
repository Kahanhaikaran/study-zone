"use client";

import React from "react";

const paymentMethods = [
	{
		title: "UPI Payment",
		icon: "fas fa-mobile-alt",
		description: "Quick and secure UPI payments via PhonePe, Google Pay, Paytm, or any UPI app",
		details: [
			"Scan QR code or use UPI ID",
			"Instant payment confirmation",
			"Available 24/7",
		],
		upiId: "myShikshaSagar@paytm",
		qrCode: "/assets/img/payment/upi-qr.png",
	},
	{
		title: "Bank Transfer",
		icon: "fas fa-university",
		description: "Direct bank transfer (NEFT/RTGS/IMPS) to our account",
		details: [
			"Account details provided after order confirmation",
			"Transfer confirmation required",
			"Processing time: 1-2 business days",
		],
	},
	{
		title: "Payment Gateway",
		icon: "fas fa-credit-card",
		description: "Secure online payment via credit/debit cards or net banking",
		details: [
			"Multiple payment options",
			"SSL encrypted transactions",
			"Instant payment processing",
		],
	},
	{
		title: "Cash on Delivery",
		icon: "fas fa-money-bill-wave",
		description: "Pay in cash when receiving physical documents (limited areas)",
		details: [
			"Available for select locations",
			"Additional delivery charges may apply",
			"Contact us to check availability",
		],
	},
];

const PaymentArea = () => {
	return (
		<section className="payment-section section-padding pt-0 fix">
			<div className="container">
				<div className="section-title text-center">
					<h6 className="wow fadeInUp">Payment</h6>
					<h2 className="wow fadeInUp" data-wow-delay=".2s">
						Secure Payment Options
					</h2>
					<p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
						Choose from multiple secure payment methods. All transactions are encrypted and secure.
					</p>
				</div>

				<div className="payment-methods-wrapper">
					<div className="row g-4">
						{paymentMethods.map((method, index) => (
							<div className="col-lg-6 col-md-6" key={method.title}>
								<div className="payment-method-card h-100 wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
									<div className="method-icon">
										<i className={method.icon}></i>
									</div>
									<h3>{method.title}</h3>
									<p className="method-description">{method.description}</p>
									<ul className="method-details">
										{method.details.map((detail, idx) => (
											<li key={idx}>
												<i className="far fa-check-circle"></i>
												<span>{detail}</span>
											</li>
										))}
									</ul>
									{method.upiId && (
										<div className="upi-info">
											<p className="upi-label">UPI ID:</p>
											<p className="upi-id">{method.upiId}</p>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="payment-info-section wow fadeInUp" data-wow-delay=".5s">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div className="info-box">
								<h4>Payment Terms & Conditions</h4>
								<ul className="terms-list">
									<li>
										<i className="fas fa-check"></i>
										<span>Payment is required before work begins or as per agreed milestones</span>
									</li>
									<li>
										<i className="fas fa-check"></i>
										<span>All payments are non-refundable once work has commenced</span>
									</li>
									<li>
										<i className="fas fa-check"></i>
										<span>Payment receipts will be sent via email within 24 hours</span>
									</li>
									<li>
										<i className="fas fa-check"></i>
										<span>For bank transfers, please share the transaction ID for confirmation</span>
									</li>
									<li>
										<i className="fas fa-check"></i>
										<span>For any payment-related queries, contact us via WhatsApp or email</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="payment-cta wow fadeInUp" data-wow-delay=".6s">
					<div className="cta-content">
						<h4>Need Help with Payment?</h4>
						<p>Our support team is available to assist you with any payment-related questions.</p>
						<div className="cta-buttons">
							<a href="tel:+918882309876" className="theme-btn yellow-btn">
								Call Us
							</a>
							<a href="https://wa.me/917303628683" target="_blank" rel="noopener noreferrer" className="theme-btn yellow-btn style-2">
								WhatsApp
							</a>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.payment-section {
					background: #f6f7fb;
				}

				.payment-method-card {
					background: #fff;
					border-radius: 18px;
					padding: 32px 28px;
					box-shadow: 0 14px 32px rgba(15, 23, 42, 0.1);
					border: 1px solid rgba(148, 163, 184, 0.15);
					transition: transform 0.3s ease, box-shadow 0.3s ease;
					height: 100%;
					display: flex;
					flex-direction: column;
				}

				.payment-method-card:hover {
					transform: translateY(-8px);
					box-shadow: 0 24px 60px rgba(15, 23, 42, 0.2);
				}

				.method-icon {
					width: 60px;
					height: 60px;
					border-radius: 14px;
					background: linear-gradient(135deg, rgba(250, 204, 21, 0.15) 0%, rgba(250, 204, 21, 0.25) 100%);
					display: grid;
					place-items: center;
					font-size: 28px;
					color: #facc15;
					margin-bottom: 20px;
					box-shadow: 0 4px 12px rgba(250, 204, 21, 0.2);
				}

				.payment-method-card h3 {
					font-size: 22px;
					font-weight: 600;
					color: #0f172a;
					margin-bottom: 12px;
				}

				.method-description {
					font-size: 15px;
					color: rgba(15, 23, 42, 0.7);
					line-height: 1.6;
					margin-bottom: 20px;
				}

				.method-details {
					list-style: none;
					padding: 0;
					margin: 0 0 20px 0;
					flex: 1;
				}

				.method-details li {
					display: flex;
					align-items: flex-start;
					gap: 10px;
					margin-bottom: 12px;
					font-size: 14px;
					color: rgba(15, 23, 42, 0.8);
				}

				.method-details li i {
					color: #22c55e;
					font-size: 16px;
					margin-top: 2px;
					flex-shrink: 0;
				}

				.upi-info {
					background: rgba(250, 204, 21, 0.1);
					border-radius: 10px;
					padding: 16px;
					margin-top: auto;
				}

				.upi-label {
					font-size: 12px;
					color: rgba(15, 23, 42, 0.6);
					margin: 0 0 6px 0;
					font-weight: 500;
				}

				.upi-id {
					font-size: 16px;
					color: #0f172a;
					margin: 0;
					font-weight: 600;
					font-family: monospace;
				}

				.payment-info-section {
					margin-top: 60px;
				}

				.info-box {
					background: #fff;
					border-radius: 18px;
					padding: 40px;
					box-shadow: 0 14px 32px rgba(15, 23, 42, 0.1);
					border: 1px solid rgba(148, 163, 184, 0.15);
				}

				.info-box h4 {
					font-size: 24px;
					font-weight: 600;
					color: #0f172a;
					margin-bottom: 24px;
				}

				.terms-list {
					list-style: none;
					padding: 0;
					margin: 0;
				}

				.terms-list li {
					display: flex;
					align-items: flex-start;
					gap: 12px;
					margin-bottom: 16px;
					font-size: 15px;
					color: rgba(15, 23, 42, 0.8);
					line-height: 1.6;
				}

				.terms-list li i {
					color: #facc15;
					font-size: 18px;
					margin-top: 2px;
					flex-shrink: 0;
				}

				.payment-cta {
					margin-top: 50px;
					text-align: center;
				}

				.cta-content h4 {
					font-size: 26px;
					font-weight: 600;
					color: #0f172a;
					margin-bottom: 12px;
				}

				.cta-content p {
					font-size: 16px;
					color: rgba(15, 23, 42, 0.7);
					margin-bottom: 28px;
				}

				.cta-buttons {
					display: flex;
					gap: 16px;
					justify-content: center;
					flex-wrap: wrap;
				}

				@media (max-width: 767px) {
					.payment-method-card {
						padding: 24px 20px;
					}

					.info-box {
						padding: 28px 20px;
					}

					.cta-buttons {
						flex-direction: column;
					}

					.cta-buttons .theme-btn {
						width: 100%;
					}
				}
			`}</style>
		</section>
	);
};

export default PaymentArea;

