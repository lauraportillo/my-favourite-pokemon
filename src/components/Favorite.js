import React from 'react';
import Form from './Form';
import '../stylesheets/Favorite.scss';

const Favorite = (props) => {
  return (
    <div className="fav">
      <div className="fav__containerStar">
        <div className="fav__containerStar--start"></div>
      </div>
      <Form />
    </div>
  );
};

export default Favorite;
