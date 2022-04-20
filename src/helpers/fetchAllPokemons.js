import { pokemonApi } from "../services/pokemonApi"


export const fetchAllPokemons = async () => {
    const resp = await pokemonApi.get('/pokemon?limit=1500');
    console.log(resp);

    return resp.data.results.map((poke) => {
        const pokeArr = poke.url.split('/');
        const id = pokeArr[6];
        const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return {
            id,
            pic,
            name: poke.name,
        };
    });
}


// fetchAllPokemons returns the transformed array


// export const fetchAllPokemons = async () => {
//     const resp = await pokemonApi.get('/pokemon?limit=1500');
//     console.log(resp);

//     return resp.data.results.map((poke) => {
//         const pokeArr = poke.url.split('/');
//         const id = pokeArr[6];
//         // TENDRIA QUE HACER AQUI OTRA LLAMADA A LA API PARA QUE ME DE TODA LA INFO DE CADA POKEMON, PERO NO SÉ CÓMO HACERLO
//         const fetchPokemonUrl = async () => {
//             const respPokemon = await pokemonApi.get(`/pokemon${id}/`);
//         }
//         return {
//         };
//     });
// }