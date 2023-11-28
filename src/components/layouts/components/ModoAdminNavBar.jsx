/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { modoRoutes } from "../../../routes/routes";
import { Img } from "../../../kits/kits";
import {
  CloseCircled,
  EnveloppeIcon,
  IonNotifications,
  UilPower,
} from "../../../assets/icons/icons";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const ModoAdminNavBar = ({ setShowMenu }) => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AppContext);
  const { pathname } = useLocation();
  return (
    <nav className="modoAdminNav">
      <div className="content">
        <div>
          <span className="notif">
            <IonNotifications />
            <span className="count">3</span>
          </span>
          <span className="notif">
            <EnveloppeIcon />
            <span className="count">3</span>
          </span>
        </div>
        <div>
          <Img image={"user.jpeg"} alt={"user"} />
          <span>Alex Jones</span>
          <span onClick={() => setShowMenu(false)}>
            <CloseCircled />
          </span>
        </div>
      </div>
      <ul>
        <>
          {modoRoutes.map((route, index) => (
            <li key={route.path + index}>
              <Link
                to={route.path}
                className={pathname === route.path ? "activeRoute" : ""}
              >
                {route.label}
              </Link>
            </li>
          ))}
          <li>
            <span
              onClick={() => {
                setAuth((prev) => ({ ...prev, isAuth: false }));
                localStorage.removeItem("coliToken");
                navigate("/");
              }}
            >
              <UilPower />
              Deconnection
            </span>
          </li>
        </>
      </ul>
    </nav>
  );
};

export default ModoAdminNavBar;
