<script lang="ts">
	import { Router, type RouteConfig } from '@mateothegreat/svelte5-router'
	import { Sprites, SideBar, nav } from './lib'
	const routes: RouteConfig[] = [
		{
			component: async () => import('./views/start/index.svelte'),
			props: { title: 'Nwp-Rguelike', nav }
		},
		{
			path: '/game',
			component: async () => import('./views/game/index.svelte'),
			props: { title: 'Game-Arena' }
		},
		{
			path: '/settings',
			component: async () => import('./views/settings/index.svelte'),
			props: { title: 'Settings' }
		}
	]
</script>

<div class="main-grid">
	<SideBar></SideBar>
	<main class="main"><Router {routes}></Router></main>
</div>
<Sprites></Sprites>
