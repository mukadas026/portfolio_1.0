/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				main: "#152238",
				sec: "#66D7EB",
			},
			backgroundImage: {
				img1: "url('/src/assets/me1.jpg')",
			},
			animation: {
				wave: "wave 2s linear infinite",
				"fade-in": "fade-in 1s linear forwards",
				'fade-out': 'fade-out 1s linear forwards'
			},
			keyframes: {
				wave: {
					"50%": { transform: "rotate(10deg)" },
					"100%": { transform: "rotate(0)" },
				},
				"fade-in": {
					"100%": {
						backgroundColor: "#66D7EB",
					},
				},
				"fade-out": {
					"100%": {
						backgroundColor: "rgba(0, 0, 0, 0)",
					},
				},
			},
		},
	},
	plugins: [],
}
