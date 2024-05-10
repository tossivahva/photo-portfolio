import "@/styles/globals.css";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";

const NavItems = [
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

const Navbar = () => {
	const [mobileNav, toggleMobileNav] = useCycle(false, true);
	const [isButtonDisabled, setButtonDisabled] = useState(false);

	const handleClick = () => {
		if (!isButtonDisabled) {
			toggleMobileNav();
			setButtonDisabled(true);
			setTimeout(() => setButtonDisabled(false), 800);
		}
	};

	useEffect(() => {
		if (mobileNav) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [mobileNav]);

	return (
		<>
			<header className="sticky top-0 w-full h-16 bg-zinc-800 inset-0">
				<div className="container mx-auto h-full">
					<nav className="text-white h-full flex items-center justify-between">
						<motion.div className="text-2xl">Logo</motion.div>
						<motion.div className="relative z-10">
							<motion.button
								animate={mobileNav ? "open" : "closed"}
								onClick={() => handleClick()}
								className="flex flex-col space-y-1.5 -mr-5"
							>
								<motion.span
									variants={{
										closed: { rotate: 0, y: 0 },
										open: { rotate: -45, y: 8 },
									}}
									className="block w-6 h-0.5 bg-white rounded-full"
								></motion.span>
								<motion.span
									variants={{
										closed: { opacity: 1, scaleX: 1 },
										open: { opacity: 0, scaleX: 0 },
									}}
									transition={{
										type: "keyframes",
										duration: 0.1,
										ease: "easeIn",
									}}
									className="block w-6 h-0.5 ml-2.5 bg-white rounded-full"
								></motion.span>
								<motion.span
									variants={{
										closed: { rotate: 0, y: 0 },
										open: { rotate: 45, y: -8 },
									}}
									className="block w-6 h-0.5 bg-white rounded-full"
								></motion.span>
							</motion.button>
						</motion.div>

						<AnimatePresence mode="wait">
							{mobileNav && (
								<motion.div
									key="fixed-container"
									initial="closed"
									animate="open"
									exit="closed"
									variants={{
										closed: {
											y: "-100%",
											transition: {
												delay: 0.15,
												type: "spring",
												bounce: 0,
												ease: "easeInOut",
											},
										},
										open: {
											y: "0%",
											transition: {
												delayChildren: 0.3,
												type: "spring",
												bounce: 0,
												ease: "easeInOut",
											},
										},
									}}
									className="fixed inset-0 w-full h-full overscroll-none overflow-hidden bg-zinc-900"
								>
									<motion.div
										transition={{
											staggerChildren: 0.1,
										}}
										variants={{
											closed: {
												opacity: 0,
											},
											open: {
												opacity: 1,
											},
										}}
										key="link-container"
										className="container py-16 flex flex-col gap-4"
									>
										{NavItems.map((item, id) => (
											<motion.a
												key={id}
												href={item.link}
												className="block text-3xl font-medium"
												variants={{
													closed: {
														opacity: 0,
													},
													open: {
														opacity: 1,
													},
												}}
											>
												{item.name}
											</motion.a>
										))}
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navbar;
