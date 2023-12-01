import { useState } from "react";
import { Form, Formik } from "formik";
import { ColisButton, FormField } from "../../../../../kits/kits";
import { handleFormData } from "../../../../../utils/helpers";

const fields = [
  {
    type: "text",
    name: "name",
    placeholder: "Date de depart",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email",
  },
  {
    type: "tel",
    name: "tel",
    placeholder: "Téléphone",
  },
  {
    type: "reactSelect",
    name: "statut",
    placeholder: "Statut",
    options: [{ value: "collaborateur", label: "collaborateur" }],
  },
  {
    type: "password",
    name: "password",
    placeholder: "Mot de passe",
  },
];
const AddModo = () => {
  const [formData, setFD] = useState({
    name: "",
    email: "",
    tel: "",
    statut: "",
    password: "",
  });

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center" }}>Ajout de nouveau Conseiller</h3>
      <Formik>
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {fields.map((field) =>
            FormField(
              field,
              (e) => handleFormData(e, setFD, field.name),
              formData,
              true
            )
          )}
          <ColisButton
            type="submit"
            label={"Créer un collaborateur"}
            style={{ marginTop: "50px" }}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default AddModo;
