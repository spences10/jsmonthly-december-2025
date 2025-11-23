import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'

// Disable browser caching in dev mode
function no_cache_plugin(): Plugin {
	return {
		name: 'no-cache',
		configureServer(server) {
			server.middlewares.use((_req, res, next) => {
				res.setHeader(
					'Cache-Control',
					'no-store, no-cache, must-revalidate',
				)
				res.setHeader('Pragma', 'no-cache')
				res.setHeader('Expires', '0')
				next()
			})
		},
	}
}

export default defineConfig({
	plugins: [no_cache_plugin(), tailwindcss(), sveltekit()],
})
