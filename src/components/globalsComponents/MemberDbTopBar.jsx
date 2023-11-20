import { toast } from "react-toastify";
import { ColisButton } from "../../kits/kits";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import NewAnnonce from "../../pages/Dashboard/pages/Apercu/components/NewAnnonce";
import { CantPostAnnonnce } from "../toastMessages";

/* eslint-disable react/prop-types */

const MemberDbTopBar = ({ left = "", button = false }) => {
  const { auth, handeShowModal } = useContext(AppContext);

  const handlePost = () => {
    !auth.verified
      ? toast(<CantPostAnnonnce />, {
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
        })
      : handeShowModal("show", <NewAnnonce />);
  };
  return (
    <div className="MemberDbTopBar">
      <div className="left">{left}</div>
      {button && (
        <div className="right" onClick={handlePost}>
          <ColisButton label={"Poster une annonnce"} hover />
        </div>
      )}
    </div>
  );
};

export default MemberDbTopBar;
