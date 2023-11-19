import * as Yup from "yup";

export const loginValidationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("Veuillez entrer un mail correct")
      .required("Veuillez remplir ce champ."),
    password: Yup.string()
      .min(6, "Mot de passe trop court")
      .required("Veuillez remplir ce champ."),
  });
};

export const signUpValidationSchema = () => {
  return Yup.object({
    name: Yup.string().required("Veuillez remplir ce champ."),
    firstname: Yup.string().required("Veuillez remplir ce champ."),
    email: Yup.string()
      .email("Veuillez entrer un mail correct")
      .required("Veuillez remplir ce champ."),
    password: Yup.string()
      .min(6, "Mot de passe trop court")
      .required("Veuillez remplir ce champ."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Mot de passe non identique")
      .required("Veuillez remplir ce champ."),
  });
};

export const contactValidationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("Veuillez entrer un mail correct")
      .required("Veuillez remplir ce champ."),
    telephone: Yup.string().required("Veuillez remplir ce champ."),
    whatsapp: Yup.string().required("Veuillez remplir ce champ."),
    links: Yup.string().required("Veuillez remplir ce champ."),
  });
};
