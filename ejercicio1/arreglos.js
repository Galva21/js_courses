var edades = [10, 20, 30];
var edades = [10, 20, 30, 40];
console.log(edades); // 10 20 30 40

let edades = [10, 20, 30];
edades = [10, 20, 30, 40];
console.log(edades); // 10 20 30 40

const edades = [10, 20, 30];
edades = [10, 20, 30, 40];
console.log(edades); //error

const edades = [10, 20, 30];
edades.push(40);
console.log(edades); // 10 20 30 40

const persona = {
    nombre: "juanito",
    edad: 20,
};

persona.edad = 21;
persona.pais = "México";

console.log(persona); //{nombre: "juanito", edad: 21, pais: "México"}