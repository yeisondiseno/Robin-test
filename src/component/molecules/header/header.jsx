import "./header.scss";
// router
import { useNavigate } from "react-router-dom";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const { title, goBack = false } = props;

  // router
  const navigate = useNavigate();

  return (
    <header className="m-header">
      <div className="m-header__title">
        {goBack && (
          <button onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )}
        {title && <span>{title}</span>}
      </div>
      <button onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faLock} />
        Salir
      </button>
    </header>
  );
};

export default Header;
