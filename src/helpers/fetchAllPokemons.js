import { pokemonApi } from "../services/pokemonApi"

export const fetchAllPokemons = async () => {
    const resp = await pokemonApi.get('/pokemon?limit=1500');

    return await Promise.all(resp.data.results.map(async (poke) => {
        const pokeArr = poke.url.split('/');
        const id = pokeArr[6];
        const respPokemon = await pokemonApi.get(`/pokemon/${id}/`);
        console.log(respPokemon);
        return {
            id,
            pic: respPokemon.data.sprites.front_default,
            name: respPokemon.data.name,
        };
    }));
}