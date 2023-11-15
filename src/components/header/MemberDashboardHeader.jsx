import { Link } from "react-router-dom";
import { Img } from "../../kits/kits";
import { authedRoutes } from "../../routes/routes";
import { IonIosArrowDown, IonNotifications } from "../../assets/icons/icons";

const MemberDashboardHeader = () => {
  return (
    <div className="memberDashbordHeader">
      <Link to="/">
        <Img image={"logo.png"} alt={"logo"} className="logo" />
      </Link>
      <ul>
        {authedRoutes.map(
          (routes) =>
            ["/", "/settings", "/stats", "/apercu", ""].includes(
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
    </div>
  );
};

export default MemberDashboardHeader;
