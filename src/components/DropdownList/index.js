import "./DropdownList.css";

const DropdownList = (props) => {
  return (
    <div className="dropdown__list">
      <label className="dropdown_label">{props.label}</label>
      <select
        className="dropdown_select"
        onChange={(event) => props.onAltered(event.target.value)}
        required={props.required}
        value={props.value}
      >
        <option disabled value="" className="dropdown_option">
          {props.placeholder}
        </option>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
