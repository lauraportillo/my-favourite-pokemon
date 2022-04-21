import { pokemonApi } from "../services/pokemonApi"


// export const fetchAllPokemons = async () => {
//     const resp = await pokemonApi.get('/pokemon?limit=1500');
//     console.log(resp);

//     return resp.data.results.map((poke) => {
//         const pokeArr = poke.url.split('/');
//         const id = pokeArr[6];
//         const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
//         return {
//             id,
//             pic,
//             name: poke.name,
//         };
//     });
// }

// fetchAllPokemons returns the transformed array


// // CON ESTA SOLUCION YA DEVUELVE TODOS LOS POKEMONS****************************************************
// export const fetchAllPokemons = async () => {
//     const resp = await pokemonApi.get('/pokemon?limit=1500');
//     console.log(resp);

//     return resp.data.results.map(async (poke) => {
//         const pokeArr = poke.url.split('/');
//         const id = pokeArr[6];
//         const respPokemon = await pokemonApi.get(`/pokemon/${id}/`);
//         console.log(respPokemon);
//         return {
//             id: poke.data.id,
//             pic: poke.data.sprites.front_default,
//             name: poke.data.name,
//         };

//     });
// }



export const fetchAllPokemons = async () => {
    const resp = await pokemonApi.get('/pokemon?limit=1500');
    console.log(resp);

    return resp.data.results.map(async (poke) => {
        const pokeArr = poke.url.split('/');
        const id = pokeArr[6];
        const respPokemon = await pokemonApi.get(`/pokemon/${id}/`);
        console.log(respPokemon);
        return {
            id,
            pic: respPokemon.data.sprites.front_default,
            name: respPokemon.data.name,
        };

    });
}
