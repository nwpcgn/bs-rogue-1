<script lang="ts">
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()
</script>

<section class="nwp page">
	<section class="page-area shadow">
		<h1 class="display-2 mb-4 text-capitalize">{data.title}</h1>
		<a class="btn btn-dark btn-lg" href="#/game">Start Game</a>
	</section>
</section>
