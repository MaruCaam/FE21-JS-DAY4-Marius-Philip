function ByeByeSanta() {
    this.style.opacity= "0";
    this.style.transition = "1000ms";    
}

// 2,5,7,9
var santa_items = [2,5,7,9];
for (let santa of santa_items) {
    document.getElementsByClassName(`item${santa}`)[0].addEventListener("click", ByeByeSanta);
}
