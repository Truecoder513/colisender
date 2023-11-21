import { Fragment, useState } from "react";
import { SearchIcons } from "../../../../assets/icons/icons";
import MemberDbTopBar from "../../../../components/globalsComponents/MemberDbTopBar";
import UsersAccountStatus from "../../../../components/globalsComponents/UsersAccountStatus";
import { ColisButton, FormField, Img } from "../../../../kits/kits";
import AnnounceCard from "../../../../components/globalsComponents/AnnounceCard";
import { Form, Formik } from "formik";
import { searchValidationSchema } from "../../../../utils/validationSchema";
import { handleFormData } from "../../../../utils/helpers";

const fields = [
  {
    type: "reactSelect",
    name: "transportorType",
    placeholder: "Que recherchez-vous ?",
    notCreatable: true,
    options: [
      { value: "porteurDeColis", label: "Porteur de colis" },
      { value: "colis_a_transporter", label: "Colis à transporter" },
    ],
  },
  {
    type: "date",
    name: "departueDate",
    placeholder: "Date de depart",
  },
  {
    type: "text",
    name: "departuePlace",
    placeholder: "Lieu de départ",
  },
  {
    type: "text",
    name: "destination",
    placeholder: "Destination",
  },
  {
    type: "number",
    name: "budjet",
    placeholder: "Budjet",
  },
];

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

const PagePreview = () => {
  const [searchParams, setSP] = useState({
    transportorType: "",
    departueDate: "",
    departuePlace: "",
    destination: "",
    budjet: "",
  });

  const [showSearchParams, setSSP] = useState(false);

  return (
    <div>
      <MemberDbTopBar button />
      <div className="content-padding">
        <div className="page-preview">
          <div className="left">
            <div className="vip">
              <div>
                <p>Profiter des avantages illimité avec le l’abonnement VIP</p>
                <button>Devenez membre VIP</button>
              </div>
              <Img image={"Vip.png"} alt={""} />
            </div>
            <div className={`search ${showSearchParams ? "showParams" : ""}`}>
              <div className="top" onClick={() => setSSP(!showSearchParams)}>
                <SearchIcons />
                Rechercher
              </div>

              <Formik
                initialValues={searchParams}
                enableReinitialize
                validationSchema={searchValidationSchema}
              >
                <Form>
                  <div className="top">
                    {fields.map((field) =>
                      FormField(
                        field,
                        (e) => handleFormData(e, setSP, field.name),
                        searchParams
                      )
                    )}
                  </div>
                  <div className="bottom">
                    <ColisButton type="submit" label={"Valider la recherche"} />
                  </div>
                </Form>
              </Formik>
            </div>
            <p>120 résultats issue de votre recherche</p>
            {datas.map((data, index) => (
              <Fragment key={index}>
                <AnnounceCard announce={data} />
              </Fragment>
            ))}
          </div>
          <div className="right">
            <UsersAccountStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePreview;
