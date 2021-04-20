import React from 'react';
import Form from './Form';
import '../stylesheets/Favorite.scss';

const Favorite = (props) => {
  return (
    <div className="containerFav">
      <div className="fav">
        <div className="fav__star"></div>
        <div className="fav__text">
          <span>Laura Portillo</span>
          <span>would be</span>
          <span>Favorite Pokemon</span>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Favorite;
