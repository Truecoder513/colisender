import { SearchIcons } from "../../../../assets/icons/icons";
import MemberDbTopBar from "../../../../components/globalsComponents/MemberDbTopBar";
import UsersAccountStatus from "../../../../components/globalsComponents/UsersAccountStatus";
import { Img } from "../../../../kits/kits";
import AnnounceCard from "./components/AnnounceCard";

const PagePreview = () => {
  return (
    <div>
      <MemberDbTopBar button />
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
            <AnnounceCard />
          </div>
          <div className="right">
            <UsersAccountStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePreview;
