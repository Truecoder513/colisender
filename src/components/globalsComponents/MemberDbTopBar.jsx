import { toast } from "react-toastify";
import { ColisButton } from "../../kits/kits";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import NewAnnonce from "../../pages/Dashboard/pages/Apercu/components/NewAnnonce";
import { CantPostAnnonnce } from "../toastMessages";
import DevisColis from "../../pages/Dashboard/pages/Apercu/components/DevisColis";
import DevisPorteurColis from "../../pages/Dashboard/pages/Apercu/components/DevisPorteurColis";

/* eslint-disable react/prop-types */

const MemberDbTopBar = ({ left = "", button = false, type = "post" }) => {
  const { auth, handleShowModal, handleShowModal2 } = useContext(AppContext);

  const handlePost = () => {
    !auth.verified
      ? toast(<CantPostAnnonnce />, {
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
        })
      : handleShowModal("show", <NewAnnonce />);
  };

  const handleTransportorProposition = (wich) => {
    wich === "transportor"
      ? handleShowModal2("show", <DevisPorteurColis />)
      : handleShowModal2("show", <DevisColis />);
  };

  return (
    <div className="MemberDbTopBar">
      <div className="left">{left}</div>
      {button && type === "post" && (
        <div className="right" onClick={handlePost}>
          <ColisButton label={"Poster une annonnce"} hover />
        </div>
      )}
      {button && type === "porteur" && (
        <div
          className="right"
          onClick={() => handleTransportorProposition("transportor")}
        >
          <ColisButton label={"Soumettre une proposition de Porteur"} hover />
        </div>
      )}
      {button && type === "devisColis" && (
        <div
          className="right"
          onClick={() => handleTransportorProposition("colis")}
        >
          <ColisButton label={"Proposer un devis"} hover />
        </div>
      )}
    </div>
  );
};

export default MemberDbTopBar;
