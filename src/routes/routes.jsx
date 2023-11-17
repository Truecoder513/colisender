import PagePreview from "../pages/Dashboard/pages/Apercu/PagePreview";
import FinishedSubsriptions from "../pages/Dashboard/pages/FinishedSubsriptions.jsx/FinishedSubsriptions";
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
    element: "",
  },
  {
    path: "/stats",
    label: "Mes satistiques",
    element: "",
  },
  {
    path: "/settings",
    label: "Parametre",
    element: "",
  },
  {
    path: "/annoucementsHistory",
    label: "Historiques des annonces",
    element: "",
  },
  {
    path: "/profil",
    label: "Profile",
    element: "",
  },
  {
    path: "/subscriptions",
    label: "Abonnement",
    element: "",
  },
  {
    path: "/reports",
    label: "Notes et recommendations",
    element: "",
  },
  {
    path: "/finishSubscriptions",
    label: "Finaliser Mon inscription",
    element: <FinishedSubsriptions />,
  },
];
