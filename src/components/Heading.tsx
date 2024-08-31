import TypewriterComponent from "typewriter-effect";

export function Heading() {
	return (
		<>
			<div className="font-mono font-bold text-2xl">
				<TypewriterComponent
					options={{
						strings: [
							"Cody.dev",
							"Cody.tsx",
							"Cody.ts",
							"Cody.css",
							"Cody.html",
							"Cody.sql",
						],
						deleteSpeed: 75,
						autoStart: true,
						loop: true,
					}}
				/>
			</div>
		</>
	);
}
