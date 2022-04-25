<script>

</script>

<svelte:head>
	<title>Mikepeiman: Projects</title>
</svelte:head>

<div class="title flex flex-col items-center justify-center  p-6">
	<h1>Creative coding</h1>
	<p>... coming soon! (yes, there is more)</p>
</div>


<style lang="scss">
	/* .title {
		grid-area: title;
	} */
	.main {
		grid-area: main;
		display: grid;
		max-width: 100%;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		// :nth-child(4n + 2),
		// :nth-child(4n + 1) {
		// 	grid-column: 1 / span 1;
		// 	grid-row: 1 / span 1;
		// }
		a {
			align-self: flex-start;
		}
	}
	.pad {
		grid-area: pad;
	}
	h1 {
		font-size: 3rem;
		font-weight: 800;
	}
</style>
