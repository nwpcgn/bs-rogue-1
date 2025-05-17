<script>
	import { Layer } from 'svelte-canvas'
	const atlas = {
		'#': {
			name: 'wall',
			color: null
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
		},
		'@': {
			name: 'player',
			color: '#2980b9'
		}
	}
	let { x, y, col, tileSize } = $props()
	let style = $derived(atlas[col]?.color)
	const render = ({ context }) => {
		context.fillStyle = style
		context.fillRect(x * tileSize, y * tileSize, tileSize, tileSize, style)
	}
</script>

<Layer {render} />
