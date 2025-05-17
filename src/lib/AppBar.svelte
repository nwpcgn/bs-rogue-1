<script lang="ts">
	let { data, children } = $props()
</script>

<nav
	class="bg-dark bg-gradient navbar navbar-expand sticky-top"
	data-bs-theme="dark">
	<div class="container-fluid">
		<a class="fw-bolder navbar-brand" href="#/">{data.name}</a>
		<button
			data-bs-toggle="collapse"
			class="navbar-toggler"
			data-bs-target="#navcol-1"
			><span class="visually-hidden">Toggle navigation</span>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navcol-1">
			<nav class="ms-auto navbar-nav">
				{#each data.nav as { name, href, icon }}
					<a class="nav-link" href="#{href}" aria-label={name}
						><svg class="nwp-icon">
							<use xlink:href="#{icon}"></use>
						</svg></a>
				{/each}
			</nav>
			{@render children?.()}
		</div>
	</div>
</nav>
