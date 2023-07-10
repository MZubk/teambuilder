import "./TextField.css";

const TextField = (props) => {
  const placeholderModified = `${props.placeholder}...`;

  const onTyped = (event) => {
    props.onAltered(event.target.value);
  };

  return (
    <div className="text_field">
      <label className="text_field-label">{props.label}</label>
      <input
        className="text_field-input"
        value={props.value}
        onChange={onTyped}
        required={props.required}
        placeholder={placeholderModified}
      />
    </div>
  );
};

export default TextField;
