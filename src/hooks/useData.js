import { useState, useEffect } from "react";
// constants
import { URL } from "../constants/url";
// assets
import img1 from "../assets/img/Panos_pizza.png";
import img2 from "../assets/img/Sbarro.png";
import img3 from "../assets/img/pizzeria_camion.png";
import img4 from "../assets/img/voglia_di_pizza.png";
import img5 from "../assets/img/stroller_pizza.png";
import img6 from "../assets/img/trulli.png";
import img7 from "../assets/img/panos_pizza_1.png";
import img8 from "../assets/img/pizzeria_camion_pizza.png";
import img9 from "../assets/img/sbarro_pizza.png";
import img10 from "../assets/img/stroller_pizza_1.png";
import img11 from "../assets/img/trulli_pizza.png";
import img12 from "../assets/img/vogliadipizza_pizza.png";

export default function useData() {
  // data
  const [isState, setIsState] = useState({
    loading: false,
    users: [],
    stores: [],
    userLogged: {},
  });

  const imageList = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
  };

  const imageProduct = {
    1: img7,
    2: img8,
    3: img9,
    4: img10,
    5: img11,
    6: img12,
  };

  console.log("isState", isState);

  // actions
  const getData = () => {
    setIsState({
      ...isState,
      loading: true,
    });
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setIsState({
          ...isState,
          ...res.response,
          loading: false,
        });
      })
      .catch((error) => {
        setIsState({
          ...isState,
          loading: false,
        });
        console.log("Este es el error", error);
      });
  };

  const validateUser = (user) => {
    if (!user.email || !user.password) return false;

    const isUser = isState.users.filter((e) => e.email === user.email);
    const isValidateUser =
      isUser.length !== 0 && isUser[0].password === user.password;

    isValidateUser &&
      setIsState({
        ...isState,
        userLogged: isUser[0],
      });

    return isValidateUser;
  };

  const filterStore = (storeId) => {
    return isState.stores.filter((store) => store.id === parseInt(storeId));
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    // data
    isState,
    imageList,
    imageProduct,
    // actions
    getData,
    validateUser,
    filterStore,
  };
}
