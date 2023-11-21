/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { FormField } from "../../../../../kits/kits";
import { handleFormData } from "../../../../../utils/helpers";

const fields = [
  {
    type: "date",
    name: "departueDate",
    placeholder: "Date de départ",
  },
  {
    type: "textarea",
    name: "description",
    placeholder: "Description",
  },
  {
    type: "number",
    placeholder: "Nombre de kilo disponible",
    name: "kilos",
  },
  {
    type: "double",
    name1: "departuePlace",
    type1: "text",
    placeholder1: "Lieu de départ",
    name2: "arrivalPlace",
    placeholder2: "Lieu d'arrivé",
    type2: "text",
  },
  {
    type: "number",
    placeholder: "Frais d'expédition",
    name: "expeditionFees",
  },
  {
    type: "file",
    placeholder: "Passeport (10 mo maximum)",
    name: "passeport",
  },
  {
    type: "file",
    placeholder: "Billet d’avion (10 mo maximum)",
    name: "bill",
  },
];
const WeightGeneraleInfos = ({ annonceData, setAnnonceData }) => {
  return (
    <>
      <h4>Informations Générale</h4>
      <Formik
        // initialValues={contactData}
        enableReinitialize
        // validationSchema={contactValidationSchema}
      >
        <Form>
          {fields.map((field) =>
            FormField(
              field,
              (e) => handleFormData(e, setAnnonceData, field.name),
              annonceData,
              true
            )
          )}
        </Form>
      </Formik>
    </>
  );
};

export default WeightGeneraleInfos;
