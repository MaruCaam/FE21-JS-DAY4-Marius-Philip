function createElement() {
    let a = document.getElementsByName("firstname")[0].value;
    let b = document.getElementsByName("lastname")[0].value;
    let c = document.getElementsByName("age")[0].value;
    document.getElementById("result").innerHTML += a + " " + b + " " + c + "<br>";
    /* ocument.getElementsByClassName("input")[0].value = ""; */

}

document.getElementById("btn").addEventListener("click", function () {


    createElement();
});