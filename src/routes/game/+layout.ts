import type { LayoutLoad } from './$types'

export const load = (async () => {
	return {
		nav: [
			{
				name: 'Start',
				href: '/game',
				icon: 'fa-gear',
				icon2: 'rpg-battle'
			},
			{
				name: 'Map',
				href: '/game/map',
				icon: 'fa-map',
				icon2: 'rpg-map1'
			},
			{
				name: 'Battle',
				href: '/game/battle',
				icon: 'fa-bar',
				icon2: 'rpg-items'
			},
			{
				name: 'Fighter',
				href: '/game/heroes',
				icon: 'fa-info',
				icon2: 'rpg-map1'
			},
			{
				name: 'Inventory',
				href: '/game/inventory',
				icon: 'fa-user',
				icon2: 'rpg-hero'
			},
			{
				name: 'Settingy',
				href: '/game/settings',
				icon: 'fa-book',
				icon2: 'rpg-settings'
			}
		]
	}
}) satisfies LayoutLoad
