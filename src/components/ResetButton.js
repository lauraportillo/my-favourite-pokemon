import React from 'react';
import '../stylesheets/ResetButton.scss';

const ResetButton = (props) => {
  const handleReset = () => {
    props.handleReset();
  };

  return (
    <>
      <button className="reset" onClick={handleReset}>
        <i className="far fa-trash-alt reset__icon"></i>
      </button>
    </>
  );
};

export default ResetButton;
