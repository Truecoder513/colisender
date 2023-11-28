import { Form, Formik } from "formik";
import AuthLayaout from "../../components/layouts/AuthLayaout";
import { useContext, useState } from "react";
import { loginValidationSchema } from "../../utils/validationSchema";
import { ColisButton, FormField } from "../../kits/kits";
import { Link, useNavigate } from "react-router-dom";
import { LogosFacebook, LogosGoogleIcon } from "../../assets/icons/icons";
import AppContext from "../../context/AppContext";
import { handleFormData } from "../../utils/helpers";
import { usersTable } from "../../utils/users";
import { toast } from "react-toastify";

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
  const { setAuth } = useContext(AppContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    remindMe: false,
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    if (name === "remindMe") {
      return setCredentials((prev) => ({
        ...prev,
        remindMe: !credentials.remindMe,
      }));
    }
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = () => {
    const usersInfos = usersTable.filter(
      (item) =>
        item.email === credentials.email &&
        item.password === credentials.password
    );

    console.log(usersInfos);
    if (usersInfos.length > 0) {
      setAuth((prev) => ({ ...prev, isAuth: true, authInfos: usersInfos[0] }));
      localStorage.setItem("coliToken", "hello");
      localStorage.setItem("colisAuthInfos", JSON.stringify(usersInfos[0]));
      navigate("/apercu");
    } else {
      toast.error("Utilisateur inconnu");
    }
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
              FormField(
                field,
                (e) => handleFormData(e, setCredentials, field.name),
                credentials
              )
            )}
            <div className="othersInfo">
              <div>
                <input
                  type="checkbox"
                  name="remindMe"
                  id="remindMe"
                  onChange={handleData}
                  value={credentials.remindMe}
                  checked={credentials.remindMe}
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
