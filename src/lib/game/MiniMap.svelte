<script lang="ts">
	import { game } from '$lib/app.svelte.ts'
	import { Canvas } from 'svelte-canvas'
	import Tile from './Tile.svelte'
	let { map, tileSize } = $props()
	let mSize = $state(8)
	let width = $derived(tileSize * game.config.cols)
	let height = $derived(tileSize * game.config.rows)
	const atlas = {
		'#': {
			name: 'wall',
			color: 'transparent'
		},
		'.': {
			name: 'floor',
			color: '#cbd5e1'
		},
		D: {
			name: 'door',
			color: '#94a3b8'
		},
		$: {
			name: 'loot',
			color: '#dc2626'
		},
		'€': {
			name: 'monster',
			color: '#991b1b'
		}
	}
</script>

<Canvas class="border" {width} {height}>
	{#each map as row, y}
		{#each row as col, x}
			{#if col !== '#'}
				<Tile {col} {x} {y} {tileSize} />
			{/if}
		{/each}
	{/each}
</Canvas>

<!-- <div class="dungeon-grid" style="--cols: {game.config.cols};">
	{#each map as row, y}
		{#each row as col, x}
			<div style="background-color: {atlas[col]};">
				<span class="sr-only">{col}</span>
			</div>
		{/each}
	{/each}
</div>

<style>
	.dungeon-grid {
		--cols: 50;
		--size: 10px;
		display: inline-grid;
		grid-template-columns: repeat(var(--cols), minmax(0, var(--size)));
	}
</style> -->
