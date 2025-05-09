/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		// Tailwind custom things.
	  },
	plugins: [
		require("@tailwindcss/typography"),
		require('daisyui'),
	],
 	  // daisyUI config (optional - here are the default values)
 	  daisyui: {
 		themes: [
 			{
 				light: {
 					"primary": "#3C9EEF",
 				},
 				dark: {
 					"primary": "#3C9EEF",
 				},
 			},
 		],
 		themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
 		darkTheme: "dark", // name of one of the included themes for dark mode
 		base: true, // applies background color and foreground color for root element by default
 		styled: true, // include daisyUI colors and design decisions for all components
 		utils: true, // adds responsive and modifier utility classes
 		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
 		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
 		themeRoot: ":root", // The element that receives theme color CSS variables
 	  },
 	  // Link Tailwind to daisyUI to use cross dark themes settings.
 	  darkMode: ['class', '[data-theme="dark"]']
}
