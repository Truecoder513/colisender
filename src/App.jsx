import AppRouter from "./routes/AppRouter";
import "./assets/styles/default.scss";
import "./assets/styles/globalsComponents.scss";
import "./assets/styles/layouts/authLayaout.scss";
import "./assets/styles/layouts/memberDashboard.scss";
import "./assets/styles/login&signUp.scss";
import "./components/header/header.scss";
import "./assets/styles/dashboard/pagePreview.scss";
import AppContext from "./context/AppContext";
import { useContext } from "react";
import MemberDashboardLayout from "./components/layouts/MemberDashboardLayout";

function App() {
  const { auth } = useContext(AppContext);
  return (
    <>
      {auth.isAuth ? (
        <MemberDashboardLayout>
          <AppRouter />
        </MemberDashboardLayout>
      ) : (
        <AppRouter />
      )}
    </>
  );
}

export default App;
