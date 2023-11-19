/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: localStorage.getItem("coliToken") ? true : false,
    authInfos: null,
    authToken: null,
    verified: false,
  });
  const [modal, setModalData] = useState({
    show: false,
    modalContent: null,
  });

  const contexValue = {
    auth,
    setAuth,
    setModalData,
    modal,
  };
  return (
    <AppContext.Provider value={contexValue}>{children}</AppContext.Provider>
  );
};

export default AppContext;
