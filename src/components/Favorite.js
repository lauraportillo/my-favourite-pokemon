import React from 'react';
import '../stylesheets/Favorite.scss';

const Favorite = (props) => {
  return (
    <div className="containerFav">
      <div className="fav">
        <div className="fav__star"></div>
        <div className="fav__text">
          <span className="fav__text--line">{props.name || 'Nombre Apellidos'}</span>
          <span className="fav__text--line">would be</span>
          <span className="fav__text--line myPoke">Favorite Pokemon</span>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
