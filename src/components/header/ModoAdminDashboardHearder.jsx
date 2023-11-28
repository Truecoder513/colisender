/* eslint-disable react/prop-types */
import {
  EnveloppeIcon,
  IonNotifications,
  MenuBurguer,
} from "../../assets/icons/icons";
import { Img } from "../../kits/kits";

const ModoAdminDashboardHearder = ({ setShowMenu }) => {
  return (
    <div className="adminModoHeader">
      <span className="pageName">Dashbaord</span>
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
      <div className="menu" onClick={() => setShowMenu(true)}>
        <MenuBurguer />
      </div>
    </div>
  );
};

export default ModoAdminDashboardHearder;
