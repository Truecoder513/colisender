/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { FormField } from "../../../../../kits/kits";
import { handleFormData } from "../../../../../utils/helpers";
import { useState } from "react";

const fields = [
  {
    type: "email",
    placeholder: "Email du destinataire",
    name: "receiverEmail",
  },
];

const fields2 = [
  {
    type: "text",
    placeholder: "Nom",
    name: "name",
  },
  {
    type: "text",
    placeholder: "Prénoms",
    name: "firstName",
  },
  {
    type: "email",
    placeholder: "Email",
    name: "newReceiverMail",
  },
  {
    type: "tel",
    placeholder: "Teléphone",
    name: "Teléphone",
  },
];

const ColisAnnoncesDestinataire = ({ setter, state }) => {
  const [receiver, setNewReceiver] = useState(false);
  return (
    <>
      <p style={{ textAlign: "center", margin: "10px 0" }}>
        Destinataire & paiement
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
          <div style={{ display: "flex", gap: "20px" }}>
            <input
              type="radio"
              name=""
              id="newReceiver"
              onClick={() => setNewReceiver(!receiver)}
              style={{ width: "max-content" }}
              checked={receiver}
            />
            <label htmlFor="newReceiver">ajouter un destinataire</label>
          </div>
          {receiver && (
            <NewReceiverComponent
              fields2={fields2}
              state={state}
              setter={setter}
            />
          )}
        </Form>
      </Formik>
    </>
  );
};

export default ColisAnnoncesDestinataire;

const NewReceiverComponent = ({ fields2, state, setter }) => {
  return fields2.map((field) =>
    FormField(
      field,
      (e) => handleFormData(e, setter, field.name, true),
      state[state.length - 1]
    )
  );
};
