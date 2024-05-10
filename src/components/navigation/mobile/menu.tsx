import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";

const menuItems = [
	{
		name: "Main",
		link: "#",
	},
	{
		name: "About",
		link: "#",
	},
	{
		name: "Services",
		link: "#",
	},
	{
		name: "Contact",
		link: "#",
	},
];

const variants = {
	open: {
		transition: { staggerChildren: 0.025, delayChildren: 0.25 },
	},
	closed: {
		transition: { staggerChildren: 0, staggerDirection: -1 },
	},
};

export const Menu = () => {
	return (
		<motion.ul className="absolute top-16 flex flex-col gap-4" variants={variants}>
			{menuItems.map((item, id) => (
				<MenuItem
					key={id}
					link={item.link}
					title={item.name}
				/>
			))}
		</motion.ul>
	);
};
