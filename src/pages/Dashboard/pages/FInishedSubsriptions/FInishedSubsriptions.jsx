import { useNavigate } from "react-router";
import { ArrowBackRounded } from "../../../../assets/icons/icons";
import MemberDbTopBar from "../../../../components/globalsComponents/MemberDbTopBar";
import { ColisButton } from "../../../../kits/kits";
import { useState } from "react";
import { toast } from "react-toastify";
import EnterpriseSteppers from "./Components/EnterpriseSteppers";
import ParticularSteppers from "./Components/ParticularSteppers";

const FinishedSubsriptions = () => {
  const navigate = useNavigate();

  const [accountData, setAccountData] = useState({
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    !accountData.type
      ? toast.warning("Veuillez choisir le type de compte ")
      : "";
  };
  return (
    <div className="finishSubcription">
      <MemberDbTopBar
        left={
          <button onClick={() => navigate(-1)}>
            <ArrowBackRounded /> Finaliser Mon inscription
          </button>
        }
      />
      <div className="content-padding">
        <div className="setAccountInfo">
          {!accountData.type && (
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="enterprise">
                <div>
                  <input
                    type="radio"
                    name=""
                    id="enterprise"
                    value={accountData.type}
                    onChange={() =>
                      setAccountData((prev) => ({
                        ...prev,
                        type: "enterprise",
                      }))
                    }
                    checked={accountData.type === "enterprise"}
                  />
                  <h3>Je suis une entreprise de transport</h3>
                </div>
                <p>
                  Une entreprise de transport et d’expédition a la possibilité
                  d’expédier les colis pour les membres uniquement{" "}
                </p>
              </label>
              <label htmlFor="particulier">
                <div>
                  <input
                    type="radio"
                    name=""
                    id="particulier"
                    value={accountData.type}
                    onChange={() =>
                      setAccountData((prev) => ({
                        ...prev,
                        type: "particulier",
                      }))
                    }
                    checked={accountData.type === "particulier"}
                  />
                  <h3>Je suis un particulier</h3>
                </div>
                <p>
                  Un particulier a la possibilité d’expédier les colis pour les
                  membres et aussi de faire des annonces d’expédition de colis
                </p>
              </label>
              <ColisButton type="submit" label={"suivant"} />
            </form>
          )}
          {accountData.type && accountData.type === "enterprise" && (
            <EnterpriseSteppers />
          )}
          {accountData.type && accountData.type === "particulier" && (
            <ParticularSteppers />
          )}
        </div>
      </div>
    </div>
  );
};

export default FinishedSubsriptions;
