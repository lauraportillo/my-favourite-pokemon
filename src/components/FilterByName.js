import '../stylesheets/FilterByName.scss';

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
        className="containerFilter__name"
        type="text"
        name="name"
        id="name"
        placeholder="Find your pokemon..."
        //estado sincronizado con el input: pinto el estado en el input abuela-madre-nieta
        value={props.name}
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByName;
