const edad = 10
//const edad = 20 // SyntaxError

edad = 20 // Error: "edad" is read-only

//const edad = 10
    if(true){
        const edad = 20
        console.log(edad) // 20
    }
console.log(edad) // 10