/* eslint-disable react/jsx-key */
import { useNavigate } from "react-router";
import MemberDbTopBar from "../../../../../components/globalsComponents/MemberDbTopBar";
import { ArrowBackRounded, EditIcon } from "../../../../../assets/icons/icons";
import TabsContainer from "../../../../../components/globalsComponents/TabsContainer";
import { Form, Formik } from "formik";
import { useState } from "react";
import { handleFormData } from "../../../../../utils/helpers";
import { FormField, Img } from "../../../../../kits/kits";

const Parametre = () => {
  const navigate = useNavigate();

  return (
    <div className="parametre">
      <MemberDbTopBar
        left={
          <button onClick={() => navigate(-1)}>
            <ArrowBackRounded />
            Paramètre
          </button>
        }
      />
      <div className="content-padding">
        <div className="content">
          <TabsContainer
            topStyle={{
              padding: "0",
              top: "0",
              borderBottom: "1px solid #E0E4EC",
            }}
            headers={["Information Personnelle", "Mot de passe"]}
            contents={[<InfoPersonnelle />, <Mdp />]}
          />
        </div>
      </div>
    </div>
  );
};

export default Parametre;

const InfoPersonnelle = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    username: "",
    tel: "",
  });
  const fields = [
    {
      type: "text",
      name: "name",
      label: "Nom complet",
    },
    {
      type: "text",
      name: "email",
      label: "Email",
    },
    {
      type: "text",
      name: "username",
      label: "Nom d’utilisateur",
    },
    {
      type: "tel",
      name: "tel",
      label: "Numéro de Téléphone",
    },
  ];
  return (
    <>
      <div className="info-perso">
        <div>
          <input type="file" id="changeProfil" />
          <label htmlFor="changeProfil">
            Image de Profile{" "}
            <span>
              <EditIcon />
            </span>
          </label>
          <Img image={"user.jpeg"} />
        </div>
      </div>
      <Formik>
        <Form>
          {fields.map((field) =>
            FormField(
              field,
              (e) => handleFormData(e, setInfo, field.name),
              info
            )
          )}
        </Form>
      </Formik>
    </>
  );
};

const Mdp = () => {
  const [userMdp, setUMDP] = useState({
    password: "",
  });
  const fields = [
    {
      type: "password",
      name: "password",
      label: "Mot de passe",
    },
  ];
  return (
    <div className="mdp">
      <Formik>
        <Form>
          {fields.map((field) =>
            FormField(
              field,
              (e) => handleFormData(e, setUMDP, field.name),
              userMdp
            )
          )}
        </Form>
      </Formik>
    </div>
  );
};
