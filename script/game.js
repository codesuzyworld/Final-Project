
//Listen for window load the jQuery way
$(document).ready(function () {

    // Timer and Score 
    let timer = document.getElementById("timer");
    let score = document.getElementById("score");
    let gameResult = document.getElementById("gameResult");

    // Play menu animation, everyone jumping in and out! 
    $(".mouse").addClass("mouseMenuAnimation");

    //Hide winning dialog message
    $("#winMsg").hide();

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


    //Timer Function for 30 seconds

    //30 Seconds of game time = 10000 miliseconds
    let gameTime = 30000;
    //Set remaining time
    let remainingTime = gameTime;
    //Interval is by default null
    let interval = null;
    //Score is by default 0
    let gameScore = 0;

    function gameTimer(){

        // If time is up, then clear the interval and score, and stop the game
        if (remainingTime <= 0){
            window.clearInterval(interval);
            timer.innerHTML = "0 Sec";
            gameResult.innerHTML = "Your score is " + gameScore;
            $(".mouse").removeClass("mouseAnimation");
            $("#winMsg").show();
            return;
        }

        // Everytime this function runs, deduct 100 miliseconds off the remaining time.
        remainingTime -= 1000;
        chooseHole();
        //Create time variables 
        // Turn the miliseconds into seconds
        let nowSeconds = Math.floor(remainingTime / 1000);
        timer.innerHTML = nowSeconds + "Sec";

    }

    //Function that will start the game after clicking the start game button. 
    function startGame(){
        //Reset interval and score
        remainingTime = gameTime; 
        gameScore = 0; 
        score.innerHTML = gameScore + " Points";
        clearInterval(interval);
        $(".mouse").removeClass("mouseMenuAnimation mouseAnimation mouseHitAnimation");

        //Hide button
        $("#startGameBtn").hide();
        $("#winMsg").hide();
        $(".mouse").removeClass("mouseMenuAnimation");

        //Start the timer
        gameTimer();
        timer.innerHTML = Math.floor(gameTime / 1000) + "Sec";
		// The interval will be 1 second, and will run the timer function 
        interval = window.setInterval(gameTimer, 1000);

        //If the player clicks the mouse container, then 10 points will be added
        $(".whack").on("click", function() {
            //If the animation is playing, then it counts as a hit
            if ($(this).find(".mouse").hasClass("mouseAnimation")) {
                console.log("10 points added");
                gameScore += 10;
                score.innerHTML = gameScore + " Points";
                // Set the mouse element for easy access
                let mouseElement = $(this).find(".mouse");
                //Play hit animation 
                mouseElement.addClass("mouseHitAnimation");
                // Remove the hit animation class after it ends
                mouseElement.on('animationend', function() {
                    mouseElement.removeClass("mouseHitAnimation");
                });
            }
        });
    } 

    //Event Listener
    $("#startGameBtn").on("click", function() {
        startGame();
    });

    $("#playAgainBtn").on("click", function() {
        $("#winMsg").hide();
        $("#startGameBtn").show();
        gameScore = 0;
        score.innerHTML = gameScore + " Points";
        $(".mouse").addClass("mouseMenuAnimation");
    });

});