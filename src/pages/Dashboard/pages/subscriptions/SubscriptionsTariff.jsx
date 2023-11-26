/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router";
import {
  ArrowBackRounded,
  IconsDoneDuotone,
} from "../../../../assets/icons/icons";
import MemberDbTopBar from "../../../../components/globalsComponents/MemberDbTopBar";

const SubscriptionsTariff = () => {
  const navigate = useNavigate();
  return (
    <div className="subscribe">
      <MemberDbTopBar
        left={
          <button onClick={() => navigate(-1)}>
            <ArrowBackRounded />
            Nouvel abonnement
          </button>
        }
        style={{ backgroundColor: "#D8D8D9", padding: "20px 20px 70px 20px" }}
      />
      <div className="newSubscription">
        <h1>Plan Tarifaire</h1>
        <p>
          Que vos besoins d’expédition pour gagner du temps soient petits ou
          grands, nous sommes là pour vous aider avec votre colis.
        </p>

        <div className="price">
          {tarifs.map((tarif, index) => (
            <div
              key={index}
              className={`${tarif.type === "VIP" ? "jackpot" : ""}`}
            >
              {tarif.type === "VIP" ? (
                <span className="jp-bubble">jackpot</span>
              ) : (
                ""
              )}
              <h1>
                {tarif.price}$<span>{tarif?.period}</span>
              </h1>
              <h3>{tarif.type}</h3>
              <p>{tarif.desc}</p>
              <ul>
                {tarif.adv.map((adv, index) => (
                  <li key={adv + index}>
                    <IconsDoneDuotone /> {adv}
                  </li>
                ))}
              </ul>
              <button>Choisir le plan</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsTariff;

const tarifs = [
  {
    price: 0,
    type: "Gratuit",
    desc: "Libérez la puissance de l'automatisation.",
    adv: ["1 poste d’annonce", "1 colis à expédier", "Badge de membre"],
  },
  {
    price: 32,
    period: "/Mois",
    type: "Abonnement 2",
    desc: "Des outils avancés pour faire passer votre travail à la vitesse supérieure.",
    adv: [
      "3 poste d’annonce",
      "3 colis à expédier ",
      "Badge de membre",
      "1 Ads sur facebook",
    ],
  },
  {
    price: 54,
    period: "/3 Mois",
    type: "Abonnement 3",
    desc: "Des outils avancés pour faire passer votre travail à la vitesse supérieure.",
    adv: [
      "12 poste d’annonce",
      "12 colis à expédier ",
      "Badge de membre",
      "3 Ads sur facebook",
    ],
  },
  {
    price: 100,
    period: "/6 Mois",
    type: "Semaine ",
    desc: "Libérez la puissance de l'automatisation.",
    adv: [
      "24 poste d’annonce",
      "24 colis à expédier ",
      "Badge de membre",
      "12 Ads sur facebook",
    ],
  },
  {
    price: 100,
    period: "/1 an",
    type: "Mensuel ",
    desc: "Des outils avancés pour faire passer votre travail à la vitesse supérieure.",
    adv: [
      "32 poste d’annonce",
      "32 colis à expédier ",
      "Badge de membre",
      "24 Ads sur facebook",
    ],
  },
  {
    price: 250,
    period: "/mois",
    type: "VIP",
    desc: "Accès illimité au opérations",
    adv: [
      "Poster les annonce illimité",
      "Porter colis illimité ",
      "Ads illimité",
      "Badge",
      "Bonus",
    ],
  },
];
