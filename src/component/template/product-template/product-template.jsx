import "./product-template.scss";
// components
import Footer from "../../molecules/footer/footer";
import Card from "../../molecules/card/card";

const ProductTemplate = () => {
  return (
    <section className="t-product">
      <header className="t-product__header">
        <h2>Tiendas</h2>
        <p>Escoge tu pizzería favorita.</p>
      </header>
      <div className="t-product__body"></div>
      <Footer />
    </section>
  );
};

export default ProductTemplate;
