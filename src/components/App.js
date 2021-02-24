import React, { useState } from 'react';
import PokeList from './PokeList';
import '../stylesheets/App.css';
import data from '../data/data.json';

const App = () => {
  const [pokemons] = useState(data);
  return (
    <div>
      <h1>Mi lista de pokemon</h1>
      <PokeList pokemons={pokemons} />
    </div>
  );
};

export default App;
