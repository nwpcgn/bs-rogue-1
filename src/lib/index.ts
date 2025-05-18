// Reexport your entry components here
export { default as Sprites } from './icons/index.svelte'
export { default as SideBar } from './SideBar.svelte'
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
		name: 'Settings',
		href: '/settings',
		icon: 'nwp-options',
		hidden: false
	}
]
