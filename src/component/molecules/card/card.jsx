import "./card.scss";
// router
import { useNavigate } from "react-router-dom";
// components
import Img from "../../atoms/img/Img";

const Card = (props) => {
  const { title = "", direction = "", image = false, id = "" } = props;

  // route
  const navigate = useNavigate();

  // actions
  const goToProduct = () => {
    navigate(`/products/${id}`);
  };

  return (
    <button
      className="m-card"
      onClick={() => goToProduct()}
      style={{ animationDelay: `0.${id}s` }}
    >
      {image && (
        <Img src={image} alt={title} classes="m-card__img" width="200" />
      )}
      {title && <h4>{title}</h4>}
      {direction && <small>{direction}</small>}
    </button>
  );
};

export default Card;
