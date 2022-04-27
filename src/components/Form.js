import Input from './Input';
import FilterByName from './FilterByName';
import ResetButton from './ResetButton';
import PrintButton from './PrintButton';
import '../stylesheets/Form.scss';


const Form = ({ handleName, username, handleFilter, name, handleReset, handlePrint }) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="form">
      <div className="form__div">
        <Input handleName={handleName} username={username} />
        <FilterByName handleFilter={handleFilter} name={name} />
      </div>
      <div className="form__div">
        <ResetButton handleReset={handleReset} />
        <PrintButton handlePrint={handlePrint} />
      </div>
    </form>
  );
};

export default Form;
