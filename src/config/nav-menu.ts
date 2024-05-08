import type { NavMenuConfig } from "@/types";

export const NavMenu: NavMenuConfig = {
	collectionNav: {
		title: "Collections",
		link: "/collections",
		items: [
			{
				title: "Wedding",
				description: "My wedding photography. Photos from various weddings.",
				link: "/collections/wedding",
			},
			{
				title: "Portrait",
				description: "Portrait photography, including headshots and senior portraits.",
				link: "/collections/portrait",
			},
			{
				title: "Family",
				description: "Family photography. Family portraits and family events.",
				link: "/collections/family",
			},
			{
				title: "Events",
				description: "Event photography. Photos from various events.",
				link: "/collections/events",
			},
			{
				title: "Commercial",
				description: "Commercial photography. Photos from commercial shoots.",
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
