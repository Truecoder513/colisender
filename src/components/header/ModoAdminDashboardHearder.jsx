/* eslint-disable react/prop-types */
import { useContext } from "react";
import {
  EnveloppeIcon,
  IonNotifications,
  MenuBurguer,
} from "../../assets/icons/icons";
import { Img } from "../../kits/kits";
import AppContext from "../../context/AppContext";

const ModoAdminDashboardHearder = ({ setShowMenu }) => {
  const { auth } = useContext(AppContext);
  return (
    <div className="adminModoHeader">
      <Img image={"logo.png"} />
      <div className="right">
        {auth.authInfos.role === "modo" && (
          <span className="notif">
            <IonNotifications />
            <span className="count">3</span>
          </span>
        )}
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
