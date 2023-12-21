export default async function AddNewTenPokemons (count) {
    const newTenPokemons = await fetch(`https://pokeapi.co/api/v2/ability/?limit=${count}&offset=${count+10}.`)
    const response = await newTenPokemons.json();
    return response.results
}