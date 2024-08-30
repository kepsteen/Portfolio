import { Tooltip } from "flowbite-react";

export function Stack() {
	return (
		<>
			<p className="text-center">
				<span className="border-b-2 border-b-aqua p-2 text-2xl font-mono">
					Tech Stack
				</span>
			</p>
			<div className="mt-6 flex justify-center gap-1">
				<Tooltip
					content="React"
					placement="bottom"
					trigger="hover"
					style="light"
				>
					<img src="https://skillicons.dev/icons?i=react" alt="React icon" />
				</Tooltip>
				<Tooltip
					content="Next.js"
					placement="bottom"
					trigger="hover"
					style="light"
				>
					<img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js icon" />
				</Tooltip>
				<Tooltip
					content="TypeScript"
					placement="bottom"
					trigger="hover"
					style="light"
				>
					<img
						src="https://skillicons.dev/icons?i=typescript"
						alt="TypeScript icon"
					/>
				</Tooltip>
				<Tooltip
					content="Node"
					placement="bottom"
					trigger="hover"
					style="light"
				>
					<img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js icon" />
				</Tooltip>
				<Tooltip
					content="Express"
					placement="bottom"
					trigger="hover"
					style="light"
				>
					<img
						src="https://skillicons.dev/icons?i=express"
						alt="Express icon"
					/>
				</Tooltip>
				<Tooltip
					content="PostgreSQL"
					placement="bottom"
					trigger="hover"
					style="light"
				>
					<img
						src="https://skillicons.dev/icons?i=postgresql"
						alt="PostgreSQL icon"
					/>
				</Tooltip>
			</div>
		</>
	);
}
