import React from 'react';
import '../stylesheets/Favorite.scss';

const Favorite = () => {
  return (
    <div className="fav">
      <div className="fav__containerStar">
        <div className="fav__containerStar--start"></div>
      </div>

      <form className="fav__form">
        <input
          className="fav__form--input"
          placeholder="Enter you name..."
          id="name"
          type="text"
          name="name"
          required
        />
      </form>

      <h3 className="fav__subtitle"> and choose your favorite one!</h3>
    </div>
  );
};

export default Favorite;
