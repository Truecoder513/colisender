/* eslint-disable react/prop-types */
import { CheckedMarkIcon } from "../../assets/icons/icons";

const Steppers = ({ currentStep, steps }) => {
  return (
    <div className="steppers">
      <span className="length"></span>
      <span
        className="currentLength"
        style={{ width: `${((currentStep - 1) * 100) / steps.length + 5}%` }}
      ></span>
      <span
        className="currentLengt2"
        style={{ width: `${(currentStep * 100) / steps.length}%` }}
      ></span>

      {steps.map((step, index) => (
        <div
          className={`step ${index + 1 === steps.length ? "last" : ""}`}
          key={step.stepName + index}
        >
          <span
            className={`${
              currentStep === index + 1
                ? "activeStep"
                : currentStep > index + 1
                ? "completeStep"
                : ""
            }`}
          >
            {currentStep > index + 1 ? <CheckedMarkIcon /> : index + 1}
          </span>
          <div className={`${currentStep >= index ? "activeStepInfo" : ""}`}>
            <p>{step.stepName}</p>

            <p>{step.stepInfo}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steppers;
