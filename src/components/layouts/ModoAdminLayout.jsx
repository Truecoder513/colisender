import { useState } from "react";
import ModoAdminDashboardHearder from "../header/ModoAdminDashboardHearder";
import ModoAdminNavBar from "./components/ModoAdminNavBar";

/* eslint-disable react/prop-types */
const ModoAdminLayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <ModoAdminDashboardHearder setShowMenu={setShowMenu} />
      <div className={`adminModoLayout ${showMenu ? "stopSticky" : ""}`}>
        <div className={`left ${showMenu ? "showMenu" : ""}`}>
          <ModoAdminNavBar setShowMenu={setShowMenu} />
        </div>
        <div className="right">{children}</div>
      </div>
    </div>
  );
};

export default ModoAdminLayout;
