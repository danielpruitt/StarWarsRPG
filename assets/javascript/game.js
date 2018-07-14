$(document).ready(function() {  
    //character objects
    var luke = {
        name: "Luke Skywalker",
        hp: 125,
        ap:15,
        cap:10,
        image: "<img src='http://pixelartmaker.com/art/f266b506340121a.png'>"
    };

    var obiwan = {
        name: "Obi Wan Kenobi",
        hp: 130,
        ap:13,
        cap:12,
        image: "<img src='http://pixelartmaker.com/art/530d3e83a77ae2e.png'>"
    };

    var maul = {
        name: "Darth Maul",
        hp: 140,
        ap:11,
        cap:10,
        image: "<img src='http://pixelartmaker.com/art/5d2906110ca1a02.png'>"
    };

    var palpatine = {
        name: "Palpatine",
        hp: 115,
        ap:12,
        cap:12,
        image: "<img src='http://pixelartmaker.com/art/2c453e686520266.png'>"
    };

    //character objects into array 
    var characterObjects = [luke,obiwan,maul,palpatine];
    var characters = [];

    //other variables that'll be needed
    // var chosenCharacter
    var currentEnemy;
    var yourCharacter;
    var yourHp;
    var yourAp;
    var enemyHealth = 0;
    var enemyAttack = 0;
    var counter = 0;
    var compoundAttack = 0;
    var opponent = false;

    //start game with gamePlay
    function gamePlay (){
        createCharacter(characterObjects);
        pickCharacter();
        pickYourOpponent();
    
    // character creation
        function createCharacter(arg) {
            if (arg.length===4) {
                    for (var i = 0; i < arg.length; i++){
                        var chosenCharacter = $("<div id=" +arg[i].name+">");
                        chosenCharacter.append("<div class='characterName'>" + arg[i].name);
                        chosenCharacter.append(arg[i].image);
                        chosenCharacter.append("<div class='characterHealth'>" + arg[i].hp);
                        chosenCharacter.attr("data-name", arg[i].name);
                        chosenCharacter.attr("data-attack", arg[i].ap);
                        chosenCharacter.attr("data-health", arg[i].hp);
                        chosenCharacter.attr("data-cap",arg[i].cap);
                        chosenCharacter.attr("class","character col-md-3");

                        characters.push(arg[i].name);

                        $("#characters").append(chosenCharacter);
                    }//end of if for loop
            } // end of if 

            else if (arg.length <= 3) {
                $("#remainingEnemies").empty()
                characters = [];
                $("#remainingEnemies").append("<h2 id='remainingEnemies'></h2>")
                    for (var i = 0; i < arg.length; i++) {
                        var chosenCharacter = $("<div id=" +arg[i].name+">");
                        chosenCharacter.append("<div class='characterName'>" + arg[i].name);
                        chosenCharacter.append(arg[i].image);
                        chosenCharacter.append("<div class='characterHealth'>" + arg[i].hp);
                        chosenCharacter.attr("data-name", arg[i].name);
                        chosenCharacter.attr("data-attack", arg[i].ap);
                        chosenCharacter.attr("data-health", arg[i].hp);
                        chosenCharacter.attr("data-cap",arg[i].cap);
                        chosenCharacter.attr("class","enemy");

                        characters.push(arg[i].name);

                        $("#remainingEnemies").append(chosenCharacter);
                }
                if (!currentEnemy){
                    pickYourOpponent();
                }// end of if

                } //end of else if for loop

            } // function end 

    //end of createCharacter


        //PICKING A CHARACTER 

        function pickCharacter () {
            $(".character").on("click", function(){
                $("#characters").empty();
                $("#characters").append("<div class='title'>Your Character</div>");

                yourCharacter= $(this);
                yourCharacter.addClass('yourCharacter');
                yourCharacter.removeClass("col-md-3 character");

                yourHp = parseInt(yourCharacter.attr('data-health'));
                yourAp = parseInt(yourCharacter.attr("data-attack"));

                $("#characters").append(yourCharacter);
                $("#remainingEnemies").append("<div class='title'> Pick your enemy</div>");

                var remove = characters.indexOf(yourCharacter.attr("data-name"));

                characterObjects.splice(remove,1);

                createCharacter(characterObjects);
            }); //end of on click function



        };//end of pickCharacter

        //opponent choosing

        function pickYourOpponent() {
            $(".enemy").on("click", function(){

                $("#characters").empty();
                $("#currentEnemy").empty();
                $("#fightButton").empty();

                currentEnemy = $(this);
                currentEnemy.addClass("currentEnemy");
                currentEnemy.removeClass("enemy");

                //to the fight zone
                $("#yourCharacter").append(yourCharacter);
                $("#fightButton").append("<img src='http://pixelartmaker.com/art/78abcc976fb3050.png' id='lightSabers'>");
                $("#currentEnemy").append(currentEnemy);
                opponent = true;

                var removeEnemy = characters.indexOf(currentEnemy.attr("data-name"));

                characterObjects.splice(removeEnemy, 1);

                createCharacter(characterObjects);

                enemyAttack = 0;
                console.log(enemyAttack)

                enemyAttack= parseInt(currentEnemy.attr("data-cap"));
                enemyHealth= parseInt(currentEnemy.attr('data-health'));

                console.log('is there an opponent ' + opponent)

                $("#lightSabers").on("click", function(){
                    if (opponent) {
                        fight();
                    }
                    else{
                        alert("You must choose your opponent!");
                    }
                });

            });


        };//end of pickYourOpponent function

        //fight

        function fight(){
            counter++;
            compoundAttack += yourAp;
            console.log("compounded attack:" + compoundAttack);

            enemyHealth= enemyHealth-compoundAttack;
            yourHp= yourHp-enemyAttack
            console.log("current enemy attack " + enemyAttack)
            console.log("enemy health" + enemyHealth);
            console.log("user health" + yourHp);
        

            $(".currentEnemy > .characterHealth").html(enemyHealth).animate({
                fontSize: 60,
                color:'#FF0000' 
            },300, function(){
                $(this).animate({
                    fontSize:20,
                    color:'white'
                },300);
            });

            $(".yourCharacter > .characterHealth").html(yourHp).animate({
                fontSize: 60,
                color:'#FF0000' 
            },300, function(){
                $(this).animate({
                    fontSize:20,
                    color:'white'
                },300);
            });

            var defeated = 0;
            if(enemyHealth <=0 && yourHp > 0) {
                defeated++; 
                opponent = false;
                
                console.log(defeated)
                
                yourHp = yourHp-enemyAttack;
                console.log("defeated" + currentEnemy.attr("data-name'"));
                console.log('is the opponent' + opponent);
                
                $("#currentEnemy").empty();
                console.log(characterObjects)
                if (characters.length === 0 ) {
                    alert("The force is strong with you. You will rule the galaxy!");
                    $("#lightSabers").empty();
                    restartGame();

                }
                else{
                    pickYourOpponent();
                    
                };
            }
            else if (yourHp <= 0) {
                alert("I find your lack of faith...disturbing. Try again");
                restartGame();
            };

        }//end of fight function

        //restart game function
        function restartGame(){
            $(".row").empty();
            $(".restart").append('<button class="restartBtn btn btn-lg btn-warning">Restart Game</button>');
                $(".restartBtn").on("click",function(){
                    location.reload();
                })
        }



    };// end of gameplay


    gamePlay()



}); // end of on load





// Pseudocode
// create object to contain characters and stats 
// create function for gameplay, that way when there is a win or loss it can be restarted, look at Crystal Collector
// create div to load characters into characters area 
// on click- character clicked on will now move to userCharacter, others will move to enemies
// on click- user decides which character to fight
// attack button- on click uses AP +5 to increase attack and subtract HP from enemy, automatically use enemy CAP to take health
// if statement - if enemy HP <=0, remove character card and onclick new enemy, else if userCharacter HP <=0, lose
// repeat for all characters
// if statement- if no enemy remains, trigger a win 

// put character images in <div> and append to html, use css class to make background and <p> tags for name and HP