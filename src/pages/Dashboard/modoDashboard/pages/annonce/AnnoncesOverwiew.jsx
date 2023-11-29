/* eslint-disable react/jsx-key */
import { PdfIcon, PhDotOutlineFill } from "../../../../../assets/icons/icons";
import { FilterDataComponents2 } from "../../../../../components/globalsComponents/FilterDataComponents";
import Tables from "../../../../../components/globalsComponents/Tables";
import TabsContainer from "../../../../../components/globalsComponents/TabsContainer";
import { Img } from "../../../../../kits/kits";

const AnnoncesOverwiew = () => {
  return (
    <div>
      <TabsContainer
        headers={["Expédition de colis", "Porteur de colis"]}
        topStyle={{
          top: "0",
        }}
        contents={[<Expedition />, <Porteur />]}
      />
    </div>
  );
};

export default AnnoncesOverwiew;

const expeditionData = [
  {
    first: (
      <div>
        <p>Groupe électrogène</p>
        <p>150kg</p>
      </div>
    ),
    second: (
      <div>
        <p>Paris</p>
        <p>Bordeau</p>
      </div>
    ),
    third: "11-11-2023",
    fourth: (
      <div className="profil">
        <Img image={"user.jpeg"} />
        <p>Alex jones</p>
      </div>
    ),
    fifth: (
      <div className="images">
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
      </div>
    ),
    sixth: "video.mp4",
    seventh: (
      <span className="treat">
        <PhDotOutlineFill /> Traiter
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
    second: (
      <div>
        <p>Paris</p>
        <p>Bordeau</p>
      </div>
    ),
    third: "11-11-2023",
    fourth: (
      <div className="profil">
        <Img image={"user.jpeg"} />
        <p>Alex jones</p>
      </div>
    ),
    fifth: (
      <div className="images">
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
      </div>
    ),
    sixth: "video.mp4",
    seventh: (
      <span className="expired">
        <PhDotOutlineFill /> Refuser
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
    second: (
      <div>
        <p>Paris</p>
        <p>Bordeau</p>
      </div>
    ),
    third: "11-11-2023",
    fourth: (
      <div className="profil">
        <Img image={"user.jpeg"} />
        <p>Alex jones</p>
      </div>
    ),
    fifth: (
      <div className="images">
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
        <Img image={"user.jpeg"} />
      </div>
    ),
    sixth: "video.mp4",
    seventh: (
      <span className="validate">
        <PhDotOutlineFill /> Valider
      </span>
    ),
  },
];

const Expedition = () => {
  return (
    <>
      <FilterDataComponents2 />
      <Tables
        tableHeader={[
          {
            key: "first",
            label: "Colis à Expédier",
          },
          {
            key: "second",
            label: "Itinéraire",
          },
          {
            key: "third",
            label: "Date",
          },
          {
            key: "fourth",
            label: "Expediteur",
          },
          {
            key: "fifth",
            label: "Image",
          },
          {
            key: "sixth",
            label: "Video",
          },
          {
            key: "seventh",
            label: "Statut",
          },
        ]}
        tableData={expeditionData}
      />
    </>
  );
};

const porteurData = [
  {
    first: (
      <div>
        <p>150kg</p>
      </div>
    ),
    second: (
      <div>
        <p>Paris</p>
        <p>Bordeau</p>
      </div>
    ),
    third: "11-11-2023",
    fourth: "Trafique régional",
    fifth: "$200",
    sixth: <PdfIcon />,
    seventh: (
      <span className="treat">
        <PhDotOutlineFill /> Traiter
      </span>
    ),
  },
  {
    first: (
      <div>
        <p>150kg</p>
      </div>
    ),
    second: (
      <div>
        <p>Paris</p>
        <p>Bordeau</p>
      </div>
    ),
    third: "11-11-2023",
    fourth: "Trafique régional",
    fifth: "$200",
    sixth: <PdfIcon />,
    seventh: (
      <span className="expired">
        <PhDotOutlineFill /> Refuser
      </span>
    ),
  },
  {
    first: (
      <div>
        <p>150kg</p>
      </div>
    ),
    second: (
      <div>
        <p>Paris</p>
        <p>Bordeau</p>
      </div>
    ),
    third: "11-11-2023",
    fourth: "Trafique régional",
    fifth: "$200",
    sixth: <PdfIcon />,
    seventh: (
      <span className="validate">
        <PhDotOutlineFill /> Valider
      </span>
    ),
  },
];
const Porteur = () => {
  return (
    <>
      <FilterDataComponents2 />
      <Tables
        tableHeader={[
          {
            key: "first",
            label: "Kilo à vendre",
          },
          {
            key: "second",
            label: "Itinéraire",
          },
          {
            key: "third",
            label: "Date départ",
          },
          {
            key: "fourth",
            label: "Type de trajet",
          },
          {
            key: "fifth",
            label: "Prix",
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
        tableData={porteurData}
        details={"porteur"}
      />
    </>
  );
};
