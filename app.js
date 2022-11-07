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
  [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 4],
  [2, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 4],
  [2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 9, 9],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 1],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 4],
  [2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 1],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4],
  [2, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 4],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 4],
];

const puzzle4 = [
  [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
  [2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4],
  [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 4],
  [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4],
  [1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 8, 1, 1, 1],
];

const puzzle5 = [
  [5, 3, 3, 3, 3, 3, 3, 3, 6],
  [2, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 1, 0, 0, 1, 0, 0, 4],
  [2, 0, 0, 1, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 1, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 4],
  [8, 0, 0, 1, 0, 0, 0, 0, 9],
  [8, 0, 0, 0, 1, 0, 0, 0, 9],
  [2, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 1, 0, 4],
  [2, 1, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 1, 0, 4],
  [2, 0, 0, 0, 0, 1, 0, 0, 4],
  [2, 1, 1, 1, 1, 1, 1, 1, 4],
];

const puzzle6 = [
  [5, 3, 3, 3, 3, 3, 3, 3, 9, 3, 3, 3, 3, 3, 3, 6],
  [2, 0, 0, 0, 1, 1, 1, 1, 9, 1, 1, 1, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 4],
  [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 4],
  [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4],
  [2, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 4],
  [2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4],
  [2, 1, 1, 1, 1, 1, 1, 8, 8, 1, 1, 1, 1, 1, 1, 4],
];

const puzzle7 = [
  [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
  [2, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 4],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4],
  [2, 8, 8, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 4],
];

const puzzle8 = [
  [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
  [2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 4],
  [2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 4],
  [2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4],
  [2, 1, 0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 4],
  [2, 1, 0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4],
  [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4],
  [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4],
  [2, 1, 1, 1, 1, 1, 1, 8, 8, 1, 1, 1, 1, 1, 1, 4],
];

const puzzleCollection = [
  puzzle1,
  puzzle2,
  puzzle3,
  puzzle4,
  puzzle5,
  puzzle6,
  puzzle7,
  puzzle8,
];
const startingPos = [
  [14, 13, 1],
  [0, 3, 3],
  [0, 10, 3],
  [10, 13, 1],
  [0, 7, 3],
  [8, 13, 1],
  [2, 13, 1],
  [8, 13, 1],
]; // X coord, Y coord, facing direction

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

// =========================================
// Declare Global Data
// =========================================

const music = new Audio("assets/Ice-Path.ogg");
let randomPuzzle = 0;
let currentPuzzle = 0;
let posOffsetX = 0;
let posOffsetY = 0;
let startingPosX = 0;
let startingPosY = 0;
let facingDirection = 0;
let movementEnabled = 0;
let win = 0;
let currentPosPx = 0;
let currentPosArray = 0;
let previousPuzzles = [999, 999];

// =========================================
// Instantiate Puzzle Data
// =========================================

const populateData = () => {
  randomPuzzle = Math.floor(Math.random() * puzzleCollection.length);
  while (
    randomPuzzle == previousPuzzles[0] ||
    randomPuzzle == previousPuzzles[1]
  ) {
    randomPuzzle = Math.floor(Math.random() * puzzleCollection.length);
  }
  currentPuzzle = puzzleCollection[randomPuzzle];
  posOffsetX = ((puzzleCollection[randomPuzzle][0].length + 1) / 2) * -80;
  posOffsetY = ((puzzleCollection[randomPuzzle].length + 1) / 2) * -80;
  startingPosX = startingPos[randomPuzzle][0];
  startingPosY = startingPos[randomPuzzle][1];
  facingDirection = directionArray[startingPos[randomPuzzle][2]];
  movementEnabled = 1;
  win = 0;
  currentPosPx = [
    posOffsetX + (startingPosX + 1) * 80,
    posOffsetY + (startingPosY + 1) * 80,
  ];
  currentPosArray = [startingPosX, startingPosY];
};

// =========================================
// Instantiate Puzzle Board and Player
// =========================================

const populateScreen = () => {
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
};

// =========================================
// Title Screen
// =========================================

const showTitleScreen = () => {
  const $titleScreen = $("<div>").addClass("title-screen");
  const $title = $("<div>").addClass("title");
  const $cave = $("<div>").addClass("cave");
  const $controls = $("<div>").addClass("controls");
  const $startGame = $("<div>").addClass("start-game");
  const $footer = $("<div>").addClass("footer");
  $("body").append($titleScreen);
  $("body").append($title);
  $("body").append($cave);
  $("body").append($controls);
  $("body").append($startGame);
  $("body").append($footer);

  $startGame.on("click", () => {
    removeTitleScreen();
    populateData();
    populateScreen();
    music.pause();
    music.currentTime = 0;
    music.play();
  });
};

const removeTitleScreen = () => {
  $(".title-screen").remove();
  $(".title").remove();
  $(".cave").remove();
  $(".controls").remove();
  $(".start-game").remove();
  $(".footer").remove();
  return;
};

// =========================================
// Win Screen Functions
// =========================================

const winScreen = () => {
  previousPuzzles[1] = previousPuzzles[0];
  previousPuzzles[0] = randomPuzzle;
  movementEnabled = 0;
  const $blackout = $("<div>").addClass("blackout");
  $blackout.css("width", `${currentPuzzle[0].length * 40}px`);
  $blackout.css("height", `${currentPuzzle.length * 40}px`);
  const $winScreen = $("<div>").addClass("win-screen");
  const $titleReturn = $("<div>").addClass("return-to-title");
  const $newGame = $("<div>").addClass("new-game");
  $("body").append($blackout);
  $("body").append($winScreen);
  $("body").append($titleReturn);
  $("body").append($newGame);

  $titleReturn.on("click", () => {
    removeWinScreen();
    depopulate();
    showTitleScreen();
  });

  $newGame.on("click", () => {
    removeWinScreen();
    depopulate();
    populateData();
    populateScreen();
  });
};

const removeWinScreen = () => {
  $(".blackout").remove();
  $(".win-screen").remove();
  $(".return-to-title").remove();
  $(".new-game").remove();
};

const depopulate = () => {
  $(".player").remove();
  $(".tile").remove();
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
  if (e.which === 27) {
    // Escape back to Title Screen
    removeWinScreen();
    depopulate();
    showTitleScreen();
  }
});

// =========================================
// Execute when user loads page
// =========================================

showTitleScreen();
