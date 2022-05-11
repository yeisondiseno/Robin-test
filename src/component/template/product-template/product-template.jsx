import "./product-template.scss";
// components
import Card from "../../molecules/card/card";

const ProductTemplate = (props) => {
  const {
    isState: { stores },
    imageList,
  } = props;

  return (
    <section className="t-product">
      <header className="t-product__header">
        <h2>Tiendas</h2>
        <p>Escoge tu pizzería favorita.</p>
      </header>
      <div className="t-product__body">
        {stores &&
          stores.length > 0 &&
          stores.map((store) => (
            <Card
              key={store.id}
              title={store.name}
              direction={store.address}
              image={imageList[store.id]}
              id={store.id}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductTemplate;
