import "./Button.css";

export const Button = ({ buttonName, additionalClassName = "", onClick }) => {
  return (
    <div>
      <button
        onClick={() => onClick(true)}
        className={`button ${additionalClassName}`}
      >
        {buttonName}
      </button>
    </div>
  );
};
