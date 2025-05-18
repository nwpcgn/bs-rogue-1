<script lang="ts">
	import { Canvas } from 'svelte-canvas'
	import { game } from '../../lib/app.svelte.ts'
	import GridTile from './GridTile.svelte'
	import GridFighter from './GridFighter.svelte'
	const tileTypes = {
		'#': { color: '#f8f9fa', walkable: false },
		'.': { color: '#ecf0f1', walkable: true },
		D: { color: '#dee2e6', walkable: true }
	}
	let tileSize = $state(4)
</script>

<Canvas
	width={game.grid.config.width * tileSize}
	height={game.grid.config.height * tileSize}
	class="border bg-dark">
	{#each game.grid.map as row, y}
		{#each row as col, x}
			{#if col !== '#'}
				<GridTile color={tileTypes[col].color} {x} {y} {tileSize}></GridTile>
			{/if}
		{/each}
	{/each}
	<GridFighter
		col="@"
		color="red"
		x={game.grid.hero.x}
		y={game.grid.hero.y}
		{tileSize}></GridFighter>
</Canvas>
