import { env } from '$env/dynamic/private';
import type { Handle } from '@sveltejs/kit';
import type { ActionResult } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    if (env.APP_MODE !== 'maintenance') return resolve(event);

    // Non-GET requests should not pass through.
    if (event.request.method !== 'GET') {
        const error = { status: 503, statusText: 'Maintenance mode.' };
        const actionResult: ActionResult = { type: 'error', error };
        return new Response(JSON.stringify(actionResult), {
            ...error,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // For GET requests, +layout.svelte will show a friendly error,
    // so we should render the response and make sure that maintenance
    // mode is respected there as well.
    const response = await resolve(event);

    // Replace appropriate parts of the response with 503.
    return new Response(response.body, {
        headers: response.headers,
        status: 503,
        statusText: 'Maintenance mode'
    });
};