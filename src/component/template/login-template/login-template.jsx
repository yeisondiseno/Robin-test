import "./login-template.scss";
// router
import { useNavigate } from "react-router-dom";
// libraries
import { useForm } from "react-hook-form";
// components
import Img from "../../atoms/img/Img";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
// assets
import LogoImg from "../../../assets/img/Login-Best-Pizza.png";
import userImg from "../../../assets/img/ic_usuario.png";
import passwordImg from "../../../assets/img/ic_contrasea.png";

const LoginTemplate = () => {
  // hooks
  const { register, handleSubmit, errors } = useForm();

  // route
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/products");
  };

  return (
    <section className="t-login">
      <Img src={LogoImg} alt="Best pizza logo " width="200" />
      <h1>Bien venido</h1>
      <p>A las mejores pizzas del país</p>

      <form className="t-login__form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Usuario"
          icon={<Img src={userImg} alt="User icon" width="25" />}
        />
        <Input
          label="Contraseña"
          type="password"
          icon={<Img src={passwordImg} alt="User icon" width="25" />}
        />
        <Button title="¿Olvidaste tu contraseña?" classes="flat" />
        <Button title="Iniciar sesión" type="submit" />
      </form>
    </section>
  );
};

export default LoginTemplate;
