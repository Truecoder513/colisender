/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { ArrowBackRounded } from "../../../../../../assets/icons/icons";
import MemberDbTopBar from "../../../../../../components/globalsComponents/MemberDbTopBar";
import AppContext from "../../../../../../context/AppContext";
import AnnoncesOverviewDetails from "../../../../../../components/globalsComponents/AnnoncesOverviewDetails";

const AnnonceDetails = ({ announce }) => {
  const { handleShowModal } = useContext(AppContext);

  return (
    <div>
      <MemberDbTopBar
        left={
          <button
            onClick={() => {
              handleShowModal("close");
            }}
          >
            <ArrowBackRounded />
            Détail de l’annonce
          </button>
        }
        button={true}
        type={announce.type === "transport" ? "porteur" : "devisColis"}
      />
      <AnnoncesOverviewDetails announce={announce} />
    </div>
  );
};

export default AnnonceDetails;
