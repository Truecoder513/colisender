import { useState } from "react";

import Steppers from "../../../../../components/globalsComponents/Steppers";

const EnterpriseSteppers = () => {
  const [currentStep, setCurrentsStep] = useState(1);

  const handleStep = (type) => {
    if (type === "next") {
      if (currentStep < 4) {
        setCurrentsStep(currentStep + 1);
      }
    } else if (type === "prev") {
      if (currentStep > 1) {
        setCurrentsStep(currentStep - 1);
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
      <div>
        <button onClick={() => handleStep("prev")}>Précédent</button>
        <button onClick={() => handleStep("next")}>Suivant</button>
      </div>
    </div>
  );
};

export default EnterpriseSteppers;
