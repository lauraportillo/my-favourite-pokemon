import React from 'react';
import '../stylesheets/Favorite.scss';
import image from '../images/pokemonBall.png';

const Favorite = ({ name, pokemon }) => {


  return (
    <div className="containerFav">
      <div className="fav">
        <div className="fav__star">
          <img className="fav__star--image" src={pokemon?.sprites?.front_default || image} alt="my favorite pokemon" />
        </div>
        <div className="fav__text">
          <span>{name || 'Full Name'}</span>
          <span className="fav__text--favPoke">{pokemon.name || 'Favorite Pokemon'}</span>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
