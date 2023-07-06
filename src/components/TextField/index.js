import "./TextField.css";

const TextField = (props) => {
  const placeholderModified = `${props.placeholder}...`;

  const onTyped = (event) => {
    props.onAltered(event.target.value);
  };

  return (
    <div className="text__field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onTyped}
        required={props.required}
        placeholder={placeholderModified}
      />
    </div>
  );
};

export default TextField;
