<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		background: rgb(106, 89, 121);
		background: -webkit-linear-gradient(to right, #5B86E5, rgb(106, 89, 121));
		background: linear-gradient(to right, #5B86E5, rgb(106, 89, 121));
		margin-bottom: 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>sokoban</a></li>
		<li><a class='{segment === "help" ? "selected" : ""}' href='help'>help</a></li>

		<!-- for the levels link, we're using rel=prefetch so that
		     the levels data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class='{segment === "levels" ? "selected" : ""}' href='levels'>levels</a></li>
	</ul>
</nav>