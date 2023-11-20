import { useState } from "react";

const NewAnnonce = () => {
  const [annonceData, setAD] = useState({
    type: "",
  });

  return (
    <div>
      <div className="setAnnonceInfo">
        <h2>Nouvelle annonce</h2>
        {!annonceData.type && (
          <form action="">
            <label htmlFor="one">
              <div>
                <input
                  type="radio"
                  name=""
                  id="one"
                  value={annonceData.type}
                  onChange={() =>
                    setAD((prev) => ({
                      ...prev,
                      type: "one",
                    }))
                  }
                  checked={annonceData.type === "one"}
                />
                <p>Je veux envoyé un seul colis</p>
              </div>
            </label>
            <label htmlFor="multiple">
              <div>
                <input
                  type="radio"
                  name=""
                  id="multiple"
                  value={annonceData.type}
                  onChange={() =>
                    setAD((prev) => ({
                      ...prev,
                      type: "multiple",
                    }))
                  }
                  checked={annonceData.type === "multiple"}
                />
                <p>Je suis porteur disposant de Kilo à vendre</p>
              </div>
            </label>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewAnnonce;
