import { preprocessMeltUI, sequence } from '@melt-ui/pp'
import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
const config = {
	preprocess: sequence([vitePreprocess(), mdsvex(), preprocessMeltUI()]),
	kit: {
		adapter: adapter(),
		router: {
			type: 'hash'
		}
	},
	extensions: ['.svelte', '.svx']
}
export default config
