import Input from './Input';
import FilterByName from './FilterByName';
import ResetButton from './ResetButton';
import '../stylesheets/Form.scss';

const Form = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="form">
      <Input handleName={props.handleName} username={props.username} />
      <FilterByName handleFilter={props.handleFilter} name={props.name} />
      <ResetButton handleReset={props.handleReset} />
      <h3 className="subtitle"> choose your favorite one!</h3>
    </form>
  );
};

export default Form;
