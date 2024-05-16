import { FilterInputCSS } from "./Home.styled";

const FilterInput = ({ label, onChange, id, value, ...props }) => {
  return (
    <div className="wrapper-input">
      <label htmlFor={id}>{label}</label>
      <FilterInputCSS id={id} onChange={onChange} value={value} {...props} />
    </div>
  );
};

export default FilterInput;
