$(document).ready(function(){

// global variables
var userTotal = 0;
var wins = 0;
var losses = 0;


// generate random numbers for each of the crystals
var crystalValue1 = Math.floor((Math.random() * 12) + 1);
var crystalValue2 = Math.floor((Math.random() * 12) + 1);
var crystalValue3 = Math.floor((Math.random() * 12) + 1);
var crystalValue4 = Math.floor((Math.random() * 12) + 1);


// computer generates a number
	var computerGuess = Math.floor((Math.random() * 120) + 1);
		$("#computerGuess").html(computerGuess);
		console.log(computerGuess);


// generate random number on button click of crystal images and add that number to the user total
		$("#crystal1").on("click", function() {
		    $("#userGuess").html(crystalValue1);
		    console.log(crystalValue1);
		    	userTotal += crystalValue1;
		    	$("#userGuess").html(userTotal);
		    	console.log(userTotal);
		    if (computerGuess == userTotal){
	    		wins++;
	    		reset();
	    		var updateWins = '<p>Wins: ' + wins +'</p>';
				var updateLosses = '<p>Losses: ' + losses +'</p>';
				$("#scoreStats").html(updateWins + updateLosses);

	    	}

	    	else if (computerGuess < userTotal) {
	    		losses++;
	    		reset();
	    		var updateWins = '<p>Wins: ' + wins +'</p>';
				var updateLosses = '<p>Losses: ' + losses +'</p>';
				$("#scoreStats").html(updateWins + updateLosses);
	    	}

		});	


		$("#crystal2").on("click", function() {
	    $("#userGuess").html(crystalValue2);
	    console.log(crystalValue2);
	    	userTotal += crystalValue2;
	    	$("#userGuess").html(userTotal);
	    	console.log(userTotal);
		    if (computerGuess == userTotal){
	    		wins++;
	    		reset();
	    		var updateWins = '<p>Wins: ' + wins +'</p>';
				var updateLosses = '<p>Losses: ' + losses +'</p>';
				$("#scoreStats").html(updateWins + updateLosses);

	    	}

	    	else if (computerGuess < userTotal) {
	    		losses++;
	    		reset();
	    		var updateWins = '<p>Wins: ' + wins +'</p>';
				var updateLosses = '<p>Losses: ' + losses +'</p>';
				$("#scoreStats").html(updateWins + updateLosses);
	    	}
		});	


		$("#crystal3").on("click", function() {
	    $("#userGuess").html(crystalValue3);
	    console.log(crystalValue3);
	    	userTotal += crystalValue3;
	    	$("#userGuess").html(userTotal);
	    	console.log(userTotal);
		    if (computerGuess == userTotal){
	    		wins++;
	    		reset();
	    		var updateWins = '<p>Wins: ' + wins +'</p>';
				var updateLosses = '<p>Losses: ' + losses +'</p>';
				$("#scoreStats").html(updateWins + updateLosses);

	    	}

	    	else if (computerGuess < userTotal) {
	    		losses++;
	    		reset();
	    		var updateWins = '<p>Wins: ' + wins +'</p>';
				var updateLosses = '<p>Losses: ' + losses +'</p>';
				$("#scoreStats").html(updateWins + updateLosses);
	    	}
		});	


		$("#crystal4").on("click", function() {
	    $("#userGuess").html(crystalValue4);
	    console.log(crystalValue4);
	    	userTotal += crystalValue4;
	    	$("#userGuess").html(userTotal);
	    	console.log(userTotal);
		    if (computerGuess == userTotal){
	    		wins++;
	    		reset();
	    		var updateWins = '<p>Wins: ' + wins +'</p>';
				var updateLosses = '<p>Losses: ' + losses +'</p>';
				$("#scoreStats").html(updateWins + updateLosses);

	    	}

	    	else if (computerGuess < userTotal) {
	    		losses++;
	    		reset();
	    		var updateWins = '<p>Wins: ' + wins +'</p>';
				var updateLosses = '<p>Losses: ' + losses +'</p>';
				$("#scoreStats").html(updateWins + updateLosses);
	    	}
		});	

// reset function 
function reset () {
	console.log("reached reset function");
	gameOver();
	userTotal = 0;
	computerGuess = Math.floor((Math.random() * 120) + 1);

	$("#computerGuess").html(computerGuess);


	crystalValue1 = Math.floor((Math.random() * 12) + 1);
	crystalValue2 = Math.floor((Math.random() * 12) + 1);
	crystalValue3 = Math.floor((Math.random() * 12) + 1);
	crystalValue4 = Math.floor((Math.random() * 12) + 1);

	console.log("new user total: " + userTotal);
	console.log("new computer guess" + computerGuess);
}

function gameOver () {
	if (wins == 15) {
		alert("Game over! You won " + wins + " times!");
		wins = 0;
		losses = 0;
	}

	if (losses == 15) {
		alert("Game over! You lost! Better luck next time!");
		wins = 0;
		losses = 0;
	}
}

 });

