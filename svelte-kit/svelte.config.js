//import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';


import adapter from '@sveltejs/adapter-netlify';




/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess()],

	kit: {
		adapter: adapter(),
		vite: {
			// optimizeDeps: {
			// 	include: ['broadcast-channel']
			//   },
         
        }
	}
};
