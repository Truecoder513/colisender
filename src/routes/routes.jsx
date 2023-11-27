import PagePreview from "../pages/Dashboard/pages/Apercu/PagePreview";
import FinishedSubsriptions from "../pages/Dashboard/pages/FInishedSubsriptions/FInishedSubsriptions";
import Parametre from "../pages/Dashboard/pages/Parametre/Parametre";
import AnnonceHistory from "../pages/Dashboard/pages/annonceHistory/AnnonceHistory";
import AnnonceMarketPlace from "../pages/Dashboard/pages/annoncesMarketPlace/AnnonceMarketPlace";
import MyProfil from "../pages/Dashboard/pages/monProfil/MyProfil";
import NoteRecommandation from "../pages/Dashboard/pages/monProfil/NoteRecommandation";
import Statisques from "../pages/Dashboard/pages/statistiques/Statisques";
import Subscriptions from "../pages/Dashboard/pages/subscriptions/Subscriptions";
import SubscriptionsTariff from "../pages/Dashboard/pages/subscriptions/SubscriptionsTariff";

import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

export const notAuthRoutes = [
  {
    path: "/login",
    label: "Se connecter",
    element: <Login />,
  },
  {
    path: "/signup",
    label: "S'inscrire",
    element: <SignUp />,
  },
];

export const authedRoutes = [
  {
    path: "/apercu",
    label: "Aperçu",
    element: <PagePreview />,
  },
  {
    path: "/annonces",
    label: "Annonces",
    element: <AnnonceMarketPlace />,
  },
  {
    path: "/stats",
    label: "Mes satistiques",
    element: <Statisques />,
  },
  {
    path: "/settings",
    label: "Parametre",
    element: <Parametre />,
  },
  {
    path: "/annoucementsHistory",
    label: "Historiques des annonces",
    element: <AnnonceHistory />,
  },
  {
    path: "/profil",
    label: "Profile",
    element: <MyProfil />,
  },
  {
    path: "/subscriptions",
    label: "Abonnement",
    element: <Subscriptions />,
  },
  {
    path: "/subscriptionsTariff",
    label: "Abonnement",
    element: <SubscriptionsTariff />,
  },
  {
    path: "/reports",
    label: "Notes et recommendations",
    element: <NoteRecommandation />,
  },
  {
    path: "/finishSubscriptions",
    label: "Finaliser Mon inscription",
    element: <FinishedSubsriptions />,
  },
];
