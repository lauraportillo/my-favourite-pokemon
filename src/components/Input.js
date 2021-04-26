import React from 'react';
import '../stylesheets/Input.scss';

const Input = (props) => {
  const handleChange = (ev) => {
    props.handleName({
      key: 'name',
      value: ev.target.value,
    });
  };

  return (
    <>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name..."
        value={props.name}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
