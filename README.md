
<p align="center"><img width="450" height="90" src="./src/images/dfo-logo.PNG"></p>
Dungeon style 2d shooter Battle Royale type of web game. <p> Check out this <a href="https://zhz364.github.io/DFO/">Live demo</a></p>

## Background

  DFO is a dungeon-style Battle Royale mini-game that allows players to fight monsters from unknown places in a dark dungeon. Along with the exciting music, players will now encounter two different kinds of monsters. The first one is a normal skeleton monster, which will keep approaching you according to the player's location. If you accidentally touch it, the game will be over. At the same time, the player will also be rewarded with points for killing it by shooting fireballs. The second is a ghost, which only spawns at the edge of dungeons. Although it doesn't move, it will shoot ghost fire like you. Try to avoid it as much as possible. 
Again, players will be rewarded with points for killing the ghost. The game becomes more difficult as the points increase. Currently, there are three levels of difficulty, with easy difficulty generating only skeleton monsters. On medium difficulty, the speed of generating skeletons will increase. In the difficulty mode, both skeletons and ghosts will be generated at the same time. Are you ready to start your adventure, brave one?

## Technologies
1. Vanilla Javascript
2. Canvas
3. HTML
4. CSS
 
 ## Features
DFO currently has three features, the first of which is automatic escalation of player actions, monster attacks, and difficulty.
 ### Player Operation
The player can control the character by pressing the "w", "a", "s", and "d" keys to move up, the mouse pointer to aim, and the left mouse button to shoot. It's worth noting that, to make the game more difficult, the player can only fire up to 5 bullets at the same time from start to finish. In other words, a maximum of 5 bullets can be in the air at the same time. The bullets will <strong> automatic reload </strong> when they hit a monster or touch a wall. The current number of bullets remaining will be indicated on the right hand side, so remember to check it anytime.

<div>
    <img width="75%" src="https://hicamp-seed.s3-us-west-1.amazonaws.com/playerOperation.gif">
</div>
### Monster Attack
Normal skeleton monsters are meant to hit the player and deal damage, while ghost monsters shoot ghost fire to kill the player. If your body touches the Ghost, you will be killed by it as well!

<div>
    <img width="75%" src="https://hicamp-seed.s3-us-west-1.amazonaws.com/LV3.gif">
</div>

### Difficulty Upgrade
When the player kills a monster, he will be rewarded with 100 points. When the points reach 500, the game will automatically upgrade the difficulty from easy to medium, and the generation speed of the skeleton monster will be greatly increased. When the player reaches 1200 points, ghost monsters will join the battlefield.

## Future
In the future, I will add more types of monsters to increase the difficulty. Also, a scoreboard system will be introduced so that players can put their names on the scoreboard to show their bravery.
