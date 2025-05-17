<script lang="ts">
	import { frame, game } from '$lib/app.svelte.ts'
	import sleep from '$lib/utils/sleep.js'
	const genTypes = ['Uniform', 'Digger']
	let type = $state('Uniform')
	let tileSize = $state(40)
	let rows = $state(50)
	let cols = $state(50)
	let camW = $derived(Math.floor((frame.width * 0.98) / tileSize))
	let camH = $derived(Math.floor((frame.height * 0.98) / tileSize))
	let ready = $state(false)
</script>

<aside class="aside"></aside>
<main class="main">
	<section class="nwp page center text-bg-light">
		<div class="p-5 d-flex flex-column gap-1 text-center shadow">
			<h1 class="fw-bold">Roguelike</h1>
			<h4>Settings</h4>
			<nav>
				<a href="#/map" class="btn btn-primary btn-outline btn-lg">Start</a>
				<a href="#/game" class="btn btn-primary btn-outline btn-lg">Start</a>
			</nav>
		</div>
	</section>
</main>
