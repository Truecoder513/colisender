import { useContext } from "react";
import { CloseIcon } from "../../../../../assets/icons/icons";
import AppContext from "../../../../../context/AppContext";

const DevisColis = () => {
  const { handleShowModal2 } = useContext(AppContext);
  return (
    <div className="annonceDetails-form">
      <div className="top">
        <p>Proposition de devis pour le colis</p>
        <span onClick={() => handleShowModal2("close")}>
          <CloseIcon />
        </span>
      </div>
    </div>
  );
};

export default DevisColis;
