import { menuItems } from "@/config/nav-items";
import { Button } from "@headlessui/react";

export const DesktopNavbar = () => {
	return (
		<nav className="absolute top-0 w-full h-16 inset-0 hidden lg:block">
			<div className="container flex justify-between items-center text-white bg-zinc-800">
				<div className="text-2xl">Logo</div>
				<div className="flex gap-4">
					{menuItems.map((item, id) => (
						<Button
							key={id}
							className="inline-flex items-center gap-2 rounded-full py-1.5 px-3 text-base text-white   data-[hover]:bg-white/10 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
						>
							{item.name}
						</Button>
					))}
				</div>
				<div>Button</div>
			</div>
		</nav>
	);
};
