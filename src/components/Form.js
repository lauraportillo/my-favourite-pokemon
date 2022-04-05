import Input from './Input';
import FilterByName from './FilterByName';
import '../stylesheets/Form.scss';

const Form = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="form">
      <Input handleName={props.handleName} username={props.username} />
      <FilterByName />
    </form>
  );
};

export default Form;
