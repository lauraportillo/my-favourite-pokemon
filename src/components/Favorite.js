import React from 'react';
import ResetButton from './ResetButton';
import '../stylesheets/Favorite.scss';

const Favorite = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleName({
      key: 'name',
      value: ev.target.value,
    });
  };
  return (
    <div className="fav">
      <div className="fav__containerStar">
        <div className="fav__containerStar--start"></div>
      </div>

      <form className="fav__form">
        <input
          className="fav__form--input"
          type="text"
          name="name"
          id="name"
          placeholder="Enter you name..."
          value={props.name}
          onChange={handleChange}
        />
        <ResetButton />
      </form>

      <h3 className="fav__subtitle"> and choose your favorite one!</h3>
    </div>
  );
};

export default Favorite;
