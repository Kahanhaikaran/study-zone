
"use client";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const partnerUniversities = [
	{ name: "Chandigarh University", logo: "/assets/img/brand/chandigarh-university.png" },
	{ name: "Amity University", logo: "/assets/img/brand/amity-university.png" },
	{ name: "Manav Rachna University", logo: "/assets/img/brand/manav-rachna.png" },
	{ name: "GD Goenka University", logo: "/assets/img/brand/gd-goenka.png" },
	{ name: "Galgotias University", logo: "/assets/img/brand/galgotias.png" },
	{ name: "Symbiosis International University", logo: "/assets/img/brand/symbiosis.png" },
	{ name: "Sharda University", logo: "/assets/img/brand/sharda.png" },
	{ name: "Lovely Professional University", logo: "/assets/img/brand/lpu.png" },
	{ name: "Jaypee Institute of Information Technology", logo: "/assets/img/brand/jiit.png" },
];

const BrandsHomeOne = () => {
	return (
		<>
			<section className="brands-highlight slim">
				<div className="container">
					<div className="brands-shell">
						<div className="section-head text-center">
							<h3 className="headline">Students from India’s top campuses rely on StudyZone</h3>
						</div>
					<div className="brand-wrapper">
						<div className="brand-tape">
							{[...partnerUniversities, ...partnerUniversities].map((partner, index) => (
								<div className="brand-pill" key={`${partner.name}-${index}`}>
									<img src={partner.logo} alt={partner.name} />
									<span>{partner.name}</span>
								</div>
							))}
						</div>
					</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				.brands-highlight {
					background: #f6f7fb;
					padding: clamp(10px, 2vw, 28px) 0 26px;
					margin-top: clamp(8px, 2vw, 24px);
				}
				.brands-highlight.slim {
					padding: clamp(6px, 1.5vw, 20px) 0 clamp(12px, 2vw, 24px);
				}
				.brands-shell {
					background: transparent;
					border-radius: 0;
					padding: clamp(10px, 1.5vw, 20px) 0;
					box-shadow: none;
					position: relative;
					z-index: 2;
				}
				.section-head {
					color: #0f172a;
					margin-bottom: clamp(8px, 1.2vw, 16px);
					font-family: "Space Grotesk", "Poppins", sans-serif;
					text-align: center;
				}
				.section-head .headline {
					margin: 0;
					font-size: clamp(18px, 1.5vw, 22px);
					font-weight: 600;
					line-height: 1.4;
					color: rgba(15, 23, 42, 0.78);
				}
				.brand-wrapper {
					overflow: hidden;
					position: relative;
					padding: clamp(6px, 1vw, 12px) 0;
					margin-top: clamp(6px, 1vw, 14px);
				}
				.brand-tape {
					display: flex;
					gap: clamp(16px, 1.8vw, 32px);
					align-items: center;
					animation: brand-scroll 30s linear infinite;
					min-width: max-content;
				}
				.brand-pill {
					height: clamp(44px, 5.2vw, 54px);
					min-width: clamp(120px, 11vw, 160px);
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 10px;
					padding: 0 clamp(10px, 1.2vw, 16px);
					border-radius: 999px;
					background: #fff;
					border: 1px solid rgba(15, 23, 42, 0.08);
					box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);

					img {
						height: clamp(24px, 3vw, 32px);
						width: auto;
						object-fit: contain;
					}

					span {
						font-size: clamp(10px, 1.1vw, 12px);
						font-weight: 600;
						color: rgba(15, 23, 42, 0.85);
						white-space: nowrap;
					}
				}
				.brand-wrapper:hover .brand-tape {
					animation-play-state: paused;
				}
				@media (max-width: 991px) {
					.brands-shell {
						padding: 22px;
					}
					.brand-tape {
						animation-duration: 30s;
					}
					.brand-pill {
						min-width: 150px;
					}
					.brands-highlight {
						margin-top: -16px;
						padding: 18px 0;
					}
				}
				@media (max-width: 575px) {
					.brands-highlight {
						margin-top: -12px;
						padding: 16px 0;
					}
					.brand-tape {
						animation-duration: 25s;
					}
					.brand-pill {
						min-width: 140px;
						gap: 8px;
					}
				}

				@keyframes brand-scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
			`}</style>
		</>
	);
};

export default BrandsHomeOne;
