import type { NavMenuConfig } from "@/types";

export const NavMenu: NavMenuConfig = {
	collectionNav: {
		title: "Collections",
        link: "/collections",
		items: [
			{
				title: "Wedding",
                description: "Wedding photography",
				link: "/collections/wedding",
			},
			{
				title: "Portrait",
                description: "Portrait photography",
				link: "/collections/portrait",
			},
			{
				title: "Family",
                description: "Family photography",
				link: "/collections/family",
			},
			{
				title: "Events",
                description: "Event photography",
				link: "/collections/events",
			},
			{
				title: "Commercial",
                description: "Commercial photography",
				link: "/collections/commercial",
			},
		],
	},

	aboutNav: {
		title: "About",
		link: "/about",
	},

	contactNav: {
		title: "Contact",
		link: "/contact",
	},
};
