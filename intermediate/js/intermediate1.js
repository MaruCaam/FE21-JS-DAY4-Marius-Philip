function ByeHelloSanta() {
    if (times_clicked%2 == 0) {
        this.style.opacity= "0";
        this.style.transition = "1000ms";    
    } else {
        this.style.opacity= "1";
        this.style.transition = "250ms";
    }
    times_clicked++;
}    

// 2,5,7,9
var santa_items = [2,5,7,9];
for (let santa of santa_items) {
    var times_clicked = 0;
    document.getElementsByClassName(`item${santa}`)[0].addEventListener("click", ByeHelloSanta);
}
