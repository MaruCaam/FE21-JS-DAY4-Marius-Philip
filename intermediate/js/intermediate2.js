function ChangeBackgroundColor() {
    var red = Math.round(Math.random()*256);
    var green = Math.round(Math.random()*256);
    var blue = Math.round(Math.random()*256);
    var alpha = 1; //Math.random();
    this.style.background = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

document.body.addEventListener("click", ChangeBackgroundColor);
