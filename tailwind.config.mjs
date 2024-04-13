/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            colors: {
                "web-primary": "#ffdd33",
                "web-primary-content": "#332a00",
                "web-primary-dark": "#ffd500",
                "web-primary-light": "#ffe666",

                "web-secondary": "#3355ff",
                "web-secondary-content": "#ffffff",
                "web-secondary-dark": "#002aff",
                "web-secondary-light": "#667fff",

                "web-background": "#f2f1ed",
                "web-foreground": "#fcfcfb",
                "web-border": "#e4e2da",

                "web-copy": "#2c2a21",
                "web-copy-light": "#757057",
                "web-copy-lighter": "#9d987b",

                "web-success": "#33ff33",
                "web-warning": "#ffff33",
                "web-error": "#ff3333",

                "web-success-content": "#003300",
                "web-warning-content": "#333300",
                "web-error-content": "#ffffff"
            },},} ,
	plugins: [],
}
