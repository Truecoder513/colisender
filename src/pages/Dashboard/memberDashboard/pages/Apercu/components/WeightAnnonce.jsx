/* eslint-disable react/prop-types */
import { useState } from "react";
import Steppers from "../../../../../../components/globalsComponents/Steppers";
import { toast } from "react-toastify";
import WeightGeneraleInfos from "./WeightGeneraleInfos";
import WeightAnnouncePrice from "./WeightAnnouncePrice";
import { useContext } from "react";
import AppContext from "../../../../../../context/AppContext";

const steps = [
  {
    step: 1,
  },
  {
    step: 2,
  },
];

const WeightAnnonce = ({ getBack }) => {
  const [currentStep, setCurrentsStep] = useState(1);
  const { handleShowModal } = useContext(AppContext);

  const handleStep = (type) => {
    if (type === "next") {
      if (currentStep < 2) {
        setCurrentsStep(currentStep + 1);
      } else {
        handleShowModal("close");
        toast.success(
          <div>
            <p>Annonce ajouté avec succès</p>
            <p>
              Vous serez notifié si votre annonce est validé ou rejeté dans les
              24h qui suivent
            </p>
          </div>
        );
      }
    } else if (type === "prev") {
      if (currentStep > 1) {
        setCurrentsStep(currentStep - 1);
      } else {
        getBack((prev) => ({ ...prev, type: "" }));
      }
    }
  };

  const [annonceData, setAnnonceData] = useState({
    departueDate: "",
    description: "",
    kilos: "",
    expeditionFees: "",
    passeport: "",
    bill: "",
    budjet: "",
    departuePlace: "",
    arrivalPlace: "",
  });
  return (
    <>
      <Steppers steps={steps} simple currentStep={currentStep} />
      {currentStep === 1 && (
        <WeightGeneraleInfos
          annonceData={annonceData}
          setAnnonceData={setAnnonceData}
        />
      )}
      {currentStep === 2 && (
        <WeightAnnouncePrice
          annonceData={annonceData}
          setAnnonceData={setAnnonceData}
        />
      )}
      <div className="step-button">
        <button onClick={() => handleStep("prev")}>Précédent</button>
        <button onClick={() => handleStep("next")}>
          {currentStep === 2 ? "Lancer annonce" : "Suivant"}
        </button>
      </div>
    </>
  );
};

export default WeightAnnonce;
