
function DisplayPlayers() {
    var player1 = "A"; //prompt("Please enter name of player 1...");
    var player2 = "B"; //prompt("Please enter name of player 2...");
    document.getElementsByTagName("header")[0].innerHTML = `<strong>${player1} VS ${player2}</strong>`;
    document.getElementById("p1_headline").innerHTML = player1;
    document.getElementById("p2_headline").innerHTML = player2;
}

document.onload = DisplayPlayers();

// document.getElementsByClassName("circle")[0].addEventListener("mouseover", () => document.getElementById("circletruth").innerHTML = "you are in the circle");

// document.getElementsByClassName("circle")[0].addEventListener("mouseout", () => document.getElementById("circletruth").innerHTML = "you are outside of the circle");

// document.getElementsByClassName("circle")[0].addEventListener("click", () => document.body.style.background = "grey");

// document.getElementsByClassName("circle")[0].addEventListener("dblclick", () => document.body.style.background = "blue");