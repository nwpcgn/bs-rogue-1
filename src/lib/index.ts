// Reexport your entry components here
export { default as Sprites } from './icons/index.svelte'

export const nav = [
	{
		name: 'Start',
		href: '/',
		icon: 'nwp-start',
		hidden: false
	},
	{
		name: 'Game',
		href: '/game',
		icon: 'nwp-game',
		hidden: false
	},
	{
		name: 'Map',
		href: '/game/map',
		icon: 'nwp-map-1',
		hidden: false
	},
	{
		name: 'Battle',
		href: '/game/battle',
		icon: 'nwp-grid',
		hidden: false
	},
	{
		name: 'Items',
		href: '/game/items',
		icon: 'nwp-dice',
		hidden: false
	},
	{
		name: 'Settings',
		href: '/settings',
		icon: 'nwp-options',
		hidden: false
	}
]
