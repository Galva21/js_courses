//map
const obtener2 = async () => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await res.json()
        console.log(data.results)
        data.results.map(poke => console.log(poke.name))
    } catch (error) {
        console.log(error)
    }
}

obtener2();