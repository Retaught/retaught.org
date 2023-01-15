import './bootstrap';
import '../css/app.css';
// @ts-ignore
import { createInertiaApp } from '@inertiajs/inertia-svelte'

createInertiaApp({
	resolve: async name => {
		let match
		let page
		const comps = import.meta.glob('./Pages/**/*.svelte');
		match = comps[`./Pages/${name}.svelte`];
		if (match == undefined) {
			// @ts-ignore
            return import('./Errors/404page.svelte');
		}
		page = (await match());

        return page
	},
	setup({ el, App, props }) {
		new App({ target: el, props })
	},
})
