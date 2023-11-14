import { Form, Formik } from "formik";
import AuthLayaout from "../../components/layouts/AuthLayaout";
import { useState } from "react";
import { loginValidationSchema } from "../../utils/validationSchema";
import { ColisButton, FormField } from "../../kits/kits";
import { Link } from "react-router-dom";
import { LogosFacebook, LogosGoogleIcon } from "../../assets/icons/icons";

const loginField = [
  {
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Mot de passe",
  },
];

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    remindMe: false,
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    if (name === "remindMe") {
      return setCredentials((prev) => ({ ...prev, [name]: true }));
    }
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = () => {
    alert("hello");
  };
  return (
    <AuthLayaout>
      <div className="login">
        <h2>Connexion</h2>
        <Formik
          initialValues={credentials}
          onSubmit={handleFormSubmit}
          validationSchema={loginValidationSchema}
          enableReinitialize
        >
          <Form>
            {loginField.map((field) =>
              FormField(field, handleData, credentials)
            )}
            <div className="othersInfo">
              <div>
                <input
                  type="checkbox"
                  name="remindMe"
                  id="remindMe"
                  value={credentials.remindMe}
                />
                <label htmlFor="remindMe">Se souvenir de moi</label>
              </div>

              <Link to="">Mot de passe oublié</Link>
            </div>
            <ColisButton type="submit" label={"Connexion"} />
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
          Je n’ai pas un compte, <Link to="/signup">Créer un compte</Link>
        </p>
      </div>
    </AuthLayaout>
  );
};

export default Login;
