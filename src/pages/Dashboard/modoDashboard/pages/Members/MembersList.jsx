/* eslint-disable react/jsx-key */
import { PdfIcon, PhDotOutlineFill } from "../../../../../assets/icons/icons";
import { FilterDataComponents2 } from "../../../../../components/globalsComponents/FilterDataComponents";
import Tables from "../../../../../components/globalsComponents/Tables";
import TabsContainer from "../../../../../components/globalsComponents/TabsContainer";

const MembersList = () => {
  return (
    <div>
      <TabsContainer
        headers={[
          "Nouveaux membres à valider",
          "Membres validés",
          "Membres rejeté",
        ]}
        topStyle={{
          top: "0",
        }}
        contents={[<AllMembers />, <AllMembers />, <AllMembers />]}
      />
    </div>
  );
};

export default MembersList;

const expeditionData = [
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
      <FilterDataComponents2 />
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
        tableData={expeditionData}
        whichDetails="members"
      />
    </>
  );
};
