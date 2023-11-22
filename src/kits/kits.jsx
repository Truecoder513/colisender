/* eslint-disable react/prop-types */
import { useState } from "react";
import "./kits.scss";
import { ErrorMessage } from "formik";
import {
  ArrowToIcon,
  EyeClose,
  EyeOpen,
  UploadIcon,
} from "../assets/icons/icons";
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

export function FormField(
  item,
  handleChange,
  state,
  border = false,
  code = false
) {
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
          {item.label && <label>{item.label}</label>}
          {item?.notCreatable ? (
            <div className="formikFormField2">
              <Select
                defaultValue={state[item.name]}
                name={item.name}
                onChange={(e) => handleChange(e, item.name)}
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
                onChange={(e) => handleChange(e, item.name)}
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
        <>
          {item.label && <label>{item.label}</label>}

          <div className={`formikInputfield ${border ? "border" : ""}`}>
            <p>{item.placeholder}</p>
            <input
              type="file"
              name={item.name}
              id={item.name}
              onChange={(e) => handleChange(e)}
            />
            <UploadButton id={item.name} />
          </div>
          <span className="input-errors">
            <ErrorMessage name={item.name} />
          </span>
        </>
      ) : item.type === "date" ? (
        <>
          {item.label && <label>{item.label}</label>}
          <div className={`formikFormField`}>
            <input
              type={
                item.label ? item.type : state[item.name] ? item.type : "text"
              }
              onFocus={(e) => (e.target.type = "date")}
              name={item.name}
              id={item.name}
              onChange={(e) => handleChange(e)}
              placeholder={item.placeholder}
            />
          </div>
          <span className="input-errors">
            <ErrorMessage name={item.name} />
          </span>
        </>
      ) : item.type === "textarea" ? (
        <>
          {item.label && <label>{item.label}</label>}
          <div className="formikFormField">
            <textarea
              name={item.name}
              placeholder={item.placeholder}
              value={state[item.name]}
              onChange={(e) => handleChange(e)}
              readOnly={item.readOnly ? true : false}
            ></textarea>
          </div>
          <span className="input-errors">
            <ErrorMessage name={item.name} />
          </span>
        </>
      ) : item.type === "double" ? (
        <>
          {item.label && <label>{item.label}</label>}
          <div className="formikFormField3">
            <div>
              <input
                name={item.name1}
                type={item.type1}
                placeholder={item.placeholder1}
                value={state[item.name1]}
                onChange={(e) => handleChange(e)}
                readOnly={item.readOnly ? true : false}
              />
            </div>
            <ArrowToIcon />
            <div>
              <input
                name={item.name2}
                type={item.type2}
                placeholder={item.placeholder2}
                value={state[item.name2]}
                onChange={(e) => handleChange(e)}
                readOnly={item.readOnly ? true : false}
              />
            </div>
          </div>
          <div>
            <span className="input-errors">
              <ErrorMessage name={item.name1} />
            </span>
            <span className="input-errors">
              <ErrorMessage name={item.name2} />
            </span>
          </div>
        </>
      ) : (
        <>
          {item.label && <label>{item.label}</label>}
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
            {code && <button>Obtenir le code</button>}
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
