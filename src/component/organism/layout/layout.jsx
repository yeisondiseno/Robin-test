import "./layout.scss";
// atoms
import Img from "../../atoms/img/Img";
// assets
import pizzaImg from "../../../assets/img/Pizza.png";
import logoWhiteImg from "../../../assets/img/Logo.png";

const Layout = ({ children }) => {
  return (
    <main className="o-layout">
      <section className="o-layout__img">
        <header>
          <Img src={logoWhiteImg} atl="Logo pizza" width="80" />
        </header>
        <div className="o-layout__img__center">
          <Img src={pizzaImg} width="350" atl="Pizza" />
        </div>
      </section>
      <section>{children}</section>
    </main>
  );
};

export default Layout;
