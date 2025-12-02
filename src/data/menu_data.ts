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
	hidden?: boolean;
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
		title: "University",
		link: "/university",
		sub_menus: [
			{ link: "/university/amity", title: "AMITY" },
			{ link: "/university/imt", title: "IMT" },
			{ link: "/university/lpu", title: "LPU" },
			{ link: "/university/symbiosis", title: "SYMBIOSIS" },
			{ link: "/university/annamalai", title: "ANNAMALAI" },
			{ link: "/university/ip-university", title: "IP University" },
			{ link: "/university/nios", title: "NIOS" },
			{ link: "/university/upes", title: "UPES" },
			{ link: "/university/bvdu", title: "BVDU" },
			{ link: "/university/isbm", title: "ISBM" },
			{ link: "/university/nmims", title: "NMIMS" },
			{ link: "/university/vmou", title: "VMOU" },
			{ link: "/university/ignou", title: "IGNOU" },
			{ link: "/university/jnu-jaipur", title: "JNU JAIPUR" },
			{ link: "/university/smu", title: "SMU" },
		],
	},
	{
		id: 4,
		title: "Services",
		link: "/services",
		sub_menus: servicesMenus,
	},
	{
		id: 5,
		title: "Price List",
		link: "/pricing",
	},
	{
		id: 6,
		title: "Testimonials",
		link: "/#testimonials",
	},
	{
		id: 7,
		title: "FAQ",
		link: "/#faq",
	},
	{
		id: 8,
		title: "Payment",
		link: "/payment",
		hidden: true,
	},
];

export default menu_data;
