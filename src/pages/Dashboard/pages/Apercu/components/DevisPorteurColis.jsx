import { useContext } from "react";
import { CloseIcon } from "../../../../../assets/icons/icons";
import AppContext from "../../../../../context/AppContext";

const DevisPorteurColis = () => {
  const { handleShowModal2 } = useContext(AppContext);

  return (
    <div className="annonceDetails-form">
      <div className="top">
        <p>Proposition de devis porteur de colis</p>
        <span onClick={() => handleShowModal2("close")}>
          <CloseIcon />
        </span>
      </div>
    </div>
  );
};

export default DevisPorteurColis;
