/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { adminRoutes, modoRoutes } from "../../../routes/routes";
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
  const { auth, setAuth } = useContext(AppContext);
  const { pathname } = useLocation();
  return (
    <nav className="modoAdminNav">
      <div className="content">
        <div>
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
          {auth.authInfos.role === "modo"
            ? modoRoutes.map(
                (route, index) =>
                  !["annoncesDetails", "membersDetails"].includes(
                    route.label
                  ) && (
                    <li key={route.path + index}>
                      <Link
                        to={route.path}
                        className={pathname === route.path ? "activeRoute" : ""}
                      >
                        {route.label}
                      </Link>
                    </li>
                  )
              )
            : auth.authInfos.role === "admin" &&
              adminRoutes.map(
                (route, index) =>
                  ![
                    "annoncesDetails",
                    "membersDetails",
                    "conseillerWorks",
                  ].includes(route.label) && (
                    <li key={route.path + index}>
                      <Link
                        to={route.path}
                        className={pathname === route.path ? "activeRoute" : ""}
                      >
                        {route.label}
                      </Link>
                    </li>
                  )
              )}
          <li>
            <span
              onClick={() => {
                setAuth((prev) => ({ ...prev, isAuth: false }));
                localStorage.removeItem("coliToken");
                navigate("/");
              }}
            >
              <UilPower />
              Déconnection
            </span>
          </li>
        </>
      </ul>
    </nav>
  );
};

export default ModoAdminNavBar;
