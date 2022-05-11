import { useParams } from "react-router-dom";
// template
import ProductInsideTemplate from "../template/product-inside-template/product-inside-template";

const ProductInside = (props) => {
  const { store } = useParams();

  return <ProductInsideTemplate {...props} store={store} />;
};

export default ProductInside;
