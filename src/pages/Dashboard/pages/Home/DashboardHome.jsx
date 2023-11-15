import { SearchIcons } from "../../../../assets/icons/icons";
import PostAnnounce from "../../../../components/globalsComponents/PostAnnounce";
import UsersAccountStatus from "../../../../components/globalsComponents/UsersAccountStatus";
import { Img } from "../../../../kits/kits";

const DashboardHome = () => {
  return (
    <div>
      <PostAnnounce button />
      <div className="content-padding">
        <div className="page-preview">
          <div className="left">
            <div className="vip">
              <div>
                <p>Profiter des avantages illimité avec le l’abonnement VIP</p>
                <button>Devenez membre VIP</button>
              </div>
              <Img image={"Vip.png"} alt={""} />
            </div>
            <div className="search">
              <SearchIcons />
              <input type="text" placeholder="Recherche" />
            </div>
            <p>120 résultats issue de votre recherche</p>
          </div>
          <div className="right">
            <UsersAccountStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
