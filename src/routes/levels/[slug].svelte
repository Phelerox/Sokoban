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
		all elements inside .game_container
	*/
 

	.game_container :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.game_container :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.game_container :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.game_container :global(ul) {
		line-height: 1.5;
	}

	.game_container :global(li) {
		margin: 0 0 0.5em 0;
	}
	.game_container {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-areas: "header header header"
    "left main right"
    "footer footer footer";
    grid-template-columns: 120px 4fr 1fr;
    grid-template-rows: 160px 1fr 80px;
  }
  :global(table) {
    border: 1px dashed #888;
  }

  .header {
    grid-area: header;
  }
  .left {
    grid-area: left;
  }
  :global(table){
    grid-area: main;
  }
  .right {
    grid-area: right;
  }
  .footer {
    grid-area: footer;
  }

</style>

<svelte:head>
	<title>{level.name}</title>
</svelte:head>

<h1>{level.name}</h1>

<div class='game_container'>
	<Sokoban {mapGrid}/>
	<button class="footer m-5 p-2 bg-black text-white">boop</button>
</div>