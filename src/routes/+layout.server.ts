import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: LayoutServerLoad = async () => {

    if (env.APP_MODE === 'maintenance') {
        return {maintenance: true}
    }

    else if (env.APP_MODE === 'staging' || env.APP_MODE === 'production' || env.APP_MODE === 'development') {
        return { maintenance: false }
    }

    throw new Error('Invalid app mode!');

};