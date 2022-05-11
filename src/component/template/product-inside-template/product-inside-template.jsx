import "./product-inside-template.scss";
// components
import Img from "../../atoms/img/Img";
import CardProduct from "../../molecules/card-product/card-product";

const ProductInsideTemplate = (props) => {
  const { store, filterStore, imageList, imageProduct } = props;

  const data = filterStore(store)[0] || false;

  return (
    <section className="t-product__inside">
      <header className="t-product__inside__header">
        <Img src={imageList[store]} alt={data.name} width="100" />
        <div className="t-product__inside__header__text">
          <h2> {data.name}</h2>
          <p>{data.description}</p>
          <small>{data.address}</small>
        </div>
      </header>
      <div className="t-product__inside__body">
        {data.products &&
          data.products.map((product) => (
            <CardProduct
              key={product.id}
              title={product.name}
              image={imageProduct[product.id]}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductInsideTemplate;
