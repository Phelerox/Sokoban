<script>

</script>

<style>
h1, p {
    text-align: center;
    margin: 0 auto;
}

h1 {
    font-size: 2em;
    text-transform: capitalize;
    font-weight: 700;
    margin: 0 0 0.5em 0;
}
details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: .5em .5em 0;
    margin-bottom: 1rem;
}
details[open] {
    padding: .5em;
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: .5em;
}

details[open] p {
    padding: 0px 1rem;
}

summary {
    font-weight: bold;
    margin: -.5em -.5em 0;
    padding: .5em;
}
</style>


<svelte:head>
	<title>Help</title>
</svelte:head>

<h1>Help</h1>

<details open><summary>Game Objective</summary>
<p>Push the crates to the marked spots.</p></details>
<details><summary>Controls</summary>
<span><small><strong>Movement:</strong></small><p>Arrow keys.</p></span></details>

