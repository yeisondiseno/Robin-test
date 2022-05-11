import "./card.scss";
// components
import Img from "../../atoms/img/Img";

const Card = (props) => {
  const { title = "", direction = "", image = false } = props;
  return (
    <button className="m-card">
      {image && <Img src={image} alt={title} classes="m-card__img" />}
      {title && <h4>{title}</h4>}
      {direction && <small>{direction}</small>}
    </button>
  );
};

export default Card;
