<script lang="ts">
	import Link from './Link.svelte'
	import { game } from './app.svelte.ts'
	import { nav } from '.'
	let width = $state(game.grid.config.width)
	let height = $state(game.grid.config.height)
	let size = $state(game.grid.config.size)
	let type = $state(game.grid.config.type)
</script>

<aside class="aside border-end p-4">
	<div class="list-group list-group-flushx" style="width: 220px;">
		<div class="list-group-item list-group-item-primary h5 mb-0">Menu</div>
		{#each nav as { name, href, icon }}
			<Link {href} className="list-group-item">
				<div class="d-flex align-items-center justify-content-between gap-4">
					<div>{name}</div>
					{@render iconT(icon)}
				</div>
			</Link>
		{/each}
		<div class="list-group-item list-group-item-primary h5 mb-0">Map</div>
		<div class="list-group-item">
			<div class="d-flex align-items-center justify-content-between gap-4">
				<div>Width</div>
				<span>{width}</span>
			</div>
		</div>
		<div class="list-group-item">
			<div class="d-flex align-items-center justify-content-between gap-4">
				<div>Height</div>
				<span>{height}</span>
			</div>
		</div>
		<div class="list-group-item">
			<div class="d-flex align-items-center justify-content-between gap-4">
				<div>Size</div>
				<span>{size}</span>
			</div>
		</div>
		<div class="list-group-item">
			<div class="d-flex align-items-center justify-content-between gap-4">
				<div>Type</div>
				<span>{type}</span>
			</div>
		</div>
		<div class="list-group-item list-group-item-primary h5 mb-0">Player</div>
		<div class="list-group-item">
			<div class="d-flex align-items-center justify-content-between gap-4">
				<div>Name</div>
				<span>{game.fighter?.name}</span>
			</div>
		</div>
		<div class="list-group-item">
			<div class="d-flex align-items-center justify-content-between gap-4">
				<div>HP</div>
				<span>{game.fighter.hp} | {game.fighter.maxHp}</span>
			</div>
		</div>
		<div class="list-group-item">
			<div class="d-flex align-items-center justify-content-between gap-4">
				<div>Position</div>
				<span>{game.grid.hero.x} | {game.grid.hero.y}</span>
			</div>
		</div>
		<div class="list-group-item">
			<div class="d-flex align-items-center justify-content-between gap-4">
				<div>Inventory</div>
				<span>{game.inventory?.length}</span>
			</div>
		</div>
	</div>
	<hr class="my-0 d-none" />
</aside>

{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}
