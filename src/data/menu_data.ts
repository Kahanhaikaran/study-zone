import { services } from "./services";

interface SubMenu {
	link: string;
	title: string;
}

interface DataType {
	id: number;
	title: string;
	link: string;
	sub_menus?: SubMenu[];
}

const servicesMenus: SubMenu[] = services.map((service) => ({
	link: `/services/${service.slug}`,
	title: service.title,
}));

const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
	},
	{
		id: 2,
		title: "About",
		link: "/about",
	},
	{
		id: 3,
		title: "Services",
		link: "/services",
		sub_menus: servicesMenus,
	},
	{
		id: 4,
		title: "Price List",
		link: "/pricing",
	},
	{
		id: 5,
		title: "Testimonials",
		link: "/#testimonials",
	},
	{
		id: 6,
		title: "FAQ",
		link: "/#faq",
	},
];

export default menu_data;
