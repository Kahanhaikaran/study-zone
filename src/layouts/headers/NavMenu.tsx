"use client";

import menu_data from "@/data/menu_data";
import { usePriceListForm } from "@/context/PriceListFormContext";
import Link from "next/link";
import React from "react";

const NavMenu = () => {
	const { openForm } = usePriceListForm();

	return (
		<ul>
			{menu_data.map((item) => (
				<li key={item.id} className={item.sub_menus ? "has-dropdown" : ""}>
					{item.action === "price-form" ? (
						<a
							href="#price-list"
							onClick={(e) => {
								e.preventDefault();
								openForm();
							}}
						>
							{item.title}
						</a>
					) : (
						item.link && <Link href={item.link}>{item.title}</Link>
					)}
					{item.sub_menus && (
						<ul className="submenu">
							{item.sub_menus.map((sub) => (
								<li key={sub.title}>
									<Link href={sub.link}>{sub.title}</Link>
								</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	);
};

export default NavMenu;
