/* eslint-disable react/prop-types */
import { useContext, useState } from "react";

import Steppers from "../../../../../components/globalsComponents/Steppers";
import StripeCheckout from "../../../../../components/globalsComponents/StripeCheckout";
import Contact from "./Contact";
import Localisation from "./Localisation";
import DetailsEnteprise from "./DetailsEnteprise";
import { toast } from "react-toastify";
import AppContext from "../../../../../context/AppContext";
import { useNavigate } from "react-router";

const EnterpriseSteppers = ({ getBack }) => {
  const [currentStep, setCurrentsStep] = useState(1);
  const { setAuth } = useContext(AppContext);
  const navigate = useNavigate();

  const handleStep = (type) => {
    if (type === "next") {
      if (currentStep < 4) {
        setCurrentsStep(currentStep + 1);
      } else {
        toast(
          "Bravo!!!, votre compte est vérifié, un de nos modérateur va validé votre compte dans les 24h qui suivent"
        );
        setAuth((prev) => ({ ...prev, verified: true }));
        localStorage.setItem("colisAccountActive", "yes");
        navigate("/apercu");
      }
    } else if (type === "prev") {
      if (currentStep > 1) {
        setCurrentsStep(currentStep - 1);
      } else {
        getBack((prev) => ({ ...prev, type: "" }));
      }
    }
  };

  const steps = [
    {
      stepName: "Détail",
      stepInfo: "Information de l’entreprise",
    },
    {
      stepName: "Adresse",
      stepInfo: "Localisation",
    },
    {
      stepName: "Contact",
      stepInfo: "Téléphone et email",
    },
    {
      stepName: "Validation",
      stepInfo: "Confirmez votre inscription",
    },
  ];
  return (
    <div>
      <Steppers currentStep={currentStep} steps={steps} />
      {currentStep === 1 && <DetailsEnteprise />}
      {currentStep === 2 && <Localisation label={"Localisation"} />}
      {currentStep === 3 && <Contact />}
      {currentStep === steps.length && <StripeCheckout />}
      <div className="step-button">
        <button onClick={() => handleStep("prev")}>Précédent</button>
        <button onClick={() => handleStep("next")}>Suivant</button>
      </div>
    </div>
  );
};

export default EnterpriseSteppers;
