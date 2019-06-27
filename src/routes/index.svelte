<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	.green {
		background-color: #89c7a1;
	}

	.silver {
		background-color: #d7d9f2;
	}

	.yellow {
		background-color: #ffe8d4;
	}

	caption {
		padding: 8px;
		caption-side: bottom;
		font: italic smaller sans-serif;
	}

	table {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
		/* border-collapse: collapse;
		border: 2px solid rgb(100, 100, 100); */
		letter-spacing: 1px;
		font-family: sans-serif;
		font-size: 1rem;
	}

	td,
	th {
		border: 1px solid rgb(100, 100, 100);
		padding: 10px 10px;
	}

	td {
			text-align: center;
	}

	td a {
		color: rgb(11, 71, 68);
		font-weight: 500;
	}


	figure {
    border: thin #c0c0c0 solid;
    display: flex;
    flex-flow: column;
    padding: 5px;
    max-width: 300px;
    margin: auto;
}

img {
    max-width: 300px;
    max-height: 150px;
}

figcaption {
    background-color: #222;
    color: #fff;
		font: italic smaller sans-serif;
		font-size: 1rem;
    padding: 3px;
    text-align: center;
}
</style>

<svelte:head>
	<title>Sokoban</title>
</svelte:head>

<h1>Sokoban</h1>

<figure>
	<figcaption>Levels</figcaption>
	<table>
    <caption>What are you waiting for?</caption>
    <colgroup>
        <col class="green">
        <col class="silver">
        <col class="yellow" >
    </colgroup>
    <tr>
        <!-- <th scope="row"></th> -->
        <td><a href="levels/level-1">Level 1</a></td>
        <td><a href="levels/level-2">Level 2</a></td>
        <td><a href="levels/level-3">Level 3</a></td>
    </tr>
	</table>
</figure>
