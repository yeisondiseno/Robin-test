import "./layout.scss";
// atoms
import Img from "../../atoms/img/Img";
// assets
import pizzaImg from "../../../assets/img/Pizza.png";
import logoWhiteImg from "../../../assets/img/Logo.png";

const Layout = (props) => {
  const { children } = props;

  return (
    <main className="o-layout">
      <section className="o-layout__img">
        <header>
          <Img
            classes="o-layout__img__desk"
            src={logoWhiteImg}
            atl="Logo pizza"
            width="80"
          />
          <Img
            classes="o-layout__img__mobile"
            src={logoWhiteImg}
            atl="Logo pizza"
            width="40"
          />
        </header>
        <div className="o-layout__img__center">
          <Img src={pizzaImg} width="350" atl="Pizza" />
        </div>
      </section>
      <section className="o-layout__cont">{children}</section>
    </main>
  );
};

export default Layout;
