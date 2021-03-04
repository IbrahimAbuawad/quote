
let chColor = prompt("choose text color for FORM( blue , red , green )");
let Name = prompt("whats your Name");
let age = prompt("whats your Age");

alert("Hello " + Name + " your age is " + age);

let container = document.getElementById("container");
let lowerColor = chColor.toLowerCase();

if (lowerColor == "blue" || lowerColor == "red" || lowerColor == "green") {
    container.style.color = lowerColor;
}
else {
    alert("you put wrong color");
}

function returnColor() {

    container.style.color = "black";
}