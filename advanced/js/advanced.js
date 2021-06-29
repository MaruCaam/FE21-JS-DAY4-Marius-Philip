function DistributeData() {
    // let firstname = document.forms["personaldata"]["firstname"].value;
    // let lastname = document.forms["personaldata"]["lastname"].value;
    // let age = document.forms["personaldata"]["age"].value;
    let form_firstname = document.getElementsByName("firstname")[0].value;
    let form_lastname = document.getElementsByName("lastname")[0].value;
    let form_age = document.getElementsByName("age")[0].value;

    let div_firstname = document.getElementById("fname");
    let div_lastname = document.getElementById("lname");
    let div_age = document.getElementById("age");

    // add values to right div
    div_firstname.innerHTML = form_firstname;
    div_lastname.innerHTML = form_lastname;
    div_age.innerHTML = form_age;

    // Play with Colors
    div_firstname.style.color = "red";
    if (form_firstname.length > 5) div_firstname.style.color = "green";
    
    div_lastname.style.color = "red"; 
    if (form_lastname.length > 5) div_lastname.style.color = "green";

    // event.preventDefault();

}



document.getElementsByClassName("circle")[0].addEventListener("mouseover", () => document.getElementById("circletruth").innerHTML = "you are in the circle");

document.getElementsByClassName("circle")[0].addEventListener("mouseout", () => document.getElementById("circletruth").innerHTML = "you are outside of the circle");

document.getElementsByClassName("circle")[0].addEventListener("click", () => document.body.style.background = "grey");

document.getElementsByClassName("circle")[0].addEventListener("dblclick", () => document.body.style.background = "blue");