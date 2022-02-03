//fetch
fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)
        data.results.forEach(e => {
            console.log(e.name)
        });
    });

//async await
const obtener = async () => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await res.json()
        console.log(data.results)
    } catch (error) {
        console.log(error)
    }
}

obtener();

//fetch
fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => {
        let arrayNombre = []
        data.results.forEach(e=>{
            arrayNombre.push(e);
        })
        console.log(arrayNombre)
    });