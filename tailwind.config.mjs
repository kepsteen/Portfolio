import defaultTheme from "tailwindcss/defaultTheme";
import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		flowbite.content(),
	],
	theme: {
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				whiteblue: "#F5F8F8",
				aqua: "#2FB27F",
				blue: "#2FA4B2",
				green: "#34D544",
				darkgreen: "#052411",
			},
			fontFamily: {
				mono: ["Roboto Mono Variable", ...defaultTheme.fontFamily.mono],
			},
			boxShadow: {
				blur: "0px 0px 0px 10px rgba(47,178,127,1)",
				"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			},
			animation: {
				wave: "wave 5s ease-in-out infinite",
			},
			keyframes: {
				wave: {
					"0%": { transform: "rotate( 0.0deg)" },
					"10%": { transform: "rotate(14.0deg)" },
					"20%": { transform: "rotate(-20.0deg)" },
					"30%": { transform: "rotate(14.0deg)" },
					"40%": { transform: "rotate(-4.0deg)" },
					"50%": { transform: "rotate(10.0deg)" },
					"60%": { transform: "rotate( 0.0deg)" },
					"100%": { transform: "rotate( 0.0deg)" },
				},
			},
		},
	},
	plugins: [flowbite.plugin()],
};
