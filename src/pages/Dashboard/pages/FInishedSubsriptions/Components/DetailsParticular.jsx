import { Form, Formik } from "formik";
import { useState } from "react";
import { FormField } from "../../../../../kits/kits";
import { handleFormData } from "../../../../../utils/helpers";

const fields = [
  {
    type: "text",
    name: "name",
    placeholder: "Nom",
    readOnly: true,
  },
  {
    type: "texte",
    name: "sexe",
    placeholder: "Sexe",
    readOnly: true,
  },
  {
    type: "text",
    name: "firstName",
    placeholder: "Prénoms",
    readOnly: true,
  },
  {
    type: "reactSelect",
    name: "piece",
    notCreatable: true,
    placeholder: "Pièce d’identité",
    options: [
      { label: "Carte d'identité", value: "Carte d'identité" },
      { label: "Passeport", value: "Passeport" },
    ],
  },
  {
    type: "date",
    name: "birthdate",
    placeholder: "Date de naissance",
  },
  {
    type: "file",
    name: "pieceDocuments",
    placeholder: "Charger votre pièce d’identité",
  },
];

const DetailsParticular = () => {
  const [particularDetails, setPD] = useState({
    name: "",
    sexe: "",
    firstName: "",
    piece: "",
    birthdate: "",
    pieceDocuments: "",
  });

  return (
    <div className="accountInfoStep">
      <h4>Qui êtes vous?</h4>
      <Formik
        initialValues={particularDetails}
        enableReinitialize
        // validationSchema={contactValidationSchema}
      >
        <Form style={{ width: "100%" }}>
          {fields.map((field) =>
            FormField(
              field,
              (e) => handleFormData(e, setPD, field.name),
              particularDetails
            )
          )}
          {/* <button type="submit">sdsdsds</button>  */}
        </Form>
      </Formik>
    </div>
  );
};

export default DetailsParticular;
