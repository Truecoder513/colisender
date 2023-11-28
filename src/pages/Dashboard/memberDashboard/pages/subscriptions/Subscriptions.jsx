import { useNavigate } from "react-router";
import MemberDbTopBar from "../../../../../components/globalsComponents/MemberDbTopBar";
import { ArrowBackRounded } from "../../../../../assets/icons/icons";

import { Link } from "react-router-dom";
import { Img } from "../../../../../kits/kits";

const Subscriptions = () => {
  const navigate = useNavigate();
  return (
    <div className="subscribe">
      <MemberDbTopBar
        left={
          <button onClick={() => navigate(-1)}>
            <ArrowBackRounded />
            Plan abonnement
          </button>
        }
        button
        type={"post"}
        style={{ backgroundColor: "#D8D8D9", padding: "20px 20px 70px 20px" }}
      />

      <div className="info">
        <div>
          <h1>
            <span></span>
            Abonnement Actif
            <span> (expire dans 15 jours)</span>
          </h1>
          <div>
            <h3>Votre abonnement mensuel</h3>
            <p>
              avec votre plan d’abonnement vous disposez de 30 jours pour
              recevoir et postuler au anoonce de livraison de partout où vous
              êtes. Vous avez aussi la possibilité de gagner plus avec nootre
              plan VIP{" "}
            </p>
            <Link to="/subscriptionsTariff">Voir nos abonnements</Link>
          </div>
        </div>
        <Img image={"subscribe.png"} />
      </div>
    </div>
  );
};

export default Subscriptions;
