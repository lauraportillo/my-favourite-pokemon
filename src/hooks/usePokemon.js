import { useState, useEffect } from 'react';
import { fetchAllPokemons } from '../helpers/fetchAllPokemons';

export const usePokemon = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchAllPokemons();
    }, [])

    return isLoading;
}