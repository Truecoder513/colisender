/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { FormField } from "../../../../../kits/kits";
import { handleFormData } from "../../../../../utils/helpers";
const fields = [
  {
    type: "text",
    name: "typeColis",
    placeholder: "Nature du colis",
  },
  {
    type: "textarea",
    name: "description",
    placeholder: "Description",
  },
  {
    type: "number",
    placeholder: "Poids",
    name: "poids",
  },
  {
    type: "number",
    placeholder: "Valeur actuelle du colis",
    name: "actualValue",
  },
  {
    type: "number",
    placeholder: "Hauteur du colis",
    name: "height",
  },
  {
    type: "number",
    placeholder: "Largeur du colis",
    name: "width",
  },
  {
    type: "reactSelect",
    name: "colisSolidity",
    placeholder: "Fragilité du colis",
    options: [
      { value: "fragile", label: "fragile" },
      { value: "solide", label: "solide" },
    ],
  },
  {
    type: "reactSelect",
    name: "colisEtat",
    placeholder: "Etat du colis",
    options: [
      { value: "neuf", label: "Neuf" },
      { value: "vieux", label: "Vieux" },
    ],
  },
];
const ColisAnnonceDetails = ({ setter, state }) => {
  return (
    <>
      <p style={{ textAlign: "center", margin: "10px 0" }}>
        Information du colis
      </p>
      <Formik>
        <Form>
          {fields.map((field) =>
            FormField(
              field,
              (e) => handleFormData(e, setter, field.name, true),
              state[state.length - 1]
            )
          )}
        </Form>
      </Formik>
    </>
  );
};

export default ColisAnnonceDetails;
