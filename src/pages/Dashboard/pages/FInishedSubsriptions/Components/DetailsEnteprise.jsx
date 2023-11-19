import { Form, Formik } from "formik";
import { useState } from "react";
import { FormField } from "../../../../../kits/kits";

const fields = [
  {
    type: "text",
    name: "name",
    placeholder: "Nom de l’entreprise",
  },
  {
    type: "text",
    name: "representant",
    placeholder: "Nom du représentant",
  },
  {
    type: "file",
    name: "logo",
    placeholder: "Charger le logo de l’entreprise",
  },
  {
    type: "file",
    name: "managerProfile",
    placeholder: "Image de profile du manager de comppte",
  },
];

const DetailsEnteprise = () => {
  const [enterpriseDetails, setED] = useState({
    name: "",
    representant: "",
    logo: "",
    managerProfile: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setED((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="accountInfoStep">
      <h4>Information sur l’entreprise</h4>
      <Formik
        initialValues={enterpriseDetails}
        enableReinitialize
        // validationSchema={contactValidationSchema}
      >
        <Form style={{ width: "100%" }}>
          {fields.map((field) =>
            FormField(field, handleData, enterpriseDetails)
          )}
          {/* <button type="submit">sdsdsds</button>  */}
        </Form>
      </Formik>
    </div>
  );
};

export default DetailsEnteprise;
