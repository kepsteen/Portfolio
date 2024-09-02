type Props = {
	children: React.ReactNode;
	href: string;
};

export function Icon({ children, href }: Props) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-block text-black"
		>
			{children}
		</a>
	);
}
