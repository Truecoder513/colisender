import { useContext, useState } from "react";
import Steppers from "../../../../../../components/globalsComponents/Steppers";
import AppContext from "../../../../../../context/AppContext";
import { ColisButton } from "../../../../../../kits/kits";

import ColisAnnonceDetails from "./ColisAnnonceDetails";
import ColisAnnonceImagesVideo from "./ColisAnnonceImagesVideo";
import ColisAnnonceTarifTrajet from "./ColisAnnonceTarifTrajet";
import ColisAnnoncesDestinataire from "./ColisAnnoncesDestinataire";
import { IonTrashSharp } from "../../../../../../assets/icons/icons";
import { toast } from "react-toastify";

const steps = [
  {
    step: 1,
  },
  {
    step: 2,
  },
  {
    step: 3,
  },
  {
    step: 4,
  },
];

const ColisAnnonce = () => {
  const [currentStep, setCurrentsStep] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const { handleShowModal } = useContext(AppContext);
  const [colis, setColis] = useState([]);
  const handleColis = () => {
    setColis((prev) => [
      ...prev,
      {
        typeColis: "",
        description: "",
        poids: "",
        actualValue: "",
        height: "",
        width: "",
        colisSolidity: "",
        colisEtat: "",
        facePhoto: "",
        profilPhoto: "",
        interiorPhoto: "",
        video: "",
        traficType: "",
        departuePlace: "",
        arrivalPlace: "",
        departureDate: "",
        arrivalDateWanted: "",
        tarifWanted: "",
        receiverEmail: "",
      },
    ]);
  };

  const handleStep = (type) => {
    if (type === "next") {
      if (currentStep < 4) {
        setCurrentsStep(currentStep + 1);
      } else {
        setShowForm(false);
        setCurrentsStep(1);
      }
    } else if (type === "prev") {
      if (currentStep > 1) {
        setCurrentsStep(currentStep - 1);
      } else {
        setShowForm(false);
        setColis((prev) => prev.splice(-1));
      }
    }
  };
  const handleDeleteColis = (index) => {
    setColis((prev) => {
      const copy = [...prev];
      if (index >= 0 && index < copy.length) {
        copy.splice(index, 1);
      }
      return copy;
    });
    toast.warn("Colis retiré");
  };

  const handleSubmitAnnonce = () => {
    handleShowModal("close");
    toast.success(
      <div>
        <p>Annonce ajouté avec succès</p>
        <p>
          Vous serez notifié si votre annonce est validé ou rejeté dans les 24h
          qui suivent
        </p>
      </div>
    );
  };

  return (
    <div className="colisAnnonce">
      {showForm && (
        <Steppers
          steps={steps}
          simple
          currentStep={currentStep}
          style={{ width: "100%" }}
        />
      )}

      {!showForm && colis.length > 0 && (
        <div className="colisList">
          <p>Liste des colis</p>
          {colis.map((colis, index) => (
            <div key={index}>
              {colis.typeColis}
              <span onClick={() => handleDeleteColis(index)}>
                <IonTrashSharp />
              </span>
            </div>
          ))}
        </div>
      )}

      {!showForm && (
        <>
          <button
            onClick={() => {
              handleColis();
              setShowForm(true);
            }}
            className="addColis"
          >
            + Ajouter un colis
          </button>
        </>
      )}

      {showForm && currentStep === 1 && (
        <ColisAnnonceDetails setter={setColis} state={colis} />
      )}
      {showForm && currentStep === 2 && (
        <ColisAnnonceImagesVideo setter={setColis} state={colis} />
      )}
      {showForm && currentStep === 3 && (
        <ColisAnnonceTarifTrajet setter={setColis} state={colis} />
      )}
      {showForm && currentStep === 4 && (
        <ColisAnnoncesDestinataire setter={setColis} state={colis} />
      )}

      {!showForm && colis.length > 0 && (
        <ColisButton
          label={"Soumettre mon annonce"}
          onClick={() => handleSubmitAnnonce()}
        />
      )}
      {showForm && (
        <div className="step-button">
          <button onClick={() => handleStep("prev")}>Précédent</button>
          <button onClick={() => handleStep("next")}>Suivant</button>
        </div>
      )}
    </div>
  );
};

export default ColisAnnonce;
