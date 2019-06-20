<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
    font-size: 2em;
    text-transform: capitalize;
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

	.batman {
		background-color: #d7d9f2;
	}

	.flash {
		background-color: #ffe8d4;
	}

	caption {
		padding: 8px;
		caption-side: bottom;
	}

	table {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
		border-collapse: collapse;
		border: 2px solid rgb(100, 100, 100);
		letter-spacing: 1px;
		font-family: sans-serif;
		font-size: .7rem;
	}

	td,
	th {
		border: 1px solid rgb(100, 100, 100);
		padding: 10px 10px;
	}

	td {
			text-align: center;
	}


	/* figure {
    border: thin #c0c0c0 solid;
    display: flex;
    flex-flow: column;
    padding: 5px;
    max-width: 220px;
    margin: auto;
}

img {
    max-width: 220px;
    max-height: 150px;
}

figcaption {
    background-color: #222;
    color: #fff;
    font: italic smaller sans-serif;
    padding: 3px;
    text-align: center;
} */
</style>

<svelte:head>
	<title>Sokoban</title>
</svelte:head>

<h1>Sokoban</h1>

<figure>
	<figcaption>Level 1</figcaption>
	<table>
    <caption>Moves: x</caption>
    <colgroup>
        <col>
        <col span="2" class="batman">
        <col span="2" class="flash" >
    </colgroup>
    <tr>
        <td> </td>
        <!-- <th scope="col">Batman</th>
        <th scope="col">Robin</th>
        <th scope="col">The Flash</th>
        <th scope="col">Kid Flash</th> -->
    </tr>
    <tr>
        <!-- <th scope="row"></th> -->
        <td>Smarts</td>
        <td>Dex, acrobat</td>
        <td>Super speed</td>
        <td>Super speed</td>
    </tr>
	</table>
</figure>
