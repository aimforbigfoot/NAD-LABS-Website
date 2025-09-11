import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 8080
	},
	preview: {
		host: true,
		port: 8080,
		allowedHosts: ['nadlabs.xyz', 'www.nadlabs.xyz', 'localhost']
	}
});
