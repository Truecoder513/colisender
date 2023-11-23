import { useNavigate } from "react-router";
import MemberDbTopBar from "../../../../components/globalsComponents/MemberDbTopBar";
import { ArrowBackRounded } from "../../../../assets/icons/icons";

const Parametre = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MemberDbTopBar
        left={
          <button onClick={() => navigate(-1)}>
            <ArrowBackRounded />
            Paramètre
          </button>
        }
      />
    </div>
  );
};

export default Parametre;
