/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: localStorage.getItem("coliToken") ? true : false,
    verified: localStorage.getItem("colisAccountActive") ? true : false,
    authInfos: null,
    authToken: null,
  });
  const [modal, setModalData] = useState({
    show: false,
    modalContent: null,
    large: false,
  });

  const handeShowModal = (show, content = null, large = false) => {
    if (show === "show") {
      setModalData({
        show: true,
        modalContent: content,
        large: large,
      });
    } else {
      setModalData({
        show: false,
        modalContent: null,
        large: false,
      });
    }
  };

  const contexValue = {
    auth,
    setAuth,
    handeShowModal,
    modal,
  };
  return (
    <AppContext.Provider value={contexValue}>{children}</AppContext.Provider>
  );
};

export default AppContext;
