const getComputerChoice = () => {

    arr = ['rock', 'paper', 'scissor'];
    choice = arr[(Math.floor(Math.random() * arr.length))];
    return choice;
    // if (Math.floor(Math.random() * 3) === 0) {
    //         return 'Rock';
    //     }
    //     else if (Math.floor(Math.random() * 3) === 1) {
    //         return 'Paper';
    //     }
    //     else if (Math.floor(Math.random() * 3) === 2) {
    //         return 'Scissor';
    //     }
}

function playRound(playerSelection, computerSelection) {
    var result = '';
    player = 0;
    comp = 0;
    const output = document.querySelector("#output");
    if (playerSelection != computerSelection) {
        if (playerSelection == "rock" && computerSelection == "scissor") {
            //console.log("You Win!");
            result = "You Win!";
            player++;
        }
        else if (playerSelection == "rock" && computerSelection == "paper") {
            //console.log("You Lose!");
            result = "You Lose!";
            comp++;
        }
        else if (playerSelection == "paper" && computerSelection == "scissor") {
            //console.log("You Lose!");
            result = "You Lose!";
            comp++;
        }
        else if (playerSelection == "paper" && computerSelection == "rock") {
            //console.log("You Win!");
            result = "You Win!";
            player++;
        }
        else if (playerSelection == "scissor" && computerSelection == "rock") {
            //console.log("You Lose!")
            result = "You Lose!";
            comp++;
        }
        else if (playerSelection == "scissor" && computerSelection == "paper") {
            //console.log("You Win!")
            result = "You Win!";
            player++;
        }

    }
    else {
        //console.log("Draw");
        result = "Draw";
    }
    return result;
}

// var num = prompt("Enter a number");
win = 0;
lose = 0;
function game() {
    // for (i = 0; i < num; i++) {
    const opt = document.getElementById('rock');
    const playerSelection = opt.id;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
    if (player) {
        win = win + 1;
        if (win == 5) {
            output.textContent = "You Won the Game! Congrats";
            win = 0;
            lose = 0;
            return console.log("Player wins");
        }
    } else if (comp) {
        lose = lose + 1;
        if (lose == 5) {
            output.textContent = "You Lost the Game! Better Luck Next Time.";
            win = 0;
            lose = 0;
            return console.log("Computer wins")
        }
    }
    // }
    // if (win > lose) {
    //     return "Finally - You Win!";
    // } else if (lose > win) {
    //     return "Finally - Computer Won!";
    // } else {
    //     return "Finally - Draw!";
    // }
}

function clickfunc() {
    return console.log(game());
};