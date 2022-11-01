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
const startingPos = [[14, 13, 1], [0, 3, 3], [], [], []]; // X coord, Y coord, facing direction

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

const directionArray = [
  "player-idle-down",
  "player-idle-up",
  "player-idle-left",
  "player-idle-right",
];

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

let randomPuzzle = Math.floor(Math.random() * puzzleCollection.length);
let currentPuzzle = puzzleCollection[randomPuzzle];
let posOffsetX = ((puzzleCollection[randomPuzzle][0].length + 1) / 2) * -80;
let posOffsetY = ((puzzleCollection[randomPuzzle].length + 1) / 2) * -80;
let startingPosX = startingPos[randomPuzzle][0];
let startingPosY = startingPos[randomPuzzle][1];
let facingDirection = directionArray[startingPos[randomPuzzle][2]];
let movementEnabled = 1;
let win = 0;
let currentPosPx = [
  posOffsetX + (startingPosX + 1) * 80,
  posOffsetY + (startingPosY + 1) * 80,
];
let currentPosArray = [startingPosX, startingPosY];

// =========================================
// Instantiate Puzzle and Player
// =========================================

for (y = puzzleCollection[randomPuzzle].length; y > 0; y--) {
  for (x = 1; x < puzzleCollection[randomPuzzle][0].length + 1; x++) {
    const sub_li = $("<div>").css("left", `${posOffsetX + x * 80}px`);
    sub_li.css("top", `${posOffsetY + y * 80}px`);
    sub_li.addClass("tile");
    sub_li.addClass(tilemap[puzzleCollection[randomPuzzle][y - 1][x - 1]]);
    $("body").append(sub_li);
  }
}

const playerObject = $("<div>");
playerObject.addClass("player");
playerObject.attr("id", facingDirection);
playerObject.css("left", `${currentPosPx[0]}px`);
playerObject.css("top", `${currentPosPx[1]}px`);
$("body").append(playerObject);

// =========================================
// Execute win condition
// =========================================

const winScreen = () => {
  movementEnabled = 0;
  $blackout = $("<div>").addClass("blackout");
  $blackout.css("width", `${currentPuzzle[0].length * 40}px`);
  $blackout.css("height", `${currentPuzzle.length * 40}px`);
  $("body").append($blackout);
  $("body").append($("<div>").addClass("win-screen"));
  $("body").append($("<div>").addClass("return-to-title"));
  $("body").append($("<div>").addClass("new-game"));
};

// =========================================
// Movement Functions
// =========================================

const goLeft = () => {
  if (currentPosArray[0] - 1 > -1) {
    let newPos = currentPuzzle[currentPosArray[1]][currentPosArray[0] - 1];
    if (newPos === 0 || newPos === 8 || newPos === 9) {
      currentPosPx[0] -= 80;
      currentPosArray[0] -= 1;
      $(".player").css("left", `${currentPosPx[0]}px`);
    } else {
      return 1;
    }
    if (newPos === 8) {
      return 1;
    }
    if (newPos === 9) {
      win = 1;
      winScreen();
      return 1;
    }
  } else {
    return 1;
  }
};

const goUp = () => {
  if (currentPosArray[1] - 1 > -1) {
    let newPos = currentPuzzle[currentPosArray[1] - 1][currentPosArray[0]];
    if (newPos === 0 || newPos === 8 || newPos === 9) {
      currentPosPx[1] -= 80;
      currentPosArray[1] -= 1;
      $(".player").css("top", `${currentPosPx[1]}px`);
    } else {
      return 1;
    }
    if (newPos === 8) {
      return 1;
    }
    if (newPos === 9) {
      win = 1;
      winScreen();
      return 1;
    }
  } else {
    return 1;
  }
};

const goRight = () => {
  if (currentPosArray[0] + 1 < currentPuzzle[0].length) {
    let newPos = currentPuzzle[currentPosArray[1]][currentPosArray[0] + 1];
    if (newPos === 0 || newPos === 8 || newPos === 9) {
      currentPosPx[0] += 80;
      currentPosArray[0] += 1;
      $(".player").css("left", `${currentPosPx[0]}px`);
    } else {
      return 1;
    }
    if (newPos === 8) {
      return 1;
    }
    if (newPos === 9) {
      win = 1;
      winScreen();
      return 1;
    }
  } else {
    return 1;
  }
};

const goDown = () => {
  if (currentPosArray[1] + 1 < currentPuzzle.length) {
    let newPos = currentPuzzle[currentPosArray[1] + 1][currentPosArray[0]];
    if (newPos === 0 || newPos === 8 || newPos === 9) {
      currentPosPx[1] += 80;
      currentPosArray[1] += 1;
      $(".player").css("top", `${currentPosPx[1]}px`);
    } else {
      return 1;
    }
    if (newPos === 8) {
      return 1;
    }
    if (newPos === 9) {
      win = 1;
      winScreen();
      return 1;
    }
  } else {
    return 1;
  }
};

// =========================================
// Keypress Listener
// =========================================

$(document).keydown(function (e) {
  if (movementEnabled === 1) {
    if (e.which === 37 || e.which === 65) {
      // Left
      $(".player").removeAttr("id");
      $(".player").attr("id", "player-move-left");
      movementEnabled = 0;
      let myInterval = setInterval(() => {
        if (goLeft() === 1) {
          clearInterval(myInterval);
          if (win === 0) {
            movementEnabled = 1;
          }
          $(".player").removeAttr("id");
          $(".player").attr("id", "player-idle-left");
        }
      }, 50);
    } else if (e.which === 38 || e.which === 87) {
      // Up
      $(".player").removeAttr("id");
      $(".player").attr("id", "player-move-up");
      movementEnabled = 0;
      let myInterval = setInterval(() => {
        if (goUp() === 1) {
          clearInterval(myInterval);
          if (win === 0) {
            movementEnabled = 1;
          }
          $(".player").removeAttr("id");
          $(".player").attr("id", "player-idle-up");
        }
      }, 50);
    } else if (e.which === 39 || e.which === 68) {
      // Right
      $(".player").removeAttr("id");
      $(".player").attr("id", "player-move-right");
      movementEnabled = 0;
      let myInterval = setInterval(() => {
        if (goRight() === 1) {
          clearInterval(myInterval);
          if (win === 0) {
            movementEnabled = 1;
          }
          $(".player").removeAttr("id");
          $(".player").attr("id", "player-idle-right");
        }
      }, 50);
    } else if (e.which === 40 || e.which === 83) {
      // Down
      $(".player").removeAttr("id");
      $(".player").attr("id", "player-move-down");
      movementEnabled = 0;
      let myInterval = setInterval(() => {
        if (goDown() === 1) {
          clearInterval(myInterval);
          if (win === 0) {
            movementEnabled = 1;
          }
          $(".player").removeAttr("id");
          $(".player").attr("id", "player-idle-down");
        }
      }, 50);
    }
  }
});
