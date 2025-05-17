<script lang="ts">
	import { frame, game } from '$lib/app.svelte.ts'
	import MiniMap from '$lib/game/MiniMap.svelte'
	import sleep from '$lib/utils/sleep.js'
	const genTypes = ['Uniform', 'Digger']
	let type = $state('Uniform')
	let tileSize = $state(40)
	let rows = $state(50)
	let cols = $state(50)
	let camW = $derived(Math.floor((frame.width * 0.98) / tileSize))
	let camH = $derived(Math.floor((frame.height * 0.98) / tileSize))
	let ready = $state(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		ready = false
		await sleep(111)
		game.init({ type, tileSize, rows, cols, camW, camH })
		await sleep(111)
		ready = true
	}
</script>

<section class="nwp page">
	<div class="grid-center container">
		<article class="p-4">
			{@render gridTable(game.map)}
		</article>
	</div>
	<hr />
	<div class="grid-center container flex-grow-1">
		<article class="d-flex flex-column gap-4 py-4">
			{#if ready}
				{@render miniMap(game.map)}
			{:else}
				{@render gridOptions()}
			{/if}
		</article>
	</div>
</section>

{#snippet gridOptions()}
	<div class="card">
		<div class="card-header">Map Settings</div>
		<div class="card-body">
			<div class="grid">
				<fieldset class="g-col-6 g-col-lg-3">
					<label class="form-label">Type</label>
					<select bind:value={type} class="form-select">
						<option selected>Select Map Generator</option>
						{#each genTypes as item}
							<option value={item}>{item}</option>
						{/each}
					</select>
				</fieldset>
				<fieldset class="g-col-6 g-col-lg-3">
					<label class="form-label">Tile size</label>
					<input type="number" bind:value={tileSize} class="form-control" />
				</fieldset>
				<fieldset class="g-col-6 g-col-lg-3">
					<label class="form-label">
						<span>Grid Width</span>
						<small>{cols * tileSize}px</small>
					</label>
					<input type="number" bind:value={cols} class="form-control" />
				</fieldset>
				<fieldset class="g-col-6 g-col-lg-3">
					<label class="form-label">
						<span>Grid Height</span> <small>{rows * tileSize}px</small>
					</label>
					<input type="number" bind:value={rows} class="form-control" />
				</fieldset>
			</div>
			<nav
				class="card-body d-flex align-items-center justify-content-center gap-1 mt-2">
				<button class="btn btn-primary" onclick={handleSubmit}
					>Create Map</button>
			</nav>
		</div>
	</div>
{/snippet}

{#snippet gridTable()}
	<div class="grid">
		<div class="g-col-6">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">width</th>
						<th scope="col">height</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Map</th>
						<td>{cols}</td>
						<td>{rows}</td>
					</tr>
					<tr>
						<th scope="row">Cam</th>
						<td>{camW}</td>
						<td>{camH}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="g-col-6">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Amount</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Rooms</th>
						<td>{game.rooms.length}</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row">Items / Enemys</th>
						<td>{game.items.length} / {game.enemys.length}</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<nav
		class="card-body d-flex align-items-center justify-content-center gap-1 mt-2">
		<button class="btn btn-primary" onclick={handleSubmit}>Generate</button>
		<button class="btn btn-outline-primary" onclick={() => (ready = false)}
			>Settings</button>
	</nav>
{/snippet}

{#snippet miniMap(map)}
	<div class="d-flex justify-content-center">
		<MiniMap {map} tileSize={14}></MiniMap>
	</div>
{/snippet}
