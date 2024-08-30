import { Menu } from "lucide-react";

export function Button() {
	return (
		<button className="block xs:hidden p-2 outline outline-2 outline-aqua hover:bg-gradient-to-r from-blue via-aqua to-green rounded-md hover:text-white">
			<Menu size={24} />
		</button>
	);
}
