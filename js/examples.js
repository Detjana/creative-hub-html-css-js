let x = 1.23456789;

console.log(x);
console.log(x.toString());
console.log(x.toExponential(12));
console.log(x.toFixed(3));
console.log(x.toPrecision(3));
console.log(x.valueOf(0));

console.log(Number(x));
console.log(parseFloat(x));
console.log(parseInt(x));

const students = ["Don", "Joe", "Mike"];
const numbers = [1, 2, 3];
console.log(students);
console.log(students[0]);
console.log(numbers);


console.log(students.length);

console.log(students[students.length - 1]);

const menu = ["Home", "About Us", "Services", "Portfolio", "Blog", "Contact Us", "Services"];

console.log(menu);

let menuItems = "";

menu.forEach(i => {
    menuItems += "<a href='' class='block__third_title nav__item'>" + menu[i] + "</a>";
});
document.getElementById("header__nav").innerHTML = menuItems
console.log(menuItems);

const servicesMenu = menu.filter(iterateItems)

function iterateItems(item) {
    return item === "Services";
}

const findItem = menu.find(iterateItems);
console.log('find', findItem);
console.log("new menu", servicesMenu);

const stringNums = [3, 1, 5, 2, 4];
const filterNumbers = stringNums.filter(filterNum);

function filterNum(num) {
    return num <= 3 && num >= 2;
}

console.log("filter nums",filterNumbers);

const findIndex = stringNums.findIndex(filterNum);

console.log("finIndex", findIndex)

menu.forEach(addMenuItems)

function addMenuItems(i) {
    menuItems += "<a href='' class='block__third_title nav__item'>" + menu[i] + "</a>";
}

console.log(menuItems)

const menuIncludes = menu.includes("Services");

console.log("menuIncludes",menuIncludes)

const mapItems = stringNums.map(addTwoIntoElements);

function addTwoIntoElements(number) {
    return number + 2;
}

console.log("mapItems",mapItems);

console.log(menu);
menu.sort();
console.log(menu);
console.log(stringNums);
stringNums.sort()
console.log(stringNums);

console.log(menu);
menu.reverse();
console.log(menu);
console.log(stringNums);
stringNums.reverse()
console.log(stringNums);