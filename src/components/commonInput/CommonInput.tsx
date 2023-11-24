import "./commonInput.scss";

interface CommonInputType {
  title?: string;
  placeholder?: string;
  value: string;
  onChange: any;
  ifSecret?: boolean;
  inputStyle?: "default" | "valid" | "inValid";
  validAlertMessage?: string;
  inValidAlertMessage?: string;
}

function CommonInput({
  title,
  placeholder,
  value,
  onChange,
  ifSecret,
  inputStyle = "default",
  validAlertMessage,
  inValidAlertMessage,
}: CommonInputType) {
  let alertMessage: string | undefined = "";
  switch (inputStyle) {
    case "default":
      alertMessage = "";
      break;
    case "valid":
      alertMessage = validAlertMessage;
      break;
    case "inValid":
      alertMessage = inValidAlertMessage;
      break;
    default:
      alertMessage = "";
  }

  return (
    <div>
      <div className="text-body3 common-input__title">{title}</div>
      <input
        className={`text-body1 common-input ${inputStyle}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={ifSecret ? "password" : "text"}
      />
      <div className={`text-body3 common-input__alert-message ${inputStyle}`}>
        {alertMessage}
      </div>
    </div>
  );
}

export default CommonInput;
