// function submitData() {
//     var number_one = document.forms["sum"]["number_one"].value;
//     var number_two = document.forms["sum"]["number_two"].value;

//     /*you must convert the variables into numbers, otherwise the + operator will concatenate them as strings*/
//     var sum = Number(number_one) + Number(number_two);

//     var result = document.getElementById('result');

//     result.innerHTML += '<h2>The sum of the numbers is ' + sum + ' </h2>';
// }


function DistributeData() {
    // let firstname = document.forms["personaldata"]["firstname"].value;
    // let lastname = document.forms["personaldata"]["lastname"].value;
    // let age = document.forms["personaldata"]["age"].value;
    let form_firstname = document.getElementsByName("firstname")[0].value;
    let form_lastname = document.getElementsByName("lastname")[0].value;
    let form_age = document.getElementsByName("age")[0].value;
    let form_profession = document.getElementsByName("profession")[0].value;

    let div_firstname = document.getElementById("fname");
    let div_lastname = document.getElementById("lname");
    let div_age = document.getElementById("age");
    let div_profession = document.getElementById("profession");

    // add values to right div
    div_firstname.innerHTML = form_firstname;
    div_lastname.innerHTML = form_lastname;
    div_age.innerHTML = form_age;
    div_profession.innerHTML = form_profession;

    // Play with Colors
    div_firstname.style.color = "red";
    if (form_firstname.length > 5) div_firstname.style.color = "green";
    
    div_lastname.style.color = "red"; 
    if (form_lastname.length > 5) div_lastname.style.color = "green";

    if (form_profession == "IT") div_profession.style.background = "#c92ac9";
    if (form_profession == "Hospitality") div_profession.style.background = "yellow";
    if (form_profession == "Retail") {
        div_profession.style.background = "red";
        div_profession.style.color = "white";
        div_profession.style.fontWeight = "bold";
        div_profession.style.fontSize = "10rem";
        // div_profession.style.margin = "0 auto";
        div_profession.style.padding = "1rem";
        div_profession.style.textAlign = "center";
    }

    // event.preventDefault();

}

document.getElementById("btn").addEventListener("click", DistributeData);



