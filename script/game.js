
//Listen for window load the jQuery way
$(document).ready(function () {

    // //Start Game
    // let startGameSection = document.getElementById("startGame");
    // let startGameBtn = document.getElementById("startGameBtn");

    // // Timer and Score 
    // let timer = document.getElementById("timer");
    // let score = document.getElementById("score");

    // //Whack A Mole
    // let whack1 = document.getElementById("whack1");
    // let whack2 = document.getElementById("whack2");
    // let whack3 = document.getElementById("whack3");
    // let whack4 = document.getElementById("whack4");
    // let whack5 = document.getElementById("whack5");
    // let whack6 = document.getElementById("whack6");

    // Play menu animation, everyone jumping in and out! 
    $(".mouse").addClass("mouseMenuAnimation");

    // Function that will choose a random hole 
    function chooseHole(){
        let randomHole = Math.floor(Math.random() * 6);
        console.log(randomHole);
        $(".mouse").removeClass("mouseAnimation");
        
        if (randomHole === 0){
            $("#mouse1").addClass("mouseAnimation");
        } else if (randomHole === 1){
            $("#mouse2").addClass("mouseAnimation");
        } else if (randomHole === 2){
            $("#mouse3").addClass("mouseAnimation");
        }else if (randomHole === 3){
            $("#mouse4").addClass("mouseAnimation");
        } else if (randomHole === 4){
            $("#mouse5").addClass("mouseAnimation");
        } else if (randomHole === 5){
            $("#mouse6").addClass("mouseAnimation");
        }
    }

    //Function that will start the game after clickint the start game button. 
    function startGame(){
        $("#startGameBtn").hide();
        $(".mouse").removeClass("mouseMenuAnimation");
        chooseHole();
    }

    $("#startGameBtn").on("click", function() {
        startGame();
    });

});