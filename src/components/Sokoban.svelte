<!-- <svelte:options immutable={true} /> -->
<!-- <svelte:component class=".container"  this={Sokoban} /> -->
<script>
export let mapGrid;
export let level;
import { onMount } from 'svelte';
import { quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';
import { flip } from 'svelte/animate';

import { GridMixin } from 'structurae';

import hotkeys from 'hotkeys-js';

const directions = {left: {row: 0, column: -1, str: 'left'}, down: {row: 1, column: 0, str: 'down'}, right: {row: 0, column: 1, str: 'right'}, up: {row: -1, column: 0, str: 'up'}};

function getRandomImageIndex(tileKey) {
  const max = {C: 6, W: 4, ' ': 3, P: 5};
  const min = {C: 2, W: 1, ' ': 1, P: 0};
  const random = Math.max(Math.floor(Math.random() * Math.floor(max[tileKey])), min[tileKey]);
  return tileKey === 'P' ? random : ('0' + random).slice(-2);
}

const imageBasePath = "sokoban/images/";
const crate = {key: 'C', imagePrefix: 'Crates/crate_', imageIndex: getRandomImageIndex('C'), imageSuffix: '.png'};
const wall = {key: 'W', imagePrefix: 'Blocks/block_', imageIndex: getRandomImageIndex('W'), imageSuffix: '.png'};
const blank = {key: ' ', imagePrefix: 'Ground/ground_', imageIndex: getRandomImageIndex(' '), imageSuffix: '.png'};
const goal = {key: 'G', imagePrefix: 'Ground/ground_', imageIndex: blank.imageIndex, imageSuffix: '_goal.png'};
const player = {key: 'P', get imagePrefix() { return 'Player/' + this.direction.str + '/' }, imageIndex: 0, maxImageIndex: 5, imageSuffix: '.png',
                get image() { return imageBasePath + this.imagePrefix + (this.moves % this.maxImageIndex) + this.imageSuffix;},
                moves: 0, position: {row: 0, column: 0}, direction: directions.down, standingOn: blank};

const tileTypeDict = {};
tileTypeDict['C'] = crate;
tileTypeDict['G'] = goal;
tileTypeDict['W'] = wall;
tileTypeDict[' '] = blank;
Object.values(tileTypeDict).forEach(tileType => {
  tileType.image = imageBasePath + tileType.imagePrefix + tileType.imageIndex + tileType.imageSuffix;
})
tileTypeDict['P'] = player;

let goalTiles = [];
let map = [];
let rowIndex = 0;
let columns = 0;
let i = 0;
mapGrid.forEach(row => {
  let newRow = [];
  let column = 0;
  row.forEach(cell => {
    const movableEntityTypes = "PC";
    const cellKey = cell === 'B' ? 'C' : cell; //Block is a confusing name for the crates, so I'm translating the 'B' from the suggested map format of this exercise into a 'C'.
    const movableEntity = (! movableEntityTypes.includes(cellKey)) ? null : {
      key: cellKey,
      initialLocationIndex: i,
      initialPos: {row: rowIndex, column: column},
    };
    const fixedTile = { //fixed location on the grid
      gridLocation: i,
      initialKey: (! movableEntityTypes.includes(cellKey)) ? cellKey : blank.key,
      entity: movableEntity,
      moveEntityTo(destTile) {
        if (destTile.entity) {
          alert(`Warning! Entity of ${destTile} replaced by entity of ${this}.`);
        }
        destTile.entity = this.entity;
        this.entity = null;
        if (this.key === player.key) {
          player.tile = this;
        }
        },
      get id() { return this.entity ? this.entity.initialLocationIndex : -this.gridLocation },
      get key() { return this.entity ? this.entity.key : this.initialKey },
      floorKey: blank.key, index: i, position: {row: rowIndex, column: column},
      get image() {
        return this.isTraversable ? "" : tileTypeDict[this.key].image;
      },
      get backgroundImage() {
        return this.isTraversable ? tileTypeDict[this.key].image : tileTypeDict[this.floorKey].image;
      },
      get isTraversable() { return this.key === ' ' || this.key === 'G'},
      get hasCrate() { return this.key === 'C' && this.floorKey === 'G'},
    }
    if (cellKey === player.key) {
      player.position = fixedTile.position;
      player.standingOn = fixedTile;
    }
    if (cellKey === 'G') {
      fixedTile.floorKey = 'G'; //used for the css background-image of the tile. Now we can see the goal tile below the crate.
      goalTiles.push(fixedTile);
    }
    newRow.push(fixedTile);
    i++;
    column++;
    columns = Math.max(column, columns);
  })
  rowIndex++;
  map.push(newRow);
})

const ArrayGrid = GridMixin(Array);
let grid = ArrayGrid.fromArrays(map); //Won't make a copy of the values, so changing things in grid will update map
const tileArray = map.flat();
$: levelComplete = goalTiles.every(goalTile => goalTile.hasCrate);

$: if(levelComplete) {
  alert("Level Complete!");
  console.log("Level Complete!");
}

// $: canMoveUp = canMoveInDirection(directions.up, player.position);

function canMoveInDirection(relativeCoordinates, fromCoordinates) {
  const params = {fromCoordinates: fromCoordinates, relativeCoordinates: relativeCoordinates};
  params.targetCoordinates = {row: fromCoordinates.row + relativeCoordinates.row, column: fromCoordinates.column + relativeCoordinates.column};
  params.beyondTargetCoordinates = {row: params.targetCoordinates.row + relativeCoordinates.row, column: params.targetCoordinates.column + relativeCoordinates.column};
  if (params.targetCoordinates.row < 0 || params.targetCoordinates.column < 0) {
    return {canMove : false, ...params}
  } else if (params.targetCoordinates.row > grid.rows || params.targetCoordinates.column > grid.columns) {
    return {canMove : false, ...params}
  }
  params.targetTile = grid.get(params.targetCoordinates.row, params.targetCoordinates.column);
  params.beyondTargetTile = grid.get(params.beyondTargetCoordinates.row, params.beyondTargetCoordinates.column);
  if (params.targetTile.isTraversable) {
    return {canMove : true, ...params}
  } else if (params.targetTile.key === crate.key && params.beyondTargetTile.isTraversable ) {
      return {canMove : true, ...params}
  } else {
    return {canMove : false, ...params}
  }
}
const setPlayerReady = function() {
  playerReady = true;
}
function TryMove(direction) {
  if (playerReady) {
    if (player.direction != direction) {
      player.direction = direction;
      player.moves++;
      return;
    }
    const result = canMoveInDirection(direction, player.position);
    if (result.canMove) {
      // console.log("Moving!")
      player.moves++;
      playerReady = false;
      let animationWait = setTimeout(setPlayerReady, 250);
      // grid.get(player.position.row, player.position.column).key = player.standingOn.floorKey;
      if (result.targetTile.key === crate.key) {
        const reachedGoalTile = result.beyondTargetTile.key === goal.key;
        result.targetTile.moveEntityTo(result.beyondTargetTile);
        if (reachedGoalTile) {
          goalTiles = goalTiles;
          console.log(goalTiles);
        }
      }
      player.standingOn.moveEntityTo(result.targetTile);
      player.standingOn = result.targetTile;
      player.position = result.targetCoordinates;
      map = map; //tells Svelte the map grid changed, since set() hides this from Svelte. Svelte would however pick up grid[index] = player.key
    } else {
      playerReady = false;
      let animationWait = setTimeout(setPlayerReady, 250);
      console.log("Can't go in that direction!")
    }
    player.tile = player.tile;
  } else {
    console.log("Busy with animation!");
  }
}

function extraClassesFor(cell) {
  if (goalTiles.some(function(goalPos) {
      return goalPos.position.row === cell.position.row && goalPos.position.column === cell.position.column;
    })) {
      return "goal"
  }
  return ""
}

function extraStylesFor(cell) {
  if (cell.floorKey === goal.key && cell.key != player.key) {
    // return "background-size: 100%; background-image: url(" + tileTypeDict[cell.floorKey].image + ");";
  }
  return "";
}
let playerMoving = false;
let playerReady = true;
// $: playerReady = !playerMoving && !levelComplete;
// $: if (hotkeys && playerReady != null) {
//         hotkeys.setScope(playerReady ? "ready" : "waiting");
//       }

// $: if(hotkeys && (hotkeysScope || true) { //trying to get Svelte to run the code in here whenever hotkeysScope changes, but not before hotkeys is defined.
//     hotkeys.deleteScope("waiting");
//     hotkeys.deleteScope("ready");
//     hotkeys.setScope(hotkeysScope);
// }

const backgroundSubareas = [];

const calculateGoalOffsets = function(onresize) {
  for(let i=0;i<backgroundSubareas.length;i++) {
      const {location, overlay} = backgroundSubareas[i];
      overlay.style.setProperty("--offset-left", location.offsetLeft + "px")
      overlay.style.setProperty("--offset-top", location.offsetTop + "px");
    }
}

onMount(async () => {
  const goalBackgroundElement = document.createElement("div");
  const goalBackgroundImage = document.createElement("img");
  goalBackgroundImage.src = tileTypeDict[goal.key].image;
  goalBackgroundElement.appendChild(goalBackgroundImage);
  goalBackgroundElement.classList.add("background-subarea");
  const goalElements = document.getElementsByClassName("goal");
  for(let i=0; i<goalElements.length; i++) {
    const goalElem = goalElements[i];
    let newElem = goalBackgroundElement;
    if (i < goalElements.length - 1) {
      newElem = goalBackgroundElement.cloneNode(true);
    }
    newElem.style.setProperty("--offset-left", goalElem.offsetLeft + "px");
    newElem.style.setProperty("--offset-top", goalElem.offsetTop + "px");
    goalElem.parentElement.insertBefore(newElem, goalElem);
    newElem.style.setProperty("left", "var(--offset-left)");
    newElem.style.setProperty("top", "var(--offset-top)");
    backgroundSubareas.push({location: goalElem, overlay: newElem});
  }
  window.onresize = calculateGoalOffsets;
  const module = await import('hotkeys-js');
  hotkeys('left, right, up, down',  //this would break server-side rendering if outside of onMount, due to reliance on 'document'.
  'ready', function(event, handler) {
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
  hotkeys.setScope('ready');
});


function whizz(node, { from, to }, params) {
  const dx = from.left - to.left;
  const dy = from.top - to.top;

  const d = Math.sqrt(dx * dx + dy * dy);

  const rotation = Math.abs(dy) > 14 ? 0 : dx < 0 ? 360 : -360;

  return {
    delay: 0,
    duration: Math.sqrt(d) * 120,
    easing: params.easing || quintOut,
    css: (t, u) =>
      `transform: translate(${u * dx}px, ${u * dy}px) rotate(${t*rotation}deg);`
  };
}

const animations = function() {
  const tiles = new Map(); //this is just to practice using Closures.
  const closureBreakout = {};
  closureBreakout.starting = function(tile) {
    tiles.set(tile.id, true);
    playerMoving = tile.key === player.key || playerMoving;
  };
  closureBreakout.ending = function(tile) {
    tiles.delete(tile.id);
    if (tile.key === player.key) {
      if (!playerMoving) {
        console.log("Player animation ended but we thought that they were already done with the animation.")
      }
      playerMoving = false;
    }
  }
  closureBreakout.canceled = function(tile) {
    tiles.set(tile.id, false);
    if (tile.key === player.key) {
      if (!playerMoving) {
        console.log("Player animation canceled but we thought that they were already done with the animation.")
      }
      playerMoving = false;
    }
  }
  return closureBreakout;
}(); //Don't miss the ();


</script>

<style>

* {
  box-sizing: border-box;
}

#sokoban {
  margin: 0 auto;
  padding: 0;
  max-width: 100%;
}

:global(.background-subarea) {
  /* display: block */
  position: absolute;
  /* max-height: attr(height);
  max-width: attr(width); */
  height: var(--tile-height);
  width: var(--tile-width);
  z-index: 0;
  /*transform: none; it took me way too long to get this idea. */
  /*CSS transitions*/
  transition-property: none !important;
  /*CSS transforms*/
  transform: none !important;
  /*CSS animations*/
  animation: none !important;
  /*flex-item:*/
  /* background-image: var(--goal-background); */
  /* background-size: auto 100%; */
  /* background-size: var(--tile-height) var(--tile-width) */
  }
  :global(.background-subarea > img) {
    object-fit: contain;
  }

.flex-container {
  padding: 0;
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  width: var(--width);
  /* height: var(--height); */
  /* line-height:30px; */
}
div.flex-item > img {
  /* position: absolute; */
  object-fit: cover;
}
div.flex-item {
    margin: 0px;
    text-align: center;
    /* flex: 0 1 auto; */
    flex: 0 0 var(--tile-width);
    width: var(--tile-width);
    height: var(--tile-width);
    z-index: 2;
}
/* div.flex-item:before {
    content:'';
    float:left;
    padding-top: var(--ratio);
} */
#gameView {
  z-index: 0;
  background-repeat: repeat;
  background-size: var(--tile-width);
  background-image: var(--floor-background);
}

</style>

<!-- <svelte:window on:keyup|preventDefault={handleInput}/> -->
<figure id="sokoban" style="
  --columns: {columns};
  --rows: {rowIndex};
  --ratio: calc(var(--columns) / var(--rows));
  --width: calc(100vmin - 0em);
  --tile-width: calc(var(--width) / var(--columns));
  --goal-background: url(/{tileTypeDict[goal.key].image});
  --floor-background: url(/{tileTypeDict[blank.key].image});
  ">
<div id="gameView" class="flex-container">
<!-- ☞ 83a0fe03-58ac-465b-a847-eee93bedb6a0 -->
<!-- {#each {length: highest_tile_index} as tile, i} -->
  <!-- <div class="flex-container" > -->
{#each tileArray as tile (tile.id)}
<div class="flex-item {extraClassesFor(tile)}" animate:whizz="{{duration: 150, easing: quintOut}}"
  on:animationstart={animations.starting(tile)} on:animationend={animations.ending(tile)} on:animationcancel={animations.canceled(tile)}>
  <!-- bind:clientWidth={tileWidth} bind:clientHeight={tileHeight} -->
  {#if tile.image && tile.key === player.key}
    <img src="{player.image}" style={extraStylesFor(tile)} alt="{tile.key}"
      id="player" class="id-{tile.id} tile-index-{tile.index} row-{tile.position.row} column-{tile.position.column}" />
  {:else if tile.image}
    <img src="{tile.image}" style={extraStylesFor(tile)} alt="{tile.key}"
      class="id-{tile.id} tile-index-{tile.index} row-{tile.position.row} column-{tile.position.column}" />
  {/if}
</div>
{:else}
  <div class="flex-container">
	  <p class="flex-item">No mapGrid provided!</p>
  </div>
{/each}
</div>
<figcaption class="text-center mx-auto">{@html `Moves: ${player.moves}`}</figcaption>
</figure>

<!-- TODO: display correct image -->