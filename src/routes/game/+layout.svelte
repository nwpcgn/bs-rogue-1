<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { LayoutData } from './$types'
	import { page } from '$app/state'
	let { data, children }: { data: LayoutData; children: Snippet } = $props()
	let current = $derived(page.url.hash.replace('#', ''))
</script>

{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}

<aside
	class="aside bg-body d-flex flex-column flex-shrink-0 shadow"
	style="width: 4.5rem; position: relative; overflow: hidden;">
	<nav class="nav nav-pills flex-column text-center nav-flush mb-auto">
		{#each data.nav as { name, href, icon }}
			<a
				class="nav-link py-3 border-bottom rounded-0"
				class:active={href === current}
				href="#{href}"
				aria-label={name}>{@render iconT(icon)}</a>
		{/each}
	</nav>
</aside>

<main class="main">
	{@render children?.()}
</main>
