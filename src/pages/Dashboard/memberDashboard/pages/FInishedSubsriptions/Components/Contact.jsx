import { Form, Formik } from "formik";
import { FormField } from "../../../../../../kits/kits";
import { contactValidationSchema } from "../../../../../../utils/validationSchema";
import { useState } from "react";
import { handleFormData } from "../../../../../../utils/helpers";

const fields = [
  {
    type: "tel",
    name: "telephone",
    placeholder: "Telephone",
  },
  {
    type: "tel",
    name: "whatsapp",
    placeholder: "Whatsapp",
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    type: "reactSelect",
    placeholder: "Réseaux sociaux",
    name: "links",
  },
];

const Contact = () => {
  const [contactData, setContactData] = useState({
    telephone: "",
    whatsapp: "",
    email: "",
    links: [],
  });
  return (
    <div className="accountInfoStep">
      <h4>Votre contact</h4>
      <Formik
        initialValues={contactData}
        enableReinitialize
        validationSchema={contactValidationSchema}
      >
        <Form>
          {fields.map((field) =>
            FormField(
              field,
              (e) => handleFormData(e, setContactData, field.name),
              contactData
            )
          )}
          {/* <button type="submit">sdsdsds</button>  */}
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
