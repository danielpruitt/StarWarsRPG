#Star Wars RPG

https://danielpruitt.github.io/StarWarsRPG/


This game is played by clicking any of the four characters to chose as you player character. The remaining characters are moved to an opponent area, upon clicking they become your opponent. Once an opponent is click they move to a new area in line with you player character, by clicking the lightsabers you make an attack an the NPC has a counter attack to inflict damage on the player character. If the player loses all HP the game is over if there are still remaining enemies. If the player defeats all enemies(defeating an enemy and clicking a new enemy will bring forth another opponent) then the player wins and the game is over.



//Pseudocode//
create object to contain characters and stats 
create function for gameplay, that way when there is a win or loss it can be restarted, look at Crystal Collector
create div to load characters into characters area 
on click- character clicked on will now move to userCharacter, others will move to enemies
on click- user decides which character to fight
attack button- on click uses AP +5 to increase attack and subtract HP from enemy, automatically use enemy CAP to take health
if statement - if enemy HP <=0, remove character card and onclick new enemy, else if userCharacter HP <=0, lose
repeat for all characters
if statement- if no enemy remains, trigger a win 

put character images in <div> and append to html, use css class to make background and <p> tags for name and HP
