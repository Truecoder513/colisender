/* eslint-disable react/jsx-key */
import { useNavigate } from "react-router";
import {
  ArrowBackRounded,
  PhDotOutlineFill,
} from "../../../../../assets/icons/icons";
import MemberDbTopBar from "../../../../../components/globalsComponents/MemberDbTopBar";
import TabsContainer from "../../../../../components/globalsComponents/TabsContainer";
import FilterDataComponents from "../../../../../components/globalsComponents/FilterDataComponents";
import { Img } from "../../../../../kits/kits";
import Tables from "../../../../../components/globalsComponents/Tables";

const AnnonceHistory = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MemberDbTopBar
        left={
          <button onClick={() => navigate(-1)}>
            <ArrowBackRounded />
            Mes annonces
          </button>
        }
        button
      />
      <TabsContainer
        headers={[
          "Exportation de colis",
          "Porteur de colis",
          "Annonces postulées",
        ]}
        contents={[
          <ExportationHistory />,
          <PorteurHistory />,
          <CandidateHistory />,
        ]}
      />
    </div>
  );
};

export default AnnonceHistory;

const exportationData = [
  {
    first: (
      <div>
        <p>Groupe électrogène</p>
        <p>150kg</p>
      </div>
    ),
    second: "Paris",
    third: "Bordeau",
    fourth: "11-11-2023",
    fifth: "Trafique Régional",
    sixth: (
      <div className="images">
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
      </div>
    ),
    seventh: (
      <span className="validate">
        <PhDotOutlineFill /> Validée
      </span>
    ),
  },
  {
    first: (
      <div>
        <p>Groupe électrogène</p>
        <p>150kg</p>
      </div>
    ),
    second: "Paris",
    third: "Bordeau",
    fourth: "11-11-2023",
    fifth: "Trafique Régional",
    sixth: (
      <div className="images">
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
      </div>
    ),
    seventh: (
      <span className="expired">
        <PhDotOutlineFill /> Expiré
      </span>
    ),
  },
];

const ExportationHistory = () => {
  return (
    <div className="content-padding">
      <FilterDataComponents />
      <div className="ctp-content">
        <Tables
          tableHeader={[
            {
              key: "first",
              label: "Colis à Expédier",
            },
            {
              key: "second",
              label: "Lieu Départ",
            },
            {
              key: "third",
              label: "Destination",
            },
            {
              key: "fourth",
              label: "Date",
            },
            {
              key: "fifth",
              label: "Type de trafique",
            },
            {
              key: "sixth",
              label: "Image",
            },
            {
              key: "seventh",
              label: "Statut",
            },
          ]}
          tableData={exportationData}
        />
      </div>
    </div>
  );
};

const porteurData = [
  {
    first: (
      <div>
        <p>Groupe électrogène</p>
        <p>150kg</p>
      </div>
    ),
    second: "Paris",
    third: "Bordeau",
    fourth: "11-11-2023",
    fifth: "Trafique Régional",
    sixth: (
      <span className="validate">
        <PhDotOutlineFill /> Validée
      </span>
    ),
  },
  {
    first: (
      <div>
        <p>Groupe électrogène</p>
        <p>150kg</p>
      </div>
    ),
    second: "Paris",
    third: "Bordeau",
    fourth: "11-11-2023",
    fifth: "Trafique Régional",

    sixth: (
      <span className="expired">
        <PhDotOutlineFill /> Expiré
      </span>
    ),
  },
];

const PorteurHistory = () => {
  return (
    <div className="content-padding">
      <FilterDataComponents />
      <div className="ctp-content">
        <Tables
          tableHeader={[
            {
              key: "first",
              label: "Colis à Expédier",
            },
            {
              key: "second",
              label: "Lieu Départ",
            },
            {
              key: "third",
              label: "Destination",
            },
            {
              key: "fourth",
              label: "Date",
            },
            {
              key: "fifth",
              label: "Type de trafique",
            },
            {
              key: "sixth",
              label: "Statut",
            },
          ]}
          tableData={porteurData}
        />
      </div>
    </div>
  );
};

const candidateData = [
  {
    first: (
      <div>
        <p>Groupe électrogène</p>
        <p>150kg</p>
      </div>
    ),
    second: "Paris",
    third: "Bordeau",
    fourth: "11-11-2023",
    fifth: "Trafique Régional",
    sixth: (
      <div className="images">
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
      </div>
    ),
    seventh: (
      <span className="validate">
        <PhDotOutlineFill /> Validée
      </span>
    ),
  },
  {
    first: (
      <div>
        <p>Groupe électrogène</p>
        <p>150kg</p>
      </div>
    ),
    second: "Paris",
    third: "Bordeau",
    fourth: "11-11-2023",
    fifth: "Trafique Régional",
    sixth: (
      <div className="images">
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
      </div>
    ),
  },
];

const CandidateHistory = () => {
  return (
    <div className="content-padding">
      <FilterDataComponents />
      <div className="ctp-content">
        <Tables
          tableHeader={[
            {
              key: "first",
              label: "Colis à Expédier",
            },
            {
              key: "second",
              label: "Lieu Départ",
            },
            {
              key: "third",
              label: "Destination",
            },
            {
              key: "fourth",
              label: "Date",
            },
            {
              key: "fifth",
              label: "Type de trafique",
            },
            {
              key: "sixth",
              label: "Image",
            },
          ]}
          tableData={candidateData}
        />
      </div>
    </div>
  );
};
