/* eslint-disable react/prop-types */
import { useLocation } from "react-router";
import {
  EnveloppeIcon,
  IonNotifications,
  MenuBurguer,
} from "../../assets/icons/icons";
import { Img } from "../../kits/kits";

const routesName = {
  "/": "Dashboard",
  "/annoncemments": "Annonces",
  "/members": "Membres",
  "/deals": "Deals",
  "/ads": "Ads",
  "/settings": "Paramètre",
};

const ModoAdminDashboardHearder = ({ setShowMenu }) => {
  const { pathname } = useLocation();
  return (
    <div className="adminModoHeader">
      <span className="pageName">{routesName[pathname]}</span>
      <div className="right">
        <span className="notif">
          <IonNotifications />
          <span className="count">3</span>
        </span>
        <span className="notif">
          <EnveloppeIcon />
          <span className="count">3</span>
        </span>
        <Img image={"user.jpeg"} alt={"user image"} />
        <span>Alex Jones</span>
      </div>
      <div className="menu" onClick={() => setShowMenu((prev) => !prev)}>
        <MenuBurguer />
      </div>
    </div>
  );
};

export default ModoAdminDashboardHearder;
