import Input from './Input';
import FilterByName from './FilterByName';
import ResetButton from './ResetButton';
import PrintButton from './PrintButton';
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
      <PrintButton />
    </form>
  );
};

export default Form;
