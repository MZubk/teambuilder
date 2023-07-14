import "./DropdownList.css";

const DropdownList = ({
  label,
  onAltered,
  required,
  value,
  items,
  placeholder,
}) => {
  return (
    <div className="dropdown__list">
      <label className="dropdown_label">{label}</label>
      <select
        className="dropdown_select"
        onChange={(event) => onAltered(event.target.value)}
        required={required}
        value={value}
      >
        <option disabled value="" className="dropdown_option">
          {placeholder}
        </option>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
