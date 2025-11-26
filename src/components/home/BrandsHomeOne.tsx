
"use client";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const partnerUniversities = [
	{ name: "Chandigarh University", logo: "/assets/img/brand/chandigarh-university.png" },
	{ name: "Amity University", logo: "/assets/img/brand/amity-university.png" },
	{ name: "Manav Rachna International University", logo: "/assets/img/brand/manav-rachna.png" },
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
			<section className="brands-highlight section-padding">
				<div className="container">
					<div className="brands-shell">
						<div className="section-head text-center">
							<span>Trusted universities</span>
							<h3>Students from India’s top campuses rely on StudyZone</h3>
						</div>
						<div className="brand-wrapper">
							<Swiper
								spaceBetween={12}
								speed={1800}
								loop
								autoplay={{
									delay: 1800,
									disableOnInteraction: false,
								}}
								modules={[Autoplay]}
								breakpoints={{
									1399: { slidesPerView: 6 },
									1199: { slidesPerView: 5 },
									991: { slidesPerView: 4 },
									767: { slidesPerView: 3 },
									575: { slidesPerView: 2.5 },
									0: { slidesPerView: 2 },
								}}
							>
								{[...partnerUniversities, ...partnerUniversities].map((partner, index) => (
									<SwiperSlide key={`${partner.name}-${index}`}>
										<div className="brand-pill">
											<img src={partner.logo} alt={partner.name} />
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				.brands-highlight {
					background: #f6f7fb;
					margin-top: 40px;
				}
				.brands-shell {
					background: #ffffff;
					border-radius: 32px;
					padding: 34px;
					box-shadow: 0 25px 65px rgba(15, 23, 42, 0.08);
				}
				.section-head {
					color: #0f172a;
					margin-bottom: 26px;
					font-family: "Space Grotesk", "Poppins", sans-serif;
				}
				.section-head span {
					text-transform: uppercase;
					letter-spacing: 0.18em;
					font-size: 12px;
					color: rgba(15, 23, 42, 0.5);
				}
				.section-head h3 {
					margin-top: 8px;
					font-size: 24px;
					font-weight: 600;
				}
				.brand-wrapper {
					position: relative;
					z-index: 1;
				}
				.brand-pill {
					height: 96px;
					border-radius: 22px;
					background: #f9fafc;
					border: 1px solid rgba(15, 23, 42, 0.08);
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 10px 22px;
					box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
				}
				.brand-pill img {
					max-height: 64px;
					max-width: 150px;
					width: auto;
					object-fit: contain;
				}
				@media (max-width: 991px) {
					.brands-shell {
						padding: 24px;
					}
					.brand-pill {
						height: 88px;
					}
				}
				@media (max-width: 575px) {
					.brand-pill {
						height: 76px;
					}
					.brand-pill img {
						max-height: 48px;
					}
				}
			`}</style>
		</>
	);
};

export default BrandsHomeOne;
