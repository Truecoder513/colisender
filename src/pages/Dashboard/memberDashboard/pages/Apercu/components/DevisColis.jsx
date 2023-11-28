import { useContext, useState } from "react";

import AppContext from "../../../../../../context/AppContext";
import { Form, Formik } from "formik";
import { handleFormData } from "../../../../../../utils/helpers";
import { ColisButton, FormField } from "../../../../../../kits/kits";
import { CloseIcon } from "../../../../../../assets/icons/icons";

const fields = [
  {
    label: "Nombre de colis",
    type: "number",
    name: "colisNumber",
  },
  {
    type: "text",
    name: "colisName",
    label: "Nom du colis",
  },
  {
    type: "reactSelect",
    name: "colisSolidity",
    label: "Fragilité du colis",
    options: [
      { value: "fragile", label: "fragile" },
      { value: "solide", label: "solide" },
    ],
  },
  {
    type: "text",
    name: "departuePlace",
    label: "Lieu de départ",
  },

  {
    type: "text",
    name: "destination",
    label: "Destination",
  },
  {
    type: "number",
    name: "amount",
    label: "Montant devis",
  },
  {
    type: "file",
    name: "colisPhoto",
    label: "Image du colis",
    placeholder: "Uploader photo",
  },
];

const DevisColis = () => {
  const { handleShowModal2 } = useContext(AppContext);
  const [formData, setFD] = useState({
    colisNumber: "",
    colisName: "",
    colisSolidity: "",
    departuePlace: "",
    destination: "",
    amount: "",
    colisPhoto: "",
  });
  return (
    <div className="annonceDetails-form">
      <div className="top">
        <p>Proposition de devis pour le colis</p>
        <span onClick={() => handleShowModal2("close")}>
          <CloseIcon />
        </span>
      </div>
      <Formik>
        <Form>
          {fields.map((field) =>
            FormField(
              field,
              (e) => handleFormData(e, setFD, field.name),
              formData,
              true
            )
          )}
          <div className="submit">
            <ColisButton type="submit" label={"Soumettre"} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default DevisColis;
