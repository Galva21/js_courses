//async await
const obtener3= async () => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await res.json()
        console.log(data.results)
        let poke = data.results.filter(poke => poke.name === 'bulbasur')
        console.log(poke)
    } catch (error) {
        console.log(error)
    }
}

obtener3();