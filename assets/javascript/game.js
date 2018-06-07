// tracking wins and losses
var wins = 0;
var losses = 0;
// number to match
var targetNumber = Math.floor(Math.random()* 101) + 19;
$('#targetNumber').text(targetNumber);

// selects random numbers for each crystal ranging from 1-12
var num1 = Math.floor(Math.random()* 11) + 1;
var num2 = Math.floor(Math.random()* 11) + 1;
var num3 = Math.floor(Math.random()* 11) + 1;
var num4 = Math.floor(Math.random()* 11) + 1;

//adds number fo wins and losses to scoreboard
$('#wins').text(wins);
$('#losses').text(losses);

// counter 
var crystalsSum = 0;
$('#currentScore').text(crystalsSum);


// fx to restartGame
function restart() {
    targetNumber = Math.floor(Math.random()*101+19);
    $('#targetNumber').text(targetNumber);
    var num1 = Math.floor(Math.random()* 11) + 1;
    var num2 = Math.floor(Math.random()* 11) + 1;
    var num3 = Math.floor(Math.random()* 11) + 1;
    var num4 = Math.floor(Math.random()* 11) + 1;

    crystalsSum = 0;
    $('#currentScore').text(crystalsSum);
}

function win() {
    alert('you win!');
    wins++;
    $('#wins').text(wins);
    restart();
}

function lose() {
    alert('you lose!');
    losses++;
    $('#losses').text(losses);
    restart();
}
    
$('#one').on('click', function() {
    crystalsSum = crystalsSum + num1;

    $('#currentScore').text(crystalsSum);
        if (crystalsSum === targetNumber) {
            win();
        }
        else if (crystalsSum > targetNumber) {
            lose();
        }
});

$('#two').on('click', function() {
    crystalsSum = crystalsSum + num2;

    $('#currentScore').text(crystalsSum);
        if (crystalsSum === targetNumber) {
            win();
        }
        else if (crystalsSum > targetNumber) {
            lose();
        }

});

$('#three').on('click', function() {
    crystalsSum = crystalsSum + num3;
    $('#currentScore').text(crystalsSum);

    if (crystalsSum === targetNumber) {
        win();
    }
    else if (crystalsSum > targetNumber) {
        lose();
    }
});

$('#four').on('click', function() {
    crystalsSum = crystalsSum + num3;
    $('#currentScore').text(crystalsSum);

    if (crystalsSum === targetNumber) {
        win();
    }
    else if (crystalsSum > targetNumber) {
        lose();
    }
});