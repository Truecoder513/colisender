/* eslint-disable react/prop-types */
import { useState } from "react";
import "./kits.scss";
import { ErrorMessage } from "formik";
import { EyeClose, EyeOpen, UploadIcon } from "../assets/icons/icons";
import { Link } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
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

export function UploadButton({ id }) {
  return (
    <label htmlFor={id} className="uploadButton">
      <UploadIcon /> Téléverser
    </label>
  );
}

export function FormField(item, handleChange, state, border = false) {
  const [showPassword, setShowPswd] = useState(false);

  const handleInputType = () => {
    if (showPassword) {
      return setShowPswd(false);
    }
    setShowPswd(true);
  };
  return (
    <div key={"Champ " + item.placeholder} className="coliForm">
      {item.type === "reactSelect" ? (
        <>
          {item?.notCreatable ? (
            <div className="formikFormField2">
              <Select
                defaultValue={state[item.name]}
                isMulti
                name={item.name}
                onChange={(e) => handleChange(e)}
                options={item.options ? item.options : []}
                placeholder={item.placeholder}
              />
            </div>
          ) : (
            <div className="formikFormField2">
              <CreatableSelect
                defaultValue={state[item.name]}
                isMulti
                name={item.name}
                onChange={(e) => handleChange(e)}
                options={item.options ? item.options : []}
                placeholder={item.placeholder}
              />
            </div>
          )}
          <span className="input-errors">
            <ErrorMessage name={item.name} />
          </span>
        </>
      ) : item.type === "file" ? (
        <div className={`formikInputfield ${border ? "border" : ""}`}>
          <p>{item.placeholder}</p>
          <input type="file" name={item.name} id={item.name} />
          <UploadButton id={item.name} />
        </div>
      ) : (
        <>
          <div
            className={`formikFormField ${item.readOnly ? "readOnly" : ""} `}
          >
            <input
              name={item.name}
              type={showPassword ? "text" : item.type}
              placeholder={item.placeholder}
              value={state[item.name]}
              onChange={(e) => handleChange(e)}
              readOnly={item.readOnly ? true : false}
            />
            {border && <button>Obtenir le code</button>}
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
      )}
    </div>
  );
}
