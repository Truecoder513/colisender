import {
  AdsIcon,
  AnnonceIcon,
  DashboardIcon,
  MemberIcon,
} from "../assets/icons/icons";
import AnnoncesOverviewDetails from "../components/globalsComponents/AnnoncesOverviewDetails";
import PagePreview from "../pages/Dashboard/memberDashboard/pages/Apercu/PagePreview";
import FinishedSubsriptions from "../pages/Dashboard/memberDashboard/pages/FInishedSubsriptions/FInishedSubsriptions";
import Parametre from "../pages/Dashboard/memberDashboard/pages/Parametre/Parametre";
import AnnonceHistory from "../pages/Dashboard/memberDashboard/pages/annonceHistory/AnnonceHistory";
import AnnonceMarketPlace from "../pages/Dashboard/memberDashboard/pages/annoncesMarketPlace/AnnonceMarketPlace";
import NoteRecommandation from "../pages/Dashboard/memberDashboard/pages/monProfil/NoteRecommandation";
import Statisques from "../pages/Dashboard/memberDashboard/pages/statistiques/Statisques";
import Subscriptions from "../pages/Dashboard/memberDashboard/pages/subscriptions/Subscriptions";
import SubscriptionsTariff from "../pages/Dashboard/memberDashboard/pages/subscriptions/SubscriptionsTariff";
import Home from "../pages/Dashboard/modoDashboard/pages/Home/Home";
import MembersDetails from "../pages/Dashboard/modoDashboard/pages/Members/MembersDetails";
import MembersList from "../pages/Dashboard/modoDashboard/pages/Members/MembersList";
import AnnoncesOverwiew from "../pages/Dashboard/modoDashboard/pages/annonce/AnnoncesOverwiew";

import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import UserProfil from "../pages/Dashboard/globals/UserProfil";
import Deals from "../pages/Dashboard/modoDashboard/pages/deals/Deals";
import Ads from "../pages/Dashboard/globals/Ads";
import Conseiller from "../pages/Dashboard/modoDashboard/pages/conseiller/Conseiller";
import ConseillerWorks from "../pages/Dashboard/modoDashboard/pages/conseiller/ConseillerWorks";

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
    element: <UserProfil />,
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

export const modoRoutes = [
  {
    path: "/",
    label: (
      <>
        <DashboardIcon /> Dashboard
      </>
    ),
    element: <Home />,
  },
  {
    path: "/annoncemments",
    label: (
      <>
        <AnnonceIcon /> Annonce
      </>
    ),
    element: <AnnoncesOverwiew />,
  },
  {
    path: "/members",
    label: (
      <>
        <MemberIcon /> Membres
      </>
    ),
    element: <MembersList />,
  },
  {
    path: "/membersDetails",
    label: "membersDetails",
    element: <MembersDetails />,
  },
  {
    path: "/deals",
    label: (
      <>
        <MemberIcon /> Deals
      </>
    ),
    element: <Deals />,
  },
  {
    path: "/ads",
    label: (
      <>
        <AdsIcon /> Ads
      </>
    ),
    element: <Ads />,
  },
  {
    path: "/annoncesDetails/:type/:data",
    label: "annoncesDetails",
    element: <AnnoncesOverviewDetails />,
  },
];

export const adminRoutes = [
  {
    path: "/",
    label: (
      <>
        <DashboardIcon /> Dashboard
      </>
    ),
    element: <Home />,
  },
  {
    path: "/annoncemments",
    label: (
      <>
        <AnnonceIcon /> Annonce
      </>
    ),
    element: <AnnoncesOverwiew />,
  },
  {
    path: "/members",
    label: (
      <>
        <MemberIcon /> Membres
      </>
    ),
    element: <MembersList />,
  },

  {
    path: "/conseiller",
    label: (
      <>
        <MemberIcon /> Conseillers
      </>
    ),
    element: <Conseiller />,
  },
  {
    path: "/ads",
    label: (
      <>
        <AdsIcon /> Ads
      </>
    ),
    element: <Ads />,
  },
  {
    path: "/conseillerWorks",
    label: "conseillerWorks",
    element: <ConseillerWorks />,
  },
  {
    path: "/membersDetails",
    label: "membersDetails",
    element: <MembersDetails />,
  },
  {
    path: "/annoncesDetails/:type/:data",
    label: "annoncesDetails",
    element: <AnnoncesOverviewDetails />,
  },
];
