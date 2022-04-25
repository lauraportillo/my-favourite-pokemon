import '../stylesheets/Form.scss';

const Input = (props) => {
  const handleChange = (ev) => {
    props.handleName({
      key: 'username',
      value: ev.target.value,
    });
  };

  return (
    <>
      <input
        className="form__input"
        type="text"
        username="username"
        id="username"
        placeholder="Enter your name..."
        value={props.username}
        onChange={handleChange}
        maxLength="15"
      />
    </>
  );
};

export default Input;
