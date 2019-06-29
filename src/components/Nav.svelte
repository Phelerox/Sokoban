<script>
	export let segment;
</script>

<style>
	nav {
		/* border-bottom: 1px solid rgba(255,62,0,0.1); */
		font-weight: 300;
		padding: 0 1em;
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

	li, .pseudo-right > .hidden_right, .pseudo-left > .hidden_left  {
		display: block;
		float: left;
		padding: 0px;
		min-width: 1em;
		height: auto;
	}

	.hidden_right, .hidden_left {
		display: none;
	}

	.selected > a {
		position: relative;
		display: inline-block;
		/* backdrop-filter:  */
	}

	/* .selected > a::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(23, 138, 158);
		display: block;
		top: -1px;
	} */
	.after-selected, .pseudo-right > .hidden_right {
		/* box-shadow: 20px 0px 21px 14px rgba(170, 51, 51, 1.0) inset; */
		box-shadow: 0 8px 6px -6px rgba(170, 51, 51, 1.0) inset;

	}
	.before-selected, .pseudo-left > .hidden_left {
		/* box-shadow: -20px 0px 21px 14px rgba(170, 51, 51, 1.0) inset; */
	}
	.selected {
		/* backdrop-filter:  !important; */
		background-color: rgba(170, 51, 51, 1.0);
		/* opacity: 0.8; */
		/* color: rgba(204, 85, 119, 0.65); */
		/* outline: solid 2px rgba(170, 51, 51, 1.0); */
		border-top-right-radius: 9px;
		border-top-left-radius: 9px;
		/* border-top: 3px solid rgba(170, 51, 51, 0.0); */
		/* box-shadow: 0px 2px 0px rgba(170, 51, 51, 1.0); */
		/* box-shadow: 0px 36px 0px -30px #fff,
								-36px 0px 0px -30px #fff,
								0px -36px 0px -30px #fff,
								36px 0px 0px -30px #fff,
								0 0 0 2px #000; */
		box-shadow: 0px 34px 21px 14px rgba(rgba(168, 75, 75, 1.0)) inset;
		/* filter: drop-shadow(10px 10px 20px rgba(170, 51, 51, 1.0)); */
	}

	/* li {
		border-top-left-radius: 9px;
		border-bottom-left-radius: 9px;
		border-left: 6px solid rgba(170, 51, 51, 1.0);
	} */

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul class='{segment === "levels" ? "pseudo-right" : segment === undefined ? "pseudo-left" : ""}'>
		<div class="hidden_left"></div>
		<li class='{segment === undefined ? "selected" : segment === "help" ? "before-selected" : ""}'><a  href='.'>sokoban</a></li>
		<li class='{segment === "help" ? "selected" : segment === undefined ? "after-selected" : segment === "levels" ? "before-selected" : ""}'><a  href='help'>help</a></li>
		<!-- for the levels link, we're using rel=prefetch so that the levels data when we hover over the link or tap it on a touchscreen -->
		<li class='{segment === "levels" ? "selected" : segment === "help" ? "after-selected" : ""}'><a rel=prefetch href='levels'>levels</a></li>
		<div class="hidden_right"><div></div></div>
	</ul>
</nav>