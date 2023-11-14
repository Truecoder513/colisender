/* eslint-disable react/no-unescaped-entities */
import { Form, Formik } from "formik";
import AuthLayaout from "../../components/layouts/AuthLayaout";
import { ColisButton, FormField } from "../../kits/kits";
import { LogosFacebook, LogosGoogleIcon } from "../../assets/icons/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signUpValidationSchema } from "../../utils/validationSchema";

const signUpField = [
  {
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    type: "text",
    placeholder: "Nom",
    name: "name",
  },
  {
    type: "text",
    placeholder: "firstname",
    name: "firstname",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Mot de passe",
  },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirmez mot de passe",
  },
];

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    firstname: "",
    password: "",
    confirmPassword: "",
  });
  const handleData = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = () => {
    alert("hello");
  };
  return (
    <AuthLayaout>
      <div className="signup">
        <h2>Création de compte</h2>
        <Formik
          initialValues={credentials}
          onSubmit={handleFormSubmit}
          validationSchema={signUpValidationSchema}
          enableReinitialize
        >
          <Form>
            {signUpField.map((field) =>
              FormField(field, handleData, credentials)
            )}
            <ColisButton type="submit" label={"Créer mon compte"} />
          </Form>
        </Formik>
        <div className="otherLoginWay">
          <span>Or</span>
        </div>
        <div className="thirdPartLogin">
          <button>
            <LogosGoogleIcon /> Connexion avec google
          </button>
          <button>
            <LogosFacebook /> Connexion avec Facebook
          </button>
        </div>
        <p>
          J’ai déjà un compte, <Link to="/login">Connexion</Link>
        </p>
      </div>
    </AuthLayaout>
  );
};

export default SignUp;
