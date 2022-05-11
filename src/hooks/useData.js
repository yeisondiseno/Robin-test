import { useState, useEffect } from "react";
// constants
import { URL } from "../constants/url";

export default function useData() {
  // data
  const [isState, setIsState] = useState({
    loading: false,
    users: [],
    stores: [],
  });

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
    console.log("isUser", isUser, isValidateUser);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    // data
    isState,
    // actions
    getData,
    validateUser,
  };
}
