import "./Button.css";

export const Button = ({
  buttonName,
  additionalClassName = "",
  onClick,
  disabled = false,
}) => {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => onClick(true)}
        className={`button ${additionalClassName}`}
      >
        {buttonName}
      </button>
    </div>
  );
};
