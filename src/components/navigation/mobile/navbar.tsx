import "@/styles/globals.css"

import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Menu } from "../mobile/menu";
import { MenuToggle } from "../mobile/menu-toggle";
import { useEffect } from "react";

const menuContainer = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
            stiffness: 200,
			damping: 30,
			restDelta: 0.01,
		},
	},
	closed: {
		y: "-100%",
		opacity: 0.5,
		transition: {
			delay: 0.35,
			type: "spring",
			stiffness: 400,
			damping: 30,
		},
	},
};

export const Navbar = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isOpen]);

	return (
		<AnimatePresence>
			<motion.nav
				className="sticky top-0 w-full h-16 bg-zinc-950 inset-0"
				initial={false}
				animate={isOpen ? "open" : "closed"}
				exit="closed"
			>
				<div className="container mx-auto h-full text-white flex items-center justify-between">
					<div className="text-2xl">Logo</div>
					<motion.div
						className="blurred-bottom fixed inset-0 w-full h-screen bg-zinc-900"
						variants={menuContainer}
					/>
					<Menu />
					<MenuToggle toggle={() => toggleOpen()} />
				</div>
			</motion.nav>
		</AnimatePresence>
	);
};
