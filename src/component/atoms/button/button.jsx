import "./button.scss";

const Button = (props, ref) => {
  const {
    title,
    onClick,
    type = "button",
    classes,
    disabled,
    icon,
    iconSVG,
    testId,
    uppercase,
  } = props;

  const content = (
    <>
      {title}
      {icon && <i className={icon} />}
      {iconSVG || null}
    </>
  );

  return (
    <button
      data-testid={testId}
      type={type}
      className={`
						a-button 
						${disabled ? "disabled" : ""} 
						${classes || ""}
						${uppercase ? "uppercase" : ""}
					`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
