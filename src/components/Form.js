import React from 'react';
import Input from './Input';
import '../stylesheets/Form.scss';

const Form = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="form">
      <Input handleName={props.handleName} username={props.username} />
    </form>
  );
};

export default Form;
