# GA Project 1: Cave Escape

A puzzle game heavily inspired by and styled after a certain <sub>hugely popular</sub> game. Players traverse through a treacherous cave, sliding across the slippery icy floor, in an attempt to reach the exit and escape.


## Installation

Clone/download all files into a folder, and simply run **index.html** to start!

## Controls

- Use the **arrow keys** or **WASD** to move around
- **ESC** to return to the title screen

## Technical Approach
Puzzle data is saved as a 2D array, and is used to generate various map layouts from the spritesheet.

When a player moves in a certain direction, the game will compare the player's position to the puzzle data and keep moving them until they encounter an obstacle.

Due to Javascript's lack of a **sleep** function, **setInterval** is used instead. Additional player input is disabled when the player moves. The movement function is continuously called to simulate motion and is stopped once the player hits an obstacle. 

## Sources

Spritesheets from:
- https://github.com/pret/pokegold/blob/master/gfx/sprites/red.png
- https://www.spriters-resource.com/game_boy_gbc/pokemongoldsilver/sheet/60234/