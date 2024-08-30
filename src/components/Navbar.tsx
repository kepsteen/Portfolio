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
	return (
		<>
			<nav className="hidden ">
				<ul className="flex gap-3 font-mono">
					{links.map((link) => (
						<li
							key={link.name}
							className="hover:text-aqua transition-colors ease-in-out"
						>
							<a href={link.url}>{link.name}</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
