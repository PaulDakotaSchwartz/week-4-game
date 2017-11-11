// Javascript here

$(document).ready(function() {

	// Make our variables global to the runtime of our application
	// randomNumber holds the number we generate from 19-120 for each game. Probably doesnt need to be set to zero.
	var randomNumber = 0;
	// each colorCrystal variable holds the number 1-12 for each game. Probably doesnt need to be set to zero.
	var redCrystal = 0;
	var blueCrystal = 0;
	var yellowCrystal = 0;
	var greenCrsytal = 0;
	// wins and losses variables to hold our tallies.
    var wins = 0;
    var losses = 0;
    // totalScore holds and displays our current total we are trying to match to randomNumber by adding Crystal values.
    var totalScore = 0;

    // This function starts the game, loading up the values we need for each variable (5 of them). This will also effectively reset all the variables to the start condition for another round.
    function initializeGame() {
        
        randomNumber = Math.floor(Math.random() * 101) + 19;
        // Empties out the random-number div and replaces it with the current randomNumber just generated.
        $("#random-number").empty().html(randomNumber);
        redCrystal = Math.floor(Math.random() * 11) + 1;
        blueCrystal = Math.floor(Math.random() * 11) + 1;
        yellowCrystal = Math.floor(Math.random() * 11) + 1;
        greenCrystal = Math.floor(Math.random() * 11) + 1;
        totalScore = 0;
        $("#current-total").html(totalScore);
        // console.log(randomNumber);
        // console.log(redCrystal);
        // console.log(blueCrystal);
        // console.log(yellowCrystal);
        // console.log(greenCrystal);
    }

    // Starts the Game for the First Time.
    initializeGame();

    // Function to review the totalScore variable to see whether win/loss conditions are met.
    function checkWinCondition() {
    	// if statement resolves if totalScore is exactly equal to randomNumber.
    	if (totalScore === randomNumber){
    		// increment wins.
    		wins++;
    		// rewrite the displayed win value.
    		$("#wins-so-far").empty().html(wins);
    		// Let the gamer know he has won.
    		$("#reporter").html("<p>You Win!</p>");
    		// restart the game.
    		initializeGame();
    	}

    	// else if statement resolves if totalScore is greater than randomNumber.
    	else if (totalScore > randomNumber){
    		// increment losses.
    		losses++;
    		// rewrite the displayed losses value.
    		$("#losses-so-far").empty().html(losses);
    		// Let the gamer know he has lost.
    		$("#reporter").html("<p>You Lose!</p>");
    		// restart the game.
    		initializeGame();
    	}

    	// no other conditions are described so the function terminates.
    }

	// Function to gather information based on the user clicking a gem.
    $(".crystal").on("click", function() {

    	// if else statements to determine what to do based on which crystal was clicked.
    	if (this.id === "red"){
    		// reset totalScore by adding the value of the crystal clicked.
    		totalScore = totalScore + redCrystal;
			// replaces the old totalScore display.
    		$("#current-total").html(totalScore);
    		// console.log(totalScore);
    		// Checks the win condition.
    		checkWinCondition();
    	}

    	// executes if the blue crystal was clicked.
    	else if (this.id === "blue"){
    		totalScore = totalScore + blueCrystal;
    		$("#current-total").html(totalScore);
    		// console.log(totalScore);
    		checkWinCondition();
    	}

    	// executes if the yellow crystal was clicked.
    	else if (this.id === "yellow"){
    		totalScore = totalScore + yellowCrystal;
    		$("#current-total").html(totalScore);
    		// console.log(totalScore);
    		checkWinCondition();
    	}

    	// executes if none of the other conditions for a crystal type click are met which defaults to green.
    	else {
    		totalScore = totalScore + greenCrystal;
    		$("#current-total").html(totalScore);
    		// console.log(totalScore);
    		checkWinCondition();
    	}
    });
});