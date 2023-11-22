import { useContext, useState } from "react";
import { CloseIcon } from "../../../../../assets/icons/icons";
import AppContext from "../../../../../context/AppContext";
import { Form, Formik } from "formik";
import { ColisButton, FormField } from "../../../../../kits/kits";
import { handleFormData } from "../../../../../utils/helpers";

const fields = [
  {
    label: "Kilo à vendre",
    type: "number",
    name: "kilos",
    // placeholder: "Date de depart",
  },
  {
    type: "date",
    name: "departureDate",
    label: "Date de depart",
  },
  {
    type: "time",
    name: "deliveryTime",
    label: "Temps maxi de livraison",
  },
  {
    type: "reactSelect",
    name: "traficType",
    label: "Type de trafique",
    options: [
      { value: "train", label: "Train" },
      { value: "avion", label: "Avion" },
    ],
  },

  {
    type: "text",
    name: "question",
    label: "Type de question",
  },
  {
    type: "number",
    name: "amount",
    label: "Montant devis",
  },
  {
    type: "file",
    name: "document",
    label: "Passe port & Billet d’avion",
    placeholder: "Uploader les document",
  },
];
const DevisPorteurColis = () => {
  const { handleShowModal2 } = useContext(AppContext);

  const [formData, setFD] = useState({
    kilos: "",
    departureDate: "",
    deliveryTime: "",
    traficType: "",
    amount: "",
    document: "",
    question: "",
  });

  return (
    <div className="annonceDetails-form">
      <div className="top">
        <p>Proposition de devis porteur de colis</p>
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

export default DevisPorteurColis;
