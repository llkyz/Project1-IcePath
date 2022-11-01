tileset = "Game Boy GBC - Pokemon Gold Silver - Tileset Day.png";

const tile1 = new Image();
tile1.src = tileset;

const tile2 = new Image();
tile2.src = tileset;

const puzzle1 = [
  [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4],
  [2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4],
  [2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 9],
  [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8],
];

const puzzle2 = [
  [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
  [2, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 9, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 1, 4],
  [8, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 4],
  [8, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 4],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
];

const puzzle3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const puzzle4 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const puzzle5 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

/*
  const puzzle6 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
*/
const puzzleCollection = [puzzle1, puzzle2, puzzle3, puzzle4, puzzle5];
const startingPos = [[13,14,3],[],[],[],[]] // X coord, Y coord, facing direction
/*
0 = Ice
1 = Rock
2 = Wall Left
3 = Wall Top
4 = Wall Right
5 = Wall Topleft
6 = Wall Topright
7 = Wall Bottom
8 = Floor Start
9 = Floor Goal
*/

const facingDirection = [
  "player-idle-down",
  "player-idle-up",
  "player-idle-left",
  "player-idle-right"
]


const tilemap = [
  "ice",
  "rock",
  "wall-left",
  "wall-top",
  "wall-right",
  "wall-topleft",
  "wall-topright",
  "wall-bottom",
  "floor-start",
  "floor-goal",
];

let randomPuzzle = Math.floor(Math.random() * puzzleCollection.length)
posOffsetX = Math.ceil(puzzleCollection[randomPuzzle][0].length / 2) * -80
posOffsetY = Math.ceil(puzzleCollection[randomPuzzle].length / 2) * -80
//console.log(randomPuzzle)

/*
for (y = puzzleCollection[randomPuzzle].length; y > 0; y--) {
  const sub_ul = $("<ul/>");
  for (x = 1; x < puzzleCollection[randomPuzzle][0].length + 1; x++) {
    const sub_li = $("<li/>").css("left", `${posOffsetX + (x * 40*2)}px`);
    sub_li.css("top", `${posOffsetY + (y * 40)}px`);
    sub_li.addClass("tile");
    sub_li.addClass(tilemap[puzzleCollection[randomPuzzle][y - 1][x - 1]]);
    sub_ul.append(sub_li);
  }
  $("body").append(sub_ul);
}
*/

for (y = puzzleCollection[randomPuzzle].length; y > 0; y--) {
  for (x = 1; x < puzzleCollection[randomPuzzle][0].length + 1; x++) {
    const sub_li = $("<div>").css("left", `${posOffsetX + (x * 80)}px`);
    sub_li.css("top", `${posOffsetY + (y * 80)}px`);
    sub_li.addClass("tile");
    sub_li.addClass(tilemap[puzzleCollection[randomPuzzle][y - 1][x - 1]]);
    $("body").append(sub_li);
  }
}

const playerObject = $("<div>");
playerObject.addClass("player");
playerObject.attr('id', "player-idle-left")
playerObject.css("left", "40px");
playerObject.css("top", `${40}px`);
$("body").append(playerObject)


$(document).keydown(function (e) {
  if (e.which === 37 || e.which === 65) {
    console.log("Left");
  } else if (e.which === 38 || e.which === 87) {
    console.log("Up");
  } else if (e.which === 39 || e.which === 68) {
    console.log("Right");
  } else if (e.which === 40 || e.which === 83) {
    console.log("Down");
  }
});
