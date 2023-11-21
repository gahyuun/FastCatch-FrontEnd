import "./commonInput.scss";

interface CommonInputType {
  title?: string;
  placeholder?: string;
  value: string;
  onChange: any;
  ifSecret?: boolean;
}

function CommonInput({
  title,
  placeholder,
  value,
  onChange,
  ifSecret,
}: CommonInputType) {
  return (
    <>
      <div className="common-input-title">{title}</div>
      <input
        className="common-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={ifSecret ? "password" : "text"}
      />
    </>
  );
}

export default CommonInput;
