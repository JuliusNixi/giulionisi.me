/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  typography: {
			DEFAULT: {
			  css: {
				'.title-gradient': {
					background: '#009FFF',  /* fallback for old browsers */
					background: '-webkit-linear-gradient(to left, #ec2F4B, #009FFF)',  /* Chrome 10-25, Safari 5.1-6 */
					background: 'linear-gradient(to left, #ec2F4B, #009FFF)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
					'-webkit-background-clip': 'text', /* Usa il background clip per il testo */
					'background-clip': 'text',
					color: 'transparent',
				},
			  },
			},
		  },
		},
	  },
	plugins: [
		require("@tailwindcss/typography"),
		require('daisyui'),
	],
	  // daisyUI config (optional - here are the default values)
	  daisyui: {
		themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	  },
}
