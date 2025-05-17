<script lang="ts">
	import '../assets/bs.css'
	import '../assets/scss/index.scss'
	import { onMount } from 'svelte'
	import { frame } from '../lib/app.svelte.ts'
	import { Sprites } from '$lib'
	import AppBar from '$lib/AppBar.svelte'

	let w = $state()
	let h = $state()

	let { data, children } = $props()

	onMount(async () => await import('bootstrap'))

	$effect(() => {
		if (w || h) {
			frame.width = w
			frame.height = h
		}
	})
</script>

<AppBar {data}></AppBar>

<main class="main-grid" bind:clientWidth={w} bind:clientHeight={h}>
	{@render children()}
</main>

<Sprites></Sprites>
