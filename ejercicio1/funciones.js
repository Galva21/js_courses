function sumar(num1, num2) {
    console.log(num1 + num2);
}
sumar(10, 20);

const sumarDos1 = (num1, num2) => {
    console.log(num1 + num2);
};
sumarDos1(10, 50);

const sumarDos2 = (num1) => {
    console.log(num1);
};
sumarDos2(10);

const sumarDos3 = (num1) => {
    return num1;
};
console.log(sumarDos3(10));

const sumarDos4 = (num1) => num1;
console.log(sumarDos4(10));

const sumar5 = (num1, num2) => {
    return "la suma es: " + (num1 + num2);
};
let resultado6 = sumar5(10, 20);
console.log(resultado6);

const sumar7 = (num1, num2) => "la suma es: " + (num1 + num2);
let resultado7 = sumar7(10, 20);
console.log(resultado7);

const sumar8 = (num1 = 10) => "la suma es: " + (num1 + 20);
let resultado8 = sumar8();
console.log(resultado8);
