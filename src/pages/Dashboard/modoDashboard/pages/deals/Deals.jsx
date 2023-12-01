/* eslint-disable react/jsx-key */
import TabsContainer from "../../../../../components/globalsComponents/TabsContainer";
import { PdfIcon } from "../../../../../assets/icons/icons";
import { FilterDataComponents2 } from "../../../../../components/globalsComponents/FilterDataComponents";
import Tables from "../../../../../components/globalsComponents/Tables";
import { Img } from "../../../../../kits/kits";

const Deals = () => {
  return (
    <TabsContainer
      headers={["Expédition de colis", "Porteur de colis"]}
      topStyle={{
        top: "0",
      }}
      contents={[<Expedition />, <Porteur />]}
    />
  );
};

export default Deals;

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
  },
];

const Expedition = () => {
  return (
    <>
      <FilterDataComponents2 notStatus={false} />
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
        ]}
        tableData={expeditionData}
        deals
        hasDetails
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
  },
];
const Porteur = () => {
  return (
    <>
      <FilterDataComponents2 notStatus={false} />
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
        ]}
        tableData={porteurData}
        details={"porteur"}
        deals
        hasDetails
      />
    </>
  );
};
