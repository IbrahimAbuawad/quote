let cat = prompt("how many cat pic do you want");
let chColor = prompt("choose text color for FORM( blue , red , green )");
let Name = prompt("whats your Name");
let age = prompt("whats your Age");


alert("Hello " + Name + " your age is " + age);

let order = prompt("what do you want to Coffee or tea ?");

let lowerOrder = order.toLowerCase();
while (lowerOrder != 'coffee' && lowerOrder != 'tea') {

    lowerOrder = prompt("what do you want to Coffee or tea ?").toLowerCase();

}


let imgDiv = document.getElementById('imgDiv');
for (i = 0; i < cat; i++) {
    let a = document.createElement('img');
    a.setAttribute('src', "https://www.catbreedslist.com/uploads/allimg/cat-pictures/Nebelung-1.jpg");

    imgDiv.appendChild(a);

};
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

