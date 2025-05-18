<script lang="ts">
	import { route } from '@mateothegreat/svelte5-router'
	let { href, children, className = 'btn btn-light' } = $props()
</script>

<a {href} use:route class={className}>{@render children?.()}</a>
