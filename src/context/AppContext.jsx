/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    authInfos: null,
    authToken: null,
  });

  const contexValue = {
    auth,
    setAuth,
  };
  return (
    <AppContext.Provider value={contexValue}>{children}</AppContext.Provider>
  );
};

export default AppContext;
