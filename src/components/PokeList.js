import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const renderPokemon = this.props.pokemons.map((pokemon) => {
      // pintar un listado
      return (
        <li key={pokemon.id} id={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      );
    });

    return (
      <div>
        <ul>{renderPokemon}</ul>
      </div>
    );
  }
}

export default PokeList;

// // FUNCIONAL
// import React, { useState } from 'react';
// import Pokemon from './Pokemon';

// function PokeList(props) {
//   console.log(props);
//   const renderPokemon = () => {
//     // pintar un listado
//     return props.pokemons.map((pokemon) => {
//       return (
//         <li key={pokemon.id} id={pokemon.id}>
//           <Pokemon pokemon={pokemon} />
//         </li>
//       );
//     });
//   };

//   return (
//     <div>
//       <ul>{renderPokemon}</ul>
//     </div>
//   );
// }

// export default PokeList;
