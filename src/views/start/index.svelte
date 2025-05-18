<script lang="ts">
	import { game } from '../../lib/app.svelte.ts'
	let { route } = $props()
</script>

<section class="nwp page">
	<div class="content">
		<h1 class="mb-3">{route.route.props?.title}</h1>
		<h4>{game.fighter.name}</h4>
	</div>
	<div class="flex-grow-1"></div>
</section>
