import { Link, useNavigate } from "react-router-dom";
import { ArrowForward, CloseCircled, UilPower } from "../../assets/icons/icons";
import { ColisButtonGrey, Img } from "../../kits/kits";
import { authedRoutes } from "../../routes/routes";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const UsersAccountStatus = () => {
  const { setAuth, auth } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="userAccountStatus">
      <div className="usersinfos">
        <Img image={"user.jpeg"} alt={"user"} />
        <p>Alex Jones</p>
      </div>
      <div className="signupStatus">
        <div className={`status ${!auth.verified ? "" : "statusComplete"}`}>
          <label>{!auth.verified ? "50%" : "100%"} effectué</label>
          <div className="step">
            <span
              className={`length ${!auth.verified ? "" : "complete"}`}
              style={{ width: `${!auth.verified ? "50%" : "100%"}` }}
            ></span>
          </div>
        </div>
        {!auth.verified && (
          <ColisButtonGrey
            label={"Finaliser mon inscription"}
            href={"/finishSubscriptions"}
          />
        )}
      </div>
      <div className="subscription-status">
        <CloseCircled /> <p>Aucun abonnement en cours pour le moment</p>
      </div>
      <ul className="links">
        {authedRoutes.map(
          (routes) =>
            [
              "/annoucementsHistory",
              "/profil",
              "/subscriptions",
              "/reports",
            ].includes(routes.path) && (
              <li key={routes.label}>
                <Link to={routes.path}>
                  {routes.label} <ArrowForward />
                </Link>
              </li>
            )
        )}
      </ul>
      <button
        onClick={() => {
          setAuth((prev) => ({ ...prev, isAuth: false }));
          localStorage.removeItem("coliToken");
          navigate("/");
        }}
      >
        <span>Déconnexion</span> <UilPower />
      </button>
    </div>
  );
};

export default UsersAccountStatus;
