<script lang="ts">
	import GridMap from './GridMap.svelte'
	import { game } from '../../lib/app.svelte.ts'
	import GridMiniMap from './GridMiniMap.svelte'
	let { route } = $props()
	let items = $state(game.grid.items)
	let enemys = $state(game.grid.enemys)
</script>

<section class="nwp page">
	<div class="content">
		<h2 class="text-center">{route.route.props?.title}</h2>
	</div>
	<div class="flex-grow-1 grid-center">
		<GridMap></GridMap>
	</div>
</section>
<div class="mini-map"><GridMiniMap></GridMiniMap></div>

<style>
	.mini-map {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
