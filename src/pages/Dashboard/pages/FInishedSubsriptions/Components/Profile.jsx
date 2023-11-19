import { Form, Formik } from "formik";
import { useState } from "react";
import { FormField } from "../../../../../kits/kits";

const fields = [
  {
    type: "file",
    name: "frontPhoto",
    placeholder: "choisir une image de face et nette de taille maximum de 1Mo",
  },
  {
    type: "text",
    name: "contact",
    placeholder: "Insérer votre numéro ou email",
  },
  {
    type: "file",
    name: "selfiePhoto",
    placeholder:
      "Faites une photo selfie de vous avec le code selfie que vous avez reçu sur un papier",
  },
];

const Profile = () => {
  const [profileData, setPD] = useState({
    frontPhoto: "",
    contact: "",
    selfiePhoto: "",
  });
  const handleData = (e) => {
    const { name, value } = e.target;
    setPD((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="accountInfoStep">
      <h4>Votre profil</h4>
      <Formik
        initialValues={profileData}
        enableReinitialize
        // validationSchema={contactValidationSchema}
      >
        <Form style={{ width: "100%" }}>
          {fields.map((field) =>
            FormField(field, handleData, profileData, true)
          )}
          {/* <button type="submit">sdsdsds</button>  */}
        </Form>
      </Formik>
    </div>
  );
};

export default Profile;
