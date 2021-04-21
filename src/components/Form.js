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
        <Input handleName={props.handleName} name={props.name} />
        <ResetButton handleReset={props.handleReset} />
      </form>

      <h3 className="form__subtitle"> and choose your favorite one!</h3>
    </div>
  );
};

export default Form;
