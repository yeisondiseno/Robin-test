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

const LoginTemplate = (props) => {
  const { validateUser } = props;

  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // route
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("data", data);
    validateUser(data);
    // navigate("/products");
  };

  return (
    <section className="t-login">
      <Img src={LogoImg} alt="Best pizza logo " width="200" />
      <h1>Bien venido</h1>
      <p>A las mejores pizzas del país</p>

      <form className="t-login__form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Usuario"
          name="email"
          type="email"
          icon={<Img src={userImg} alt="User icon" width="25" />}
          errors={errors}
          autoComplete={false}
          required
          register={register}
        />
        <Input
          label="Contraseña"
          name="password"
          type="password"
          icon={<Img src={passwordImg} alt="User icon" width="25" />}
          errors={errors}
          autoComplete={false}
          required
          register={register}
        />
        <Button title="¿Olvidaste tu contraseña?" classes="flat" />
        <Button title="Iniciar sesión" type="submit" />
      </form>
    </section>
  );
};

export default LoginTemplate;
