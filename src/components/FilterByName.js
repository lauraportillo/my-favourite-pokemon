import '../stylesheets/Form.scss';

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value,
    });
  };
  return (
    <>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        placeholder="Find your pokemon..."
        value={props.name}
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByName;
