import React from "react";
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { NavMenu } from "@/config/nav-menu";

export default function Navbar() {
	return (
		<>
			<div className="w-full bg-none flex justify-center">
				<NavigationMenu className="bg-black/60 px-3 py-2 rounded-full border-border/50 backdrop-blur-lg">
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="rounded-full">{NavMenu.collectionNav.title}</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[300px] ">
									{NavMenu.collectionNav.items.map((item) => (
										<ListItem
											key={item.title}
											title={item.title}
											href={item.link}
										>
											{item.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</>
	);
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
							className
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	}
);
ListItem.displayName = "ListItem";
