import React from 'react';
import Form from './Form';
import '../stylesheets/Favorite.scss';

const Favorite = (props) => {
  return (
    <div className="containerFav">
      <div className="fav">
        <div className="fav__star"></div>
        <div className="fav__text">
          <span className="fav__text--line">Laura Portillo</span>
          <span className="fav__text--line">would be</span>
          <span className="fav__text--line">Favorite Pokemon</span>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Favorite;
