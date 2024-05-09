import "@/styles/globals.css";
import { AnimatePresence, motion, useCycle, MotionConfig } from "framer-motion";

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

	return (
		<>
			<header className="sticky top-0 w-full h-16 bg-zinc-800 inset-0">
				<div className="container mx-auto h-full">
					<nav className="text-white h-full flex items-center justify-between">
						<div className="text-2xl">Logo</div>
						<div className="relative z-10">
							<motion.button
								animate={mobileNav ? "open" : "closed"}
								onClick={() => toggleMobileNav()}
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
						</div>

						<MotionConfig>
							<AnimatePresence>
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
													delay: 0.2,
													staggerChildren: 0.4,
													ease: "easeInOut",
												},
											},
											open: {
												y: "0%",
												transition: {
													delayChildren: 0.4,
													ease: "easeInOut",
												},
											},
										}}
										className="fixed inset-0 w-full h-full overscroll-none overflow-hidden bg-zinc-900"
									>
										<motion.div
											variants={{
												closed: {
													opacity: 0,
													y: "-1%",
													transition: {
														ease: "easeInOut",
													},
												},
												open: {
													opacity: 1,
													y: "0%",
													transition: {
														ease: "easeInOut",
													},
												},
											}}
											key="link-container"
											className="container py-16 flex flex-col gap-4"
										>
											{NavItems.map((item, id) => (
												<a
													key={id}
													href={item.link}
													className="block text-3xl font-medium"
												>
													{item.name}
												</a>
											))}
										</motion.div>
									</motion.div>
								)}
							</AnimatePresence>
						</MotionConfig>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navbar;
