<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { LayoutData } from './$types'

	let { data, children }: { data: LayoutData; children: Snippet } = $props()
</script>

{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}

<aside
	class="aside bg-body d-flex flex-column flex-shrink-0 shadow"
	style="width: 4.5rem; position: relative; overflow: hidden;">
	<nav class="nav nav-pills flex-column text-center nav-flush mb-auto">
		{#each data.nav as { name, href, icon }}
			<button
				class="nav-link py-3 border-bottom rounded-0"
				data-href="#{href}"
				aria-label={name}>{@render iconT(icon)}</button>
		{/each}
	</nav>
</aside>

<main class="main">
	{@render children?.()}
</main>
