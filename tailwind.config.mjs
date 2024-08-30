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
			},
			fontFamily: {
				mono: ["Roboto Mono Variable", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [flowbite.plugin()],
};
