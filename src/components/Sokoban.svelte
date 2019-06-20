<!-- <svelte:options immutable={true} /> -->
<!-- <svelte:component class=".container"  this={Sokoban} /> -->
<script>
export let mapGrid;
import { onMount } from 'svelte';
import { GridMixin } from 'structurae';

import hotkeys from 'hotkeys-js';



const directions = {left: {row: 0, column: -1}, down: {row: 1, column: 0}, right: {row: 0, column: 1}, up: {row: -1, column: 0}, };


const block = {key: 'B', image: ''};
const dot = {key: 'G', image: ''};
const wall = {key: 'W', image: ''};
const blank = {key: ' ', image: ''};
var player = {key: 'P', image: '', moves: 0, position: {row: 0, column: 0}, direction: directions.up, standingOn: blank.key};

const ArrayGrid = GridMixin(Array);
let grid = ArrayGrid.fromArrays(mapGrid);
$: gridAsArrays = grid.toArrays();
let dotPositions = [];
for (let row = 0;row < grid.rows; row++) {
  for (let column = 0; column < grid.columns; column++) {
    let tile = grid.get(row, column);
    if (tile === player.key) {
      player.position = {row: row, column: column};
    } else if (tile === dot.key) {
      dotPositions.push({row: row, column: column});
    }
  }
}


dotPositions.forEach((pos) => {
  grid.set(pos.row, pos.column, blank.key);
});

// $: canMoveUp = canMoveInDirection(directions.up, player.position);

function canMoveInDirection(relativeCoordinates, fromCoordinates) {
  console.log(fromCoordinates);
  const params = {fromCoordinates: fromCoordinates, relativeCoordinates: relativeCoordinates};
  params.targetCoordinates = {row: fromCoordinates.row + relativeCoordinates.row, column: fromCoordinates.column + relativeCoordinates.column};
  params.tileBeyondTarget = {row: params.targetCoordinates.row + relativeCoordinates.row, column: params.targetCoordinates.column + relativeCoordinates.column};
  console.log(params.targetCoordinates);
  if (params.targetCoordinates.row < 0 || params.targetCoordinates.column < 0) {
    return {canMove : false, ...params}
  } else if (params.targetCoordinates.row > grid.rows || params.targetCoordinates.column > grid.columns) {
    return {canMove : false, ...params}
  }
  params.targetTile = grid.get(params.targetCoordinates.row, params.targetCoordinates.column);
  params.tileBeyondTargetTile = grid.get(params.tileBeyondTarget.row, params.tileBeyondTarget.column);
  if (params.targetTile === blank.key) { //'G' handled by replacing with ' '
    return {canMove : true, ...params}
  } else if (params.targetTile === block.key && params.tileBeyondTargetTile === blank.key ) {
      return {canMove : true, ...params}
  } else {
    return {canMove : false, ...params}
  }
}

function TryMove(direction) {
  player.direction = direction;
  const result = canMoveInDirection(direction, player.position);
  if (result.canMove) {
    console.log("Move!")
    player.moves++;
    grid.set(player.position.row, player.position.column, player.standingOn);
    if (result.targetTile === block.key) {
      grid.set(result.tileBeyondTarget.row, result.tileBeyondTarget.column, block.key);
      result.targetTile = blank.key;
    }
    player.standingOn = result.targetTile;
    player.position = result.targetCoordinates
    grid.set(result.targetCoordinates.row, result.targetCoordinates.column, player.key);
    grid = grid; //tells Svelte grid changed, since set() hides this from Svelte. Svelte would however pick up grid[index] = player.key
  } else {
    console.log("Can't go in that direction!")
  }
}

function extraClassesFor(pos, cell) {
  if (dotPositions.some(function(dotPos) { 
      return dotPos.row === pos.row && dotPos.column === pos.column;
    })) {
    if (cell == 'B') {
      return "green-overlay"
    } else if (cell == ' ' || cell == 'P') {
      return "dot"
    }
  }
  return ""
}



onMount(async () => {
		const module = await import('hotkeys-js');
    hotkeys('left, right, up, down', { //this would break server-side rendering if outside of onMount, due to reliance on 'document'.
    }, function(event, handler){
      switch (handler.key) {
        /****************
        *   Arrow keys  *
        ****************/
        case 'left':
            TryMove(directions.left);
          break;
        case 'up':
            TryMove(directions.up);
          break;
        case 'right':
            TryMove(directions.right);
          break;
        case 'down':
            TryMove(directions.down);
          break;
        /****************
        * Other events  *
        ****************/
        }
      return false;
    });
	});


let tile_index = 0;
</script>

<style>

.dot {background-color: indianred}

.green-overlay {background-color: darkseagreen}

</style>


<!-- <svelte:window on:keyup|preventDefault={handleInput}/> -->
<table id="gameview">
{#each gridAsArrays as row, rowIndex}
  <tr>
	{#each row as cell, columnIndex}
    <td class="index-{tile_index++} row-{rowIndex} column-{columnIndex} {extraClassesFor({row: rowIndex, column: columnIndex}, cell)}">{cell}</td>
  {/each}
  </tr>
{:else}
  <tr>
	  <td>No mapGrid provided!</td>
  </tr>
{/each}
</table>

<!-- TODO: display correct image -->