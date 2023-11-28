/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { FormField } from "../../../../../../kits/kits";
import { handleFormData } from "../../../../../../utils/helpers";

const fields = [
  {
    type: "reactSelect",
    name: "traficType",
    placeholder: "Type de trajet",
    options: [
      { value: "train", label: "Train" },
      { value: "avion", label: "Avion" },
    ],
  },
  {
    type: "text",
    name: "departuePlace",
    placeholder: "Ville de depart",
  },
  {
    type: "text",
    name: "arrivalPlace",
    placeholder: "Ville d'arrivée",
  },
  {
    type: "date",
    name: "departureDate",
    placeholder: "Date départ",
  },
  {
    type: "date",
    name: "arrivalDateWanted",
    placeholder: "Date arrivé souhaitée",
  },
  {
    type: "number",
    name: "tarifWanted",
    placeholder: "Tarif d’expédition proposé",
  },
];

const ColisAnnonceTarifTrajet = ({ setter, state }) => {
  return (
    <>
      <p style={{ textAlign: "center", margin: "10px 0" }}>Trajet et Budjet</p>
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

export default ColisAnnonceTarifTrajet;
