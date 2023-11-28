import { Link, useNavigate } from "react-router-dom";
import { Img } from "../../kits/kits";
import { authedRoutes } from "../../routes/routes";
import {
  CloseCircled,
  IonIosArrowDown,
  IonNotifications,
  MenuBurguer,
  UilPower,
} from "../../assets/icons/icons";
import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";

const MemberDashboardHeader = () => {
  const { setAuth } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="memberDashbordHeader">
        <Link to="/">
          <Img image={"logo.png"} alt={"logo"} className="logo" />
        </Link>
        <ul className="desktopRoutes">
          {authedRoutes.map(
            (routes) =>
              ["/annonces", "/settings", "/stats", "/apercu"].includes(
                routes.path
              ) && (
                <Link to={routes.path} key={routes.label}>
                  {routes.label}
                </Link>
              )
          )}
        </ul>
        <div className="right">
          <span className="notif">
            <IonNotifications />
            <span className="count">3</span>
          </span>
          <Img image={"user.jpeg"} alt={"user"} />
          <IonIosArrowDown />
        </div>

        <div className="menu" onClick={() => setShowMenu(true)}>
          <MenuBurguer />
        </div>
      </nav>
      <nav className={`mobile-menu ${showMenu ? "showMenu" : ""}`}>
        <div className="users-settings">
          <div className="content">
            <span className="notif">
              <IonNotifications />
              <span className="count">3</span>
            </span>
            <Img image={"user.jpeg"} alt={"user"} />
            <span>Alex Jones</span>
          </div>
          <div>
            <span
              onClick={() => {
                setAuth((prev) => ({ ...prev, isAuth: false }));
                localStorage.removeItem("coliToken");
                navigate("/");
              }}
            >
              <UilPower />
            </span>
            <span onClick={() => setShowMenu(false)}>
              <CloseCircled />
            </span>
          </div>
        </div>
        <ul className="desktopRoutes">
          {authedRoutes.map(
            (routes) =>
              ["/annonces", "/settings", "/stats", "/apercu"].includes(
                routes.path
              ) && (
                <li key={routes.label}>
                  <Link to={routes.path} onClick={() => setShowMenu(false)}>
                    {routes.label}
                  </Link>
                </li>
              )
          )}
        </ul>
        <ul className="otherLinks">
          {authedRoutes.map(
            (routes) =>
              [
                "/annoucementsHistory",
                "/profil",
                "/subscriptions",
                "/reports",
              ].includes(routes.path) && (
                <li key={routes.label}>
                  <Link to={routes.path} onClick={() => setShowMenu(false)}>
                    {routes.label}
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>
    </>
  );
};

export default MemberDashboardHeader;
