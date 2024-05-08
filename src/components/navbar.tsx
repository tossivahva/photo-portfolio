import "@/styles/globals.css";
import { motion, useCycle } from "framer-motion";

const NavItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Services",
        link: "/services",
    },
    {
        name: "Contact",
        link: "/contact",
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
						<div className="z-10">
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

						<div className="fixed inset-0 w-full h-full overscroll-none overflow-hidden bg-blue-400/50">
                            <div className="container">
                                {NavItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        className="block py-4 text-2xl"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navbar;
