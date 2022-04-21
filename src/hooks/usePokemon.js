import { useState, useEffect } from 'react';
import { fetchAllPokemons } from '../helpers/fetchAllPokemons';

export const usePokemon = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);

    console.log(pokemons);

    useEffect(() => {
        fetchAllPokemons()
            .then(pokemons => {
                setIsLoading(false);
                setPokemons(pokemons);
            })
    }, [])

    return {
        isLoading,
        pokemons
    }
};