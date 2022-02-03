// template string
const numero = (num) => {
    return "el numero es: " + num;
};
const resultado = numero(10);
console.log(resultado);

const numero2 = (num) => {
    return `el numero es: ${num}`;
};
const resultado2 = numero2(10);
console.log(resultado2);

const numero3 = (num1, num2) => {
    return `el numero es: ${num1 + num2}`;
};
const resultado3 = numero3(10, 20);
console.log(resultado3);
