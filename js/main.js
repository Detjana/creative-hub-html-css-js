// let burgerMenu = document.getElementById("header__burger");
// burgerMenu.addEventListener("click", addClassToBody);

// function addClassToBody() {
//     document.querySelector("body").classList.toggle("menu-open");
// }

let operators = document.getElementsByClassName("operator");

console.log(operators);
console.log(operators[0]);

// operators[0].addEventListener

// for(let i = 0; i < operators.length; i++) {
//     console.log(i);
//     console.log(operators[i])
//     operators[i].addEventListener("click", function showResult() {
//         console.log(this.operator);
//     });
// }

function calculate(event) {
    let firstInp = document.getElementById("firstInp").valueAsNumber;
    let lastInp = document.getElementById("lastInp").valueAsNumber;
    console.log(firstInp);
    console.log(lastInp);
    console.log(event.value)
}
