let nombre = "Priscila";

let numeros = [];

for (let index = 0; index < 10; index++) {
    numeros.push(index + 1);
}

console.log(numeros);


let ul = document.querySelector('ul');
let lis = ul.querySelectorAll('li');


let lis2 = document.querySelectorAll('li');

console.log(lis);
console.log(lis);

let li = document.createElement('LI');
li.innerHTML = "Hola Priscila";

ul.appendChild(li); // añadir

let newUl = document.createElement('ul');
for (let i = 0; i < 5; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = `Soy un nuevo Li ${i+1}`;
    newUl.appendChild(newLi);
    document.body.appendChild(newUl);
}