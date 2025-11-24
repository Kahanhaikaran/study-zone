"use client";

import Link from "next/link";
import React from "react";

const WhatsAppButton = () => {
	return (
		<Link
			href="https://wa.me/8882309876"
			className="whatsapp-fab"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Chat with us on WhatsApp"
		>
			<i className="fab fa-whatsapp"></i>
		</Link>
	);
};

export default WhatsAppButton;

