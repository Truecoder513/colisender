import { Form, Formik } from "formik";
import { FormField } from "../../../../../kits/kits";
import { handleFormData } from "../../../../../utils/helpers";

/* eslint-disable react/prop-types */

const fields = [
  {
    type: "file",
    name: "facePhoto",
    placeholder: "La taille maximum 10Mo",
    label: "Image de face du colis",
  },
  {
    type: "file",
    name: "profilPhoto",
    placeholder: "La taille maximum 10Mo",
    label: "Image de profil du colis",
  },
  {
    type: "file",
    name: "interiorPhoto",
    placeholder: "La taille maximum 10Mo",
    label: "Image de l’intérieur du colis",
  },
  {
    type: "file",
    name: "video",
    placeholder: "La taille maximum 10Mo",
    label: "Vidéo",
  },
];

const ColisAnnonceImagesVideo = ({ setter, state }) => {
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
              state[state.length - 1],
              true
            )
          )}
        </Form>
      </Formik>
    </>
  );
};

export default ColisAnnonceImagesVideo;
