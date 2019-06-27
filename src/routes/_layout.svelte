<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		/* position: relative; */
		/* max-width: 56em; */
		width: 100%;
		/* background-color: white; */
		/* padding-left: 3em; */
		/* padding-right: 3em; */
		/* margin: 0 auto; */
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>