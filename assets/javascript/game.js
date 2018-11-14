var randomNumber;
var loss = 0;
var win = 0;
var last = 0;

// There will be four crystals displayed as buttons on the page.

// The player will be shown a random number at the start of the game.

// The random number shown at the start of the game should be between 19 - 120.

// Each crystal should have a random hidden value between 1 - 12.

var restartGame = function () {

    $(".crystals").empty();

    var images = [
    'assets/images/aquamarine.jpeg',
    'assets/images/citrine.jpeg',
    'assets/images/purple.jpeg',
    'assets/images/red.jpeg',
]

    randomNumber = Math.floor(Math.random() * 101) + 19;

    $("#result").html('Target Score: ' + randomNumber);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 12) + 1;



        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "randomCrystalNumber": random
        });

        crystal.css({

            "background-image":"url('" + images[i] + "')", "background-size":"50px", 

        });


        $(".crystals").append(crystal);
    }
}

restartGame();




// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

// Your game will hide this amount until the player clicks a crystal.

// When they do click one, update the player's score counter.


$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('randomCrystalNumber'));

    last += num;

    $("#last").html("Score: " + last);

    if (last > randomNumber) {

        loss++;

        $("#loss").html("Losses: " + loss);

        last = 0;

        restartGame();


    }

    else if (last === randomNumber) {

        win++;

        $("#win").html("Wins: " + win);

        last = 0;

        restartGame();


    }




});




// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.