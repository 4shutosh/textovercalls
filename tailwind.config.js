/** @type {import('tailwindcss').Config} */
export default {
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				lato: "'Lato'",
			},
			colors: {
				colorSurface: "#FFFFFF",
				colorOnSurface: "#110f0f",
				colorSurfaceDark: "#110f0f",
				colorOnSurfaceDark: "#FFF6E0",
				textBody: "#3F3F3D",
				textBodyDark: "#B6B6B4",
				colorSecondary: "#f4eddb",
				colorSecondaryDark: "#1c1a19",
			},
		},
	},
	content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
	variants: {
		extend: {},
	},
	darkMode: false, // or 'media' or 'class'
};
