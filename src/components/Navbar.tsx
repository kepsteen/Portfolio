import { Dropdown } from "flowbite-react";
import { Button } from "./Button";
import { useState } from "react";
import { Menu } from "lucide-react";

const links = [
	{
		url: "#home",
		name: "Home",
	},
	{
		url: "#about",
		name: "About",
	},
	{
		url: "#projects",
		name: "Projects",
	},
	{
		url: "#contact",
		name: "Contact",
	},
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav>
				<ul className="flex xs:hidden gap-3 font-mono">
					{links.map((link) => (
						<li
							key={link.name}
							className="hover:text-aqua transition-colors ease-in-out"
						>
							<a href={link.url}>{link.name}</a>
						</li>
					))}
				</ul>
				<button
					onClick={() => setIsOpen(true)}
					className="hidden xs:block p-2 outline outline-2 outline-aqua hover:bg-gradient-to-r from-blue via-aqua to-green rounded-md hover:text-white"
				>
					<Menu size={24} />
					<p className={`hidden ${isOpen && "block"}`}>Open</p>
				</button>
			</nav>
		</>
	);
}
