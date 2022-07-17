//function to create imagesrc depending on randomNumber
function generateImgSrc(randomNum) {
    return "./images/dice" + randomNum + ".png";
}

function whoWon(player1, player2) {
    if (player1 === player2) {
        return "It's a Draw!";
    }
    else if (player1 > player2) {
        return "🚩 Player1 Won";
    }
    else if (player2 > player1) {
        return "Player2 Won 🚩";
    }
    else {
        return "Refresh Me";
    }
}

//for img or dice1
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomImage1 = generateImgSrc(randomNumber1);
document.querySelector(".img1").setAttribute("src", randomImage1);

//for dice2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImage2 = generateImgSrc(randomNumber2);
document.querySelector(".img2").setAttribute("src", randomImage2);

//heading for who won or not etc
var winner = whoWon(randomNumber1, randomNumber2);

document.querySelector("h1").textContent = winner;