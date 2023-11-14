import React from "react";
import { ArrowBackRounded } from "../../assets/icons/icons";
import { useNavigate } from "react-router";
import { Img } from "../../kits/kits";

const AuthLayaout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="authLayout">
      <div className="left">
        <h1>Expédier tout partout sans limite ou barrière de frontière</h1>
        <Img image={"colis.png"} alt="colis" />
      </div>
      <div className="right">
        <div className="goBack">
          <button onClick={() => navigate(-1)}>
            <ArrowBackRounded /> Retour
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayaout;
