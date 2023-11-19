/* eslint-disable react/prop-types */

import { Form, Formik } from "formik";
import { useState } from "react";
import { FormField } from "../../../../../kits/kits";

const fieldsEnterprise = [
  {
    type: "text",
    name: "pays",
    placeholder: "Pays",
  },
  {
    type: "text",
    name: "code",
    placeholder: "Code Postal",
  },

  {
    type: "text",
    placeholder: "ville",
    name: "ville",
  },
];

const fieldsParticular = [
  {
    type: "text",
    name: "nationalite",
    placeholder: "Nationalité",
  },
  {
    type: "text",
    name: "adress",
    placeholder: "Adresse de résidence",
  },
  {
    type: "text",
    name: "pays",
    placeholder: "Pays de résidence",
  },
  {
    type: "text",
    name: "code",
    placeholder: "Code Postal",
  },

  {
    type: "text",
    placeholder: "ville",
    name: "ville",
  },
];

const Localisation = ({ label, particular = false }) => {
  const [enterpriseContactData, setECD] = useState({
    pays: "",
    code: "",
    ville: "",
  });
  const [particularContactData, setPCD] = useState({
    pays: "",
    code: "",
    ville: "",
    nationalite: "",
    adress: "",
  });
  const handleData = (e) => {
    const { name, value } = e.target;
    setECD((prev) => ({ ...prev, [name]: value }));
  };
  const handleData2 = (e) => {
    const { name, value } = e.target;
    setPCD((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="accountInfoStep">
      <h4>{label}</h4>

      {particular ? (
        <Formik
          initialValues={particularContactData}
          enableReinitialize
          // validationSchema={contactValidationSchema}
        >
          <Form>
            {fieldsParticular.map((field) =>
              FormField(field, handleData2, particularContactData)
            )}
            {/* <button type="submit">sdsdsds</button>  */}
          </Form>
        </Formik>
      ) : (
        <Formik
          initialValues={enterpriseContactData}
          enableReinitialize
          // validationSchema={contactValidationSchema}
        >
          <Form>
            {fieldsEnterprise.map((field) =>
              FormField(field, handleData, enterpriseContactData)
            )}
            {/* <button type="submit">sdsdsds</button>  */}
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default Localisation;
