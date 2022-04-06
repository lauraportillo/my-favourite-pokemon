import '../stylesheets/Form.scss';

const ResetButton = (props) => {
  const handleReset = () => {
    props.handleReset();
  };

  return (
    <>
      <button className="form__reset" onClick={handleReset}>
        <i className="far fa-trash-alt reset__icon"></i>
      </button>
    </>
  );
};

export default ResetButton;
