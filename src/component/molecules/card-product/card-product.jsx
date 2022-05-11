import "./card-product.scss";
// router
import { useNavigate } from "react-router-dom";
// components
import Img from "../../atoms/img/Img";

const CardProduct = (props) => {
  const { title = "", image = false, id } = props;

  return (
    <div className="m-card-product" style={{ animationDelay: `0.${id}s` }}>
      {image && (
        <Img
          src={image}
          alt={title}
          classes="m-card-product__img"
          width="200"
        />
      )}
      {title && <h4>{title}</h4>}
    </div>
  );
};

export default CardProduct;
