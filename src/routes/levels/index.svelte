<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`levels.json`).then(r => r.json()).then(levels => {
			return { levels };
		});
	}
</script>

<script>
	export let levels;
</script>

<style>
	ul {
		margin: 0 auto;
		line-height: 1.5;
	}
	ul > * {
		width: auto;
		text-align: center;
	}
	article {
		margin: 0 auto;
	}
</style>

<svelte:head>
	<title>levels</title>
</svelte:head>

<h1>Levels</h1>

<article>
<ul>
	{#each levels as level}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='levels/{level.slug}'>{level.title}</a></li>
	{/each}
</ul>
</article>