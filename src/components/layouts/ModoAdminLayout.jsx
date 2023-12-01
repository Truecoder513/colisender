import { useContext, useState } from "react";
import ModoAdminDashboardHearder from "../header/ModoAdminDashboardHearder";
import ModoAdminNavBar from "./components/ModoAdminNavBar";
import ModoListBar from "./components/ModoListBar";
import AppContext from "../../context/AppContext";
import { useLocation } from "react-router";

/* eslint-disable react/prop-types */
const ModoAdminLayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { auth } = useContext(AppContext);
  const { pathname } = useLocation();

  return (
    <div>
      <ModoAdminDashboardHearder setShowMenu={setShowMenu} />
      <div className={`adminModoLayout ${showMenu ? "stopSticky" : ""}`}>
        <div className={`left ${showMenu ? "showMenu" : ""}`}>
          <ModoAdminNavBar setShowMenu={setShowMenu} />
        </div>
        <div
          className={`right ${
            auth.authInfos.role === "admin" && pathname !== "/conseiller"
              ? "separate"
              : ""
          }`}
        >
          {auth.authInfos.role === "admin" && pathname !== "/conseiller" && (
            <ModoListBar />
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModoAdminLayout;
