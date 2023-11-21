/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { FormField } from "../../../../../kits/kits";
import { handleFormData } from "../../../../../utils/helpers";

const fields = [
  {
    type: "number",
    name: "budjet",
    placeholder: "Budjet",
  },
];

const WeightAnnouncePrice = ({ annonceData, setAnnonceData }) => {
  return (
    <>
      <h4>Budjet</h4>
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

export default WeightAnnouncePrice;
