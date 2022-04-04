import React from 'react';
import '../stylesheets/Input.scss';

const Input = (props) => {
  const handleChange = (ev) => {
    props.handleName({
      key: 'userName',
      value: ev.target.value,
    });
  };

  return (
    <>
      <input
        className="form__input"
        type="text"
        userName="userName"
        id="userName"
        placeholder="Enter your name..."
        value={props.userName}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
