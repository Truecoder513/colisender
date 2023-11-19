import { useState } from "react";
import { SearchIcons } from "../../../../assets/icons/icons";
import MemberDbTopBar from "../../../../components/globalsComponents/MemberDbTopBar";
import UsersAccountStatus from "../../../../components/globalsComponents/UsersAccountStatus";
import { ColisButton, FormField, Img } from "../../../../kits/kits";
import AnnounceCard from "./components/AnnounceCard";
import { Form, Formik } from "formik";

const fields = [
  {
    type: "reactSelect",
    name: "transportorType",
    placeholder: "Que recherchez-vous ?",
    notCreatable: true,
    options: [
      { value: "porteurDeColis", label: "Porteur de colis" },
      { value: "colis_a_transporter", label: "Colis de transporter" },
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

const PagePreview = () => {
  const [searchParams, setSP] = useState({
    transportorType: "",
    departueDate: "",
    departuePlace: "",
    destination: "",
    budjet: "",
  });
  const handleData = (e) => {
    try {
      const { name, value } = e.target;
      setSP((prev) => ({ ...prev, [name]: value }));
    } catch (err) {
      console.log(e);
      setSP((prev) => ({
        ...prev,
        transportorType: e,
      }));
    }
  };
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
            <div className="search">
              <div className="top">
                <SearchIcons />
                Rechercher
              </div>

              <Formik>
                <Form>
                  {fields.map((field) =>
                    FormField(field, handleData, searchParams)
                  )}
                </Form>
              </Formik>

              <div className="bottom">
                <ColisButton label={"Valider la recherche"} />
              </div>
            </div>
            <p>120 résultats issue de votre recherche</p>
            <AnnounceCard />
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
