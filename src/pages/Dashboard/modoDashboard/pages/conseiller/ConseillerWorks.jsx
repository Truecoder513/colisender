/* eslint-disable react/jsx-key */
import {
  MemberIcon,
  PdfIcon,
  PhDotOutlineFill,
} from "../../../../../assets/icons/icons";
import Tables from "../../../../../components/globalsComponents/Tables";
import TabsContainer from "../../../../../components/globalsComponents/TabsContainer";
import { Img } from "../../../../../kits/kits";

const ConseillerWorks = () => {
  return (
    <div className="conseillerWorks">
      <div className="stats">
        <div>
          <MemberIcon />
          <span>300</span>
        </div>
        <div>
          Validé
          <span>100</span>
        </div>
        <div>
          Annonce validée
          <span>80</span>
        </div>
        <div>
          Annonce rejetée
          <span>20</span>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <TabsContainer
          headers={[
            "Membres validés",
            "Membres rejeté",
            "Annonces validées",
            "Annonces rejetées",
          ]}
          topStyle={{
            backgroundColor: "transparent",
            justifyContent: "center",
            top: "0",
            width: "100%",
          }}
          contents={[
            <AllMembers />,
            <AllMembers />,
            <Annonces />,
            <Annonces />,
          ]}
        />
      </div>
    </div>
  );
};

export default ConseillerWorks;

const members = [
  {
    first: "125Bi0HE",
    second: "Alex",
    third: "Jones",
    fourth: "+229 66000000",
    fifth: "Français",
    sixth: (
      <div className="profil">
        <PdfIcon /> Pièce d’identité
      </div>
    ),
    seventh: (
      <span className="new">
        <PhDotOutlineFill /> Nouveau
      </span>
    ),
  },
];

const AllMembers = () => {
  return (
    <>
      <Tables
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
            label: "Nationalité",
          },
          {
            key: "sixth",
            label: "Fichier",
          },
          {
            key: "seventh",
            label: "Statut",
          },
        ]}
        tableData={members}
        whichDetails="members"
        hasDetails
      />
    </>
  );
};

const data = [
  {
    second: "#125Bi0HE",
    first: "11-12-13",
    third: "Porteur de colis",
    fourth: (
      <div className="profil">
        <Img image={"user.jpeg"} />
        <p>Alex jones</p>
      </div>
    ),
  },
];
const Annonces = () => {
  return (
    <Tables
      tableHeader={[
        {
          key: "second",
          label: "ID_annonce",
        },
        {
          key: "first",
          label: "Date départ",
        },
        {
          key: "third",
          label: "Type_annonce",
        },
        {
          key: "fourth",
          label: "Auteur",
        },
      ]}
      tableData={data}
      deals
    />
  );
};
