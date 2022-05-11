import "./footer.scss";
// components
import Img from "../../atoms/img/Img";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// assets
import logoFooterImg from "../../../assets/img/Best Pizza.png";

const Footer = () => {
  return (
    <footer className="m-footer">
      <div className="m-footer__icons">
        <FontAwesomeIcon icon={faFacebookSquare} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <Img src={logoFooterImg} alt="Logo Pizza Footer" width="40" />
    </footer>
  );
};

export default Footer;
