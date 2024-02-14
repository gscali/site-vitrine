import { join } from 'path'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			fontFamily: {
				mulish: ['Mulish', 'sans-serif'],
			},
			colors: {
				'blue-ocean':'#5184F2',
				'blue-linear':'#AFD4E2',
			}
		},
	},
	plugins: [...skeleton()],
}
