const humanizeString = require('humanize-string');

/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
const Tiles = {
    Wall: "tile tile-wall",
    Space: "tile tile-space",
    Goal: "tile tile-goal"
};

/*   Enum of CSS Classes for the moving elements   */
const Entities = {
    Character: "entity entity-player",
    Block: "entity entity-block",
    BlockDone: "entity entity-block-goal"
};

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
const levels = [
	{
    slug: 'level-1',
    theme: '1',
    width: 19,
    height: 16,
    mapGrid: [ //Why was this an array of arrays of 1-length arrays containing the string? The innermost array seems very superflous so I'm removing it.
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'W', 'B', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'W', 'W', 'W', ' ', ' ', 'B', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'W', ' ', ' ', 'B', ' ', 'B', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['W', 'W', 'W', ' ', 'W', ' ', 'W', 'W', ' ', 'W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', ' ', ' ', ' ', 'W', ' ', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', 'G', 'G', 'W'],
    ['W', ' ', ' ', ' ', ' ', 'B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', 'W'],
    ['W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', 'B', 'W', 'P', 'W', 'W', ' ', ' ', 'G', 'G', 'W'],
    [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ]
},
{
    slug: 'level-2',
    theme: '2',
    width: 19,
    height: 16,
    mapGrid: [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'W', 'B', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'W', 'W', 'W', ' ', ' ', 'B', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'W', ' ', ' ', 'B', ' ', 'B', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['W', 'W', 'W', ' ', 'W', ' ', 'W', 'W', ' ', 'W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', ' ', ' ', ' ', 'W', ' ', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', 'G', 'G', 'W'],
    ['W', ' ', 'B', ' ', ' ', 'B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', 'W'],
    ['W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', ' ', 'W', 'P', 'W', 'W', ' ', ' ', 'G', 'G', 'W'],
    [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ]
},
{
    slug: 'level-3',
    theme: '3',
    width: 19,
    height: 16,
    mapGrid: [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'W', 'B', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'W', 'W', 'W', ' ', ' ', 'B', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'W', ' ', ' ', 'B', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['W', 'W', 'W', ' ', 'W', ' ', 'W', 'W', ' ', 'W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', ' ', ' ', ' ', 'W', ' ', 'W', 'W', 'B', 'W', 'W', 'W', 'W', 'W', ' ', ' ', 'G', 'G', 'W'],
    ['W', ' ', 'B', ' ', ' ', 'B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', 'W'],
    ['W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', ' ', 'W', 'P', 'W', 'W', ' ', ' ', 'G', 'G', 'W'],
    [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ]
},
];
let previous = undefined;
levels.reverse().forEach(level => {
    level.name = humanizeString(level.slug);
    if (previous) {
        level.next = previous;
    } else {
        level.isLast = true;
    }
    previous = level.slug;
});
levels.reverse();

var randomLevel = levels[Math.floor(Math.random() * levels.length)];
export default levels;
// export default randomLevel;


