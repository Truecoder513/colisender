import { PhDotOutlineFill } from "../../../../../assets/icons/icons";
import BarData, {
  LineData,
} from "../../../../../components/globalsComponents/Charts";
import Tables from "../../../../../components/globalsComponents/Tables";
import { Img } from "../../../../../kits/kits";

const Home = () => {
  return (
    <div className="modo-home">
      <div className="members-stats">
        <div>
          <p>Membres</p>
          <p>1205</p>
        </div>
        <div>
          <p>Membres validés</p>
          <p>1205</p>
        </div>
        <div>
          <p>Membres rejetés</p>
          <p>1205</p>
        </div>
      </div>
      <div className="charts">
        <div className="chs-left">
          <div className="top">
            <p>Deals</p>
            <div>
              <div>
                <span></span>
                <p>Expédition</p>
              </div>
              <div>
                <span className="carrier"></span>
                <p>Porteur</p>
              </div>
            </div>
          </div>
          <LineData />
        </div>
        <div className="chs-right">
          <div className="top">
            <p>Statut de membres</p>
            <select name="" id="">
              <option value="Semaine">Semaine</option>
            </select>
          </div>
          <BarData />
        </div>
      </div>
      <div className="annoncements">
        <h3>Annonces</h3>
        <div className="a-stats-content">
          {annonces.map((item, index) => (
            <div key={item.label + index} className="a-stats-item">
              <label>{item.label}</label>
              <p>{item.numbers}</p>
              <div>
                <div className="progress">
                  <span
                    className="length"
                    style={{
                      width: `${item.length}%`,
                      backgroundColor: item.color,
                    }}
                  ></span>
                  <span></span>
                </div>
                <label>{item.length}%</label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Nouveau traitement</h3>
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
          tableData={newData}
        />
      </div>
    </div>
  );
};

export default Home;

const annonces = [
  {
    label: "Anonces",
    numbers: 1250,
    length: 30,
    color: "#3AA960",
  },
  {
    color: "#4F65BB",
    label: "Annonces validées",
    numbers: 805,
    length: 20,
  },
  {
    color: "#AC4FBB",
    label: "Annonce rejetées",
    numbers: 1250,
    length: 35,
  },
  {
    color: "#FFA800",
    label: "Deal",
    numbers: 150,
    length: 15,
  },
];

const newData = [
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
      <span className="new">
        <PhDotOutlineFill /> Nouveau
      </span>
    ),
  },
];
