# Cave Escape

A puzzle game heavily inspired by and styled after a certain <sub>hugely popular</sub> game. Players traverse through a treacherous cave, sliding across the slippery icy floor, in an attempt to reach the exit and escape.


## Installation

The game can be played over at https://project1-ice-path.vercel.app. Alternatively, clone/download all files into a folder, and run **index.html** to start.

## Technologies Used

- HTML5 <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/llkyz/llkyz/icons/html5/html5-white-original-wordmark.svg"><img height="30" width="30" src="https://cdn.jsdelivr.net/gh/llkyz/llkyz/icons/html5/html5-original-wordmark.svg"></picture>
- CSS3 <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/llkyz/llkyz/icons/css3/css3-white-original-wordmark.svg"><img height="30" width="30" src="https://cdn.jsdelivr.net/gh/llkyz/llkyz/icons/css3/css3-original-wordmark.svg"></picture>
- JavaScript <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/llkyz/llkyz/icons/javascript/javascript-original.svg"><img height="30" width="30" src="https://cdn.jsdelivr.net/gh/llkyz/llkyz/icons/javascript/javascript-original.svg"></picture>

## Controls

- Use the **arrow keys** or **WASD** to move around
- **ESC** to return to the title screen

## Technical Approach
Puzzle data is saved as a 2D array, and is used to generate various map layouts from the spritesheet.

When a player moves in a certain direction, the game will compare the player's position to the puzzle data and keep moving them until they encounter an obstacle.

Due to Javascript's lack of a **sleep** function, **setInterval** is used instead. Additional player input is disabled when the player moves. The movement function is continuously called to simulate motion and is stopped once the player hits an obstacle.

### Puzzle Data
![documentation1](https://user-images.githubusercontent.com/115427253/201114957-28277eec-be8e-4f92-9280-45f43d106a35.JPG)

Each puzzle is stored as a 2D array to be called up later to generate the maps onscreen. The number in each array corresponds to the type of tile that will be rendered in that position. This also becomes useful later on in determining whether the player runs into a wall or obstacle, and whether they reach the goal.

### Rendering the Puzzle and Player
![documentation4](https://user-images.githubusercontent.com/115427253/201117006-f74d551c-2e0e-4838-802a-577b844c14a4.JPG)

The game is rendered using graphics from 2 spritesheets: 1 for the puzzle tiles and 1 for the player. The spritesheets were cropped and sized in CSS to form each individual sprite. These sprites could then be displayed in quick succession to simulate animation. Like in most 2D games, the sprites can be used to form a wide variety of map layouts without needing to store excessive image data.

![documentation2](https://user-images.githubusercontent.com/115427253/201114971-e01f3690-f1a8-438e-a57f-c549f0836a61.JPG)


To create the map, the sprites are rendered onto the screen in a two-dimensional grid. The player's character is also rendered in one of the predetermined starting tiles.

### Movement Logic
![documentation3](https://user-images.githubusercontent.com/115427253/201114964-05f00470-e8a9-4b84-a87d-e07939aa976c.JPG)

The main mechanic of this game is that when a player moves across the ice floor, they are unable to stop and will keep moving in the same direction until they encounter an obstacle or wall, or reach the end goal.

When a player moves in a certain direction, additional movement input is disabled. The game then checks if the position they are moving to is a valid tile. If it is valid, the player continues moving in that direction. Otherwise, the player will come to a stop and control is given back to them. While this is happening, the player's sprite is updated to a moving version, and then gets reverted to the original idle version once they come to a stop.

## Sources

Spritesheets from:
- https://github.com/pret/pokegold/
- https://www.spriters-resource.com/game_boy_gbc/pokemongoldsilver/sheet/60234/
