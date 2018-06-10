$(document).ready(function() {

    //variables 
    var hp;    // health
    var ap;   // attack power
    var cap;  //counter attack power
    // var images =[
    //     "https://s1.piq.land/2016/01/17/5RNUzXKjgrWHRCbB14zC61qQ_400x400.png",
    //     "https://orig00.deviantart.net/d8a8/f/2015/227/c/7/_star_wars__luke_skywalker_rotj_by_volgaria99-d95uwzf.png",
    //     "http://pixelartmaker.com/art/2c453e686520266.png",
    //     "http://pixelartmaker.com/art/5d2906110ca1a02.png"];
    
    //character objects
    var stats = [
        lukeSkywalker = {
            hp: 100,
            ap: 5,
            cap:10
        },
        obiWan = {
            hp: 120,
            ap: 10,
            cap:15
        },
        palpatine = {
            hp: 150,
            ap:7,
            cap:20
        },
        darthMaul = {
            hp: 180,
            ap: 12,
            cap:20
        },

    ];
    var  userCharacter;

    //images on screen 
    $("#luke").html("<img src='http://pixelartmaker.com/art/f266b506340121a.png' />");
    $("#obiwan").html("<img src='http://pixelartmaker.com/art/530d3e83a77ae2e.png' />");
    $("#palpatine").html("<img src='http://pixelartmaker.com/art/2c453e686520266.png' />");
    $("#maul").html("<img src='http://pixelartmaker.com/art/5d2906110ca1a02.png' />");

    //onclick to choose character
    var gamePlay = function (){

            
            $("#luke").on("click", function luke(){
                userCharacter = stats[0];
                $("#userCharacter").append("<h3> Luke Skywalker </h3>", "<img src='http://pixelartmaker.com/art/f266b506340121a.png' />"  )
               
                
            });

            $("#obiwan").on("click", function obiwan(){
                userCharacter = stats[1];
                $("#userCharacter").append("<h3> Obi Wan Kenobi </h3>", "<img src='http://pixelartmaker.com/art/530d3e83a77ae2e.png' />")
                console.log(userCharacter)
            });
            
            $("#palpatine").on("click", function palpatine(){
                userCharacter = stats[2];
                $("#userCharacter").append("<h3> Palpatine </h3>", "<img src='http://pixelartmaker.com/art/2c453e686520266.png' />")
                console.log(userCharacter)
            });

            $("#maul").on("click",  function maul(){
                userCharacter = stats[3];
                $("#userCharacter").append("<h3>Darth Maul </h3>","<img src='http://pixelartmaker.com/art/5d2906110ca1a02.png' />")
                console.log(userCharacter)
            });
        
            
       
            
    };

    gamePlay();
    // $("#userCharacter").html("<h3> </h3>")






});// end of onload



//Pseudocode
//create object to contain characters and stats 
//create function for gameplay, that way when there is a win or loss it can be restarted, look at Crystal Collector
//create div to load characters into characters area 
//on click- character clicked on will now move to userCharacter, others will move to enemies
//on click- user decides which character to fight
//attack button- on click uses AP +5 to increase attack and subtract HP from enemy, automatically use enemy CAP to take health
//if statement - if enemy HP <=0, remove character card and onclick new enemy, else if userCharacter HP <=0, lose
//repeat for all characters
//if statement- if no enemy remains, trigger a win 

//put character images in <div> and append to html, use css class to make background and <p> tags for name and HP