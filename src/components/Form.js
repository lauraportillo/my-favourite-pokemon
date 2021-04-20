import React from 'react';
import ResetButton from './ResetButton';
import Input from './Input';
import '../stylesheets/Form.scss';

const Form = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleForm} className="form">
        <Input />
        <ResetButton />
      </form>

      <h3 className="form__subtitle"> and choose your favorite one!</h3>
    </div>
  );
};

export default Form;
