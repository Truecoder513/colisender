import { useContext } from "react";
import AppContext from "../../../../../context/AppContext";
import Tables from "../../../../../components/globalsComponents/Tables";
import {
  EditIcon,
  EyeOpen,
  IonTrashSharp,
} from "../../../../../assets/icons/icons";
import AddModo from "./AddModo";

const Conseiller = () => {
  const { handleShowModal } = useContext(AppContext);

  return (
    <div>
      <div className="add-modo">
        <button onClick={() => handleShowModal("show", <AddModo />)}>
          + Ajouter un modérateur
        </button>
      </div>
      <Tables
        conseilWorks
        tableHeader={[
          {
            key: "first",
            label: "Code",
          },
          {
            key: "second",
            label: "Nom",
          },
          {
            key: "third",
            label: "Prénoms",
          },
          {
            key: "fourth",
            label: "Téléphone",
          },
          {
            key: "fifth",
            label: "Email",
          },
          {
            key: "sixth",
            label: "Mot de passe",
          },
          {
            key: "seventh",
            label: "Options",
          },
        ]}
        tableData={data}
        deals
      />
    </div>
  );
};

const data = [
  {
    first: "#125Bi0HE",
    second: "Alex",
    third: "Jones",
    fourth: "+229 66000000",
    fifth: "Français",
    sixth: "**************",
    seventh: (
      <div className="tableActions">
        <span>
          <EyeOpen />
        </span>
        <span>
          <EditIcon />
        </span>
        <span>
          <IonTrashSharp />
        </span>
      </div>
    ),
  },
];
export default Conseiller;
