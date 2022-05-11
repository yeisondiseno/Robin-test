import "./product-template.scss";
// components
import Footer from "../../molecules/footer/footer";
import Card from "../../molecules/card/card";
// assets
import img1 from "../../../assets/img/Panos_pizza.png";
import img2 from "../../../assets/img/Sbarro.png";
import img3 from "../../../assets/img/pizzeria_camion.png";
import img4 from "../../../assets/img/voglia_di_pizza.png";
import img5 from "../../../assets/img/stroller_pizza.png";
import img6 from "../../../assets/img/trulli.png";

const ProductTemplate = (props) => {
  const {
    isState: { stores },
  } = props;

  const imageList = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
  };

  console.log("stores", stores);

  return (
    <>
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
              />
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductTemplate;
