import type { LayoutLoad } from './$types'
import { nav } from '$lib'
export const load = (async () => {
	return {
		name: 'Nwp-Studio',
		nav
	}
}) satisfies LayoutLoad
