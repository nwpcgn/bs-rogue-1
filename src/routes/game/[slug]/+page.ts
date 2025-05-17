import type { PageLoad } from './$types'

export const load = (async ({ params }) => {
	return {
		title: `Gaming - ${params.slug}`
	}
}) satisfies PageLoad
