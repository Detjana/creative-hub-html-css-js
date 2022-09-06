let burgerMenu = document.getElementById("header__burger");
burgerMenu.addEventListener("click", addClassToBody);

function addClassToBody() {
    document.querySelector("body").classList.toggle("menu-open");
}


let firstVariable = 2;
let secondVariable = "2"

// console.log(firstVariable);
// console.log(secondVariable, " test param ", 2, " ",secondVariable);

// console.log(firstVariable == secondVariable);
// console.log(firstVariable === secondVariable);

let firstBoolean = true;
let secondBoolean = false;

// console.log(firstBoolean)

// console.log(!firstBoolean)

// console.log(firstBoolean != secondBoolean);

let iceCream = "vanilla";
if(iceCream == "chocolate") {
    // alert("Yeyy I love chocolate ice cream");
} else {
    // alert("But chocolate is my afv!");
}

function multiply(num1, num2) {
    return num1 === num2;
}

// console.log(multiply(2, 3));

// console.log(multiply(3, "3"));

// document.getElementById("input").addEventListener("change", inputChanged);

// function inputChanged() {
//     console.log("input changed");
// }

// document.getElementById("input").addEventListener("mouseover", mouseoverFunction);

// function mouseoverFunction() {
//     console.log("mouse is over input");
// }

// document.getElementById("input").addEventListener("mouseout", mouseoutFunction);

// function mouseoutFunction() {
//     console.log("mouse is out of input");
// }

// window.addEventListener("load", onLoadFunction);

// function onLoadFunction() {
//     console.log("page is loaded");
// }

// document.getElementById("input").addEventListener("keydown", onkeydownFunction);

// function onkeydownFunction() {
//     console.log('input key added');
// }
