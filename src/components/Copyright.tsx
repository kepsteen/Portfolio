export function Copyright() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<p className="text-white font-mono">
			{`Copyright @ ${year}. All rights reserved.`}
		</p>
	);
}
