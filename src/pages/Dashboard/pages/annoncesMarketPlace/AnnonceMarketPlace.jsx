/* eslint-disable react/jsx-key */
import { useNavigate } from "react-router";
import MemberDbTopBar from "../../../../components/globalsComponents/MemberDbTopBar";
import {
  ArrowBackRounded,
  CloseCircled,
  CloseIcon,
} from "../../../../assets/icons/icons";
import { Fragment, useState } from "react";
import AnnounceCard from "../../../../components/globalsComponents/AnnounceCard";
import { Form, Formik } from "formik";
import { ColisButton, FormField } from "../../../../kits/kits";
import { handleFormData } from "../../../../utils/helpers";
import TabsContainer from "../../../../components/globalsComponents/TabsContainer";

const datas = [
  {
    name: "John Doe",
    type: "transport",
    annoncerType: "Vip",
    postulant: 5,
    date: "1h00",
    title: "Je recherche un transporteur de colis",
    description: `Je recherche un transporteur de colis 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam placeat fugiat iure molestias nam harum omnis    architecto delectus debitis, a id, dolor minima itaque enim suscipit totam, esse blanditiis voluptate.
      `,
    stars: 3.5,
  },
  {
    name: "Henrietta Doe",
    type: "kilos",
    annoncerType: "Vip",
    postulant: 3,
    date: "1h00",
    title: "J'ai des kilos a vendre ",
    description: `J'ai des kilos a vendre 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam placeat fugiat iure molestias nam harum omnis    architecto delectus debitis, a id, dolor minima itaque enim suscipit totam, esse blanditiis voluptate.`,
    stars: 3.5,
  },
];

const fields = [
  {
    label: "Budjet",
    type: "double",
    name1: "minBudjet",
    type1: "number",
    placeholder1: "Budget min",
    name2: "maxBudjet",
    placeholder2: "Budget min",
    type2: "number",
  },
  {
    type: "date",
    name: "departueDate",
    label: "Date de départ",
  },
  {
    type: "text",
    name: "departuePlace",
    label: "Lieu départ",
  },
  {
    type: "text",
    name: "arrivalPlace",
    label: "Lieu d'arrivé",
  },
  {
    type: "reactSelect",
    name: "traficType",
    label: "Moyen de transport",
    options: [
      { value: "train", label: "Train" },
      { value: "avion", label: "Avion" },
    ],
  },
  {
    type: "time",
    label: "Heure de départ",
    name: "time",
  },
];

const AnnonceMarketPlace = () => {
  const navigate = useNavigate();

  return (
    <div className="annonces-marketPlace">
      <MemberDbTopBar
        left={
          <button onClick={() => navigate(-1)}>
            <ArrowBackRounded />
            Annonces
          </button>
        }
        button
        type={"post"}
      />

      <TabsContainer
        headers={["Exportation de colis", "Porteur de colis"]}
        contents={[<Content />, <Content />]}
      />
    </div>
  );
};

export default AnnonceMarketPlace;

const Content = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchBy, setSearchBy] = useState([]);
  const handleSearchBy = (item) => {
    if (searchBy.includes(item)) {
      setSearchBy((prev) => prev.filter((content) => content !== item));
    } else {
      setSearchBy((prev) => [...prev, item]);
    }
  };

  const [searchParams, setSP] = useState({
    minBudjet: "",
    maxBudjet: "",
    departueDate: "",
    arrivalPlace: "",
    traficType: "",
    time: "",
  });
  return (
    <div className="content-padding">
      <div className="tab-content">
        <div className={`left ${showForm ? "showFormSearch" : ""}`}>
          <Formik>
            <Form className="filter">
              <div className="top">
                <p>Filtre</p>
                <div>
                  <ColisButton
                    label={"Fermer"}
                    onClick={() => setShowForm(false)}
                  />
                  <button>
                    Tout Effacer <CloseIcon />
                  </button>
                </div>
              </div>
              <div className="search-by">
                <h3>Rechercher par</h3>
                <div>
                  {["Vip", "Normal", "Nouveau", "En cours de validation"].map(
                    (item, index) => (
                      <span
                        key={index}
                        onClick={() => handleSearchBy(item)}
                        className={`${
                          searchBy.includes(item) ? "choosed" : ""
                        }`}
                      >
                        {item}
                        {searchBy.includes(item) ? (
                          <span onClick={() => handleSearchBy(item)}>
                            <CloseCircled />
                          </span>
                        ) : (
                          ""
                        )}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="otherParams">
                {fields.map((field) =>
                  FormField(
                    field,
                    (e) => handleFormData(e, setSP, field.name),
                    searchParams
                  )
                )}
              </div>

              <ColisButton type="submit" label={"Valider la recherche"} />
            </Form>
          </Formik>
        </div>
        <div className="right">
          <ColisButton
            label={"Formulaire de recherche"}
            onClick={() => setShowForm(true)}
          />
          <p style={{ fontSize: "14px", margin: "20px 0" }}>
            120 résultats issue de votre recherche
          </p>
          {datas.map((data, index) => (
            <Fragment key={index}>
              <AnnounceCard announce={data} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
