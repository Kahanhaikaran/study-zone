
"use client"
import menu_data from "@/data/menu_data";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
	const [openMenu, setOpenMenu] = useState<string | null>(null);

	const toggleMenu = (title: string) => {
		setOpenMenu((prev) => (prev === title ? null : title));
	};

	return (
		<>
			<div className="mean-bar">
				<a href="#nav" className="meanmenu-reveal">
					<span>
						<span>
							<span></span>
						</span>
					</span>
				</a>
				<nav className="mean-nav">
					<ul>
						{menu_data.map((item) => (
							<li key={item.id} className={item.sub_menus ? "has-dropdown" : ""}>
								<Link href={item.link}>{item.title}</Link>
								{item.sub_menus && (
									<>
										<ul
											className="submenu"
											style={{ display: openMenu === item.title ? "block" : "none" }}
										>
											{item.sub_menus.map((sub) => (
												<li key={sub.title}>
													<Link href={sub.link}>{sub.title}</Link>
												</li>
											))}
										</ul>
										<a
											className={`mean-expand ${item.title === openMenu ? "mean-clicked" : ""}`}
											href="#"
											onClick={(e) => {
												e.preventDefault();
												toggleMenu(item.title);
											}}
										>
											<i className="far fa-plus"></i>
										</a>
									</>
								)}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
};

export default MobileMenu;
