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
          <div className={`formikFormField`}>
            <input
              type={state[item.name] ? item.type : "text"}
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
        <textarea
          className="formikFormField"
          name={item.name}
          placeholder={item.placeholder}
          value={state[item.name]}
          onChange={(e) => handleChange(e)}
          readOnly={item.readOnly ? true : false}
        ></textarea>
      ) : item.type === "double" ? (
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
