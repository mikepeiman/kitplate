import preprocess from 'svelte-preprocess';
import path from 'path'
import { normalizePath } from 'vite'
import vercel from '@sveltejs/adapter-vercel';
import Icons from 'unplugin-icons/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// root: normalizePath(path.resolve('./')),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: node(),
		// adapter: vercel(),
		files: {
			assets: 'static'
		},
		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@import "src/variables.scss";'
					}
				}
			},
			resolve: {
				alias: {
					'$components': path.resolve('./src/components'),
					'$utils': path.resolve('./src/utils'),
					'$lib': path.resolve('./src/lib'),
					'$api': path.resolve('./src/routes/api'),
					'$static': path.resolve('./static'),
				}
			},
			optimizeDeps: {
				exclude: ['@urql/svelte'],
				exclude: ['@k-vyn/coloralgorithm	'],
			},
			ssr: {
				noExternal: ['@urql/svelte'], // does this need the @ symbol?
				noExternal: ['@k-vyn/coloralgorithm'], // does this need the @ symbol?
			},
			plugins: [
				Icons({
					compiler: 'svelte',
				  }),
			],
		}
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@import "src/variables.scss";'
			}
		})
	]
};

export default config;
