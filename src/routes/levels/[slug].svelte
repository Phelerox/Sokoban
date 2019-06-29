<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].html
		const res = await this.fetch(`levels/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { level: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Sokoban from '../../components/Sokoban.svelte';
	export let level;
	const mapGrid = level.mapGrid;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{level.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside
	*/

	
	.game_container {
    display: grid;
		/* width: 80vmin;
		height: 80vmin; */
		/* margin-top: -16px; */
    grid-template-areas: "header header header"
    "main main main"
    "footer footer footer";
    grid-template-columns: 0px auto 0px;
    grid-template-rows:0em auto 5em;
  }

  .header {
    grid-area: header;
  }
  :global(#sokoban){
    grid-area: main;
  }
  .footer {
    grid-area: footer;
  }

	h3 {
		margin: 0.5em auto;
		/* padding-bottom: 0.8em; */
	}

</style>

<svelte:head>
	<!-- <title>{level.name}</title> -->
</svelte:head>

<div class='game_container mx-auto'>
	<!-- <h3 class="header">{level.name}</h3> -->
	<Sokoban {level} {mapGrid}/>
	{#if level.next != undefined}
		<div class="footer my-5 mx-auto"><a rel="prefetch" href="levels/{level.next}"><button class="p-2 button">Next Level</button></a></div>
	{/if}
</div>