import AppRouter from "./routes/AppRouter";
import "./assets/styles/default.scss";
import "./assets/styles/announceDetails.scss";
import "./assets/styles/globalsComponents.scss";
import "./assets/styles/layouts/authLayaout.scss";
import "./assets/styles/layouts/memberDashboard.scss";
import "./assets/styles/layouts/adminModoLayout.scss";
import "./assets/styles/login&signUp.scss";
import "./components/header/header.scss";
import "./assets/styles/dashboard/usersDashboard/pagePreview.scss";
import "./assets/styles/dashboard/usersDashboard/finishSubcriptions.scss";
import "./assets/styles/dashboard/usersDashboard/annonceMarketPlace.scss";
import "./assets/styles/dashboard/usersDashboard/parametre.scss";
import "./assets/styles/dashboard/usersDashboard/stats.scss";
import "./assets/styles/dashboard/usersDashboard/myProfil&notes.scss";
import "./assets/styles/dashboard/usersDashboard/subscribe.scss";
import "./assets/styles/dashboard/modoDashboard/home.scss";
import AppContext from "./context/AppContext";
import { useContext } from "react";
import MemberDashboardLayout from "./components/layouts/MemberDashboardLayout";
import "react-toastify/dist/ReactToastify.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ModalContainer from "./components/globalsComponents/Modal";
import ModoAdminLayout from "./components/layouts/ModoAdminLayout";

const stripePromise = loadStripe(
  "pk_test_51ODUHMA7rHPb5tvlx3xUIz8ofGVKfPbN8vshBaXWUG242z9M8Gy8dPZSFKAT9V1aXRqGftgRLT2OZ2nQr0dldS7p00nKDsT1iK"
);

function App() {
  const { auth } = useContext(AppContext);
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: "paiement123_secret_abc123def456",
  // };
  return (
    <>
      <ModalContainer />
      <Elements stripe={stripePromise}>
        {auth.isAuth && auth.authInfos.role === "users" ? (
          <MemberDashboardLayout>
            <AppRouter />
          </MemberDashboardLayout>
        ) : auth.isAuth && auth.authInfos.role === "modo" ? (
          <ModoAdminLayout>
            <AppRouter />
          </ModoAdminLayout>
        ) : (
          <AppRouter />
        )}
      </Elements>
    </>
  );
}

export default App;
