<script>
</script>

<svelte:head>
	<title>Creative Coding</title>
</svelte:head>
<div class="main">
	<div class="title flex flex-col items-center p-6">
		<h1>Welcome to MetaBrain</h1>
		<p>An operating system for your mind</p>
	</div>
	<div class="posts py-10">
		<Posts {posts}/>
	</div>
</div>

<style>
	.main {
		grid-area: main;
		display: grid;
		height: auto;
		grid-template-columns: 60vw;
		grid-template-rows: 10rem auto;
		grid-template-areas:
			'title'
			'body';
	}
	.title {
		grid-area: title;
	}
	.posts {
		grid-area: body;
		height: auto;
	}
	.pad {
		grid-area: pad;
	}
	h1 {
		font-size: 3rem;
		font-weight: 800;
	}
</style>
