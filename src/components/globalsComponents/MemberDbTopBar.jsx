import { toast } from "react-toastify";
import { ColisButton, LinkButton } from "../../kits/kits";

/* eslint-disable react/prop-types */

const CantPostAnnonnce = () => {
  return (
    <div>
      <p>
        Vous ne pouvez poster ou consulté une annonce que si votre inscription
        finalisée
      </p>
      <div className="btn-act">
        <LinkButton
          label={"Finaliser mon inscription"}
          href={"/finishSubscriptions"}
        />
      </div>
    </div>
  );
};

const MemberDbTopBar = ({ left = "", button = false }) => {
  const handlePost = () => {
    toast(<CantPostAnnonnce />, {
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-right",
      className: "toast-container",
    });
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
