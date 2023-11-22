/* eslint-disable react/prop-types */
import { useState } from "react";
import WeightAnnonce from "./weightAnnonce";
import ColisAnnonce from "./ColisAnnonce";

const NewAnnonce = () => {
  const [annonceData, setAD] = useState({
    type: "",
  });

  return (
    <div>
      <div className="setAnnonceInfo">
        <h2>Une nouvelle Annonce</h2>
        {!annonceData.type && (
          <>
            <form action="">
              <label htmlFor="transporter">
                <div>
                  <input
                    type="radio"
                    name=""
                    id="transporter"
                    value={annonceData.type}
                    onChange={() =>
                      setAD((prev) => ({
                        ...prev,
                        type: "transporter",
                      }))
                    }
                    checked={annonceData.type === "transporter"}
                  />
                  <p>Je veux envoyé un colis</p>
                </div>
              </label>
              <label htmlFor="kilos">
                <div>
                  <input
                    type="radio"
                    name=""
                    id="kilos"
                    value={annonceData.type}
                    onChange={() =>
                      setAD((prev) => ({
                        ...prev,
                        type: "kilos",
                      }))
                    }
                    checked={annonceData.type === "kilos"}
                  />
                  <p>Je dispose d’espace et de kilo</p>
                </div>
              </label>
            </form>
          </>
        )}
        {annonceData.type && annonceData.type === "kilos" && (
          <WeightAnnonce getBack={setAD} />
        )}
        {annonceData.type && annonceData.type === "transporter" && (
          <ColisAnnonce />
        )}
      </div>
    </div>
  );
};

export default NewAnnonce;
