/* eslint-disable react/prop-types */
import { useState } from "react";
import "./kits.scss";
import { ErrorMessage } from "formik";
import { EyeClose, EyeOpen } from "../assets/icons/icons";
import { Link } from "react-router-dom";
export const ColisButton = ({ label, hover = false, ...props }) => {
  return (
    <button className={`${hover && "announce"} baseBtn`} {...props}>
      {label}
    </button>
  );
};

export const ColisButtonGrey = ({ label, href, ...props }) => {
  return (
    <Link className={`greyBtn`} to={href} {...props}>
      {label}
    </Link>
  );
};

export const LinkButton = ({ label, href, ...props }) => {
  return (
    <Link to={href} className="linkButton" {...props}>
      {label}
    </Link>
  );
};

export function Img({ alt, image, ...props }) {
  return <img src={`/images/${image}`} alt={alt} {...props} />;
}

export function FormField(item, handleChange, state) {
  const [showPassword, setShowPswd] = useState(false);

  const handleInputType = () => {
    if (showPassword) {
      return setShowPswd(false);
    }
    setShowPswd(true);
  };
  return (
    <div key={"Champ " + item.placeholder} className="coliForm">
      <>
        <div className="formikFormField">
          <input
            name={item.name}
            type={showPassword ? "text" : item.type}
            placeholder={item.placeholder}
            value={state[item.name]}
            onChange={(e) => handleChange(e)}
          />
          {item.type === "password" && (
            <span onClick={() => handleInputType()}>
              {showPassword ? <EyeClose /> : <EyeOpen />}
            </span>
          )}
        </div>
        <span className="input-errors">
          <ErrorMessage name={item.name} />
        </span>
      </>
    </div>
  );
}
