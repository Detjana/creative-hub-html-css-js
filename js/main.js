let burgerMenu = document.getElementById("header__burger");
if(burgerMenu) {
    burgerMenu.addEventListener("click", addClassToBody);
}

function addClassToBody() {
    document.querySelector("body").classList.toggle("menu-open");
}

function calculate(event) {
    let firstInp = document.getElementById("firstInp").valueAsNumber;
    let lastInp = document.getElementById("lastInp").valueAsNumber;
    let result;

    if(event.value === "+") {
        result = firstInp + lastInp;
    } else if(event.value === "-") {
        result = firstInp - lastInp;
    } else if(event.value === "*") {
        result = firstInp * lastInp;
    } else if(event.value === "/") {
        result = firstInp / lastInp;
    }
    document.getElementById("result").innerHTML = result;
}
