import { useNavigate } from "react-router";
import { ArrowBackRounded } from "../../../../assets/icons/icons";
import MemberDbTopBar from "../../../../components/globalsComponents/MemberDbTopBar";

const MyProfil = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MemberDbTopBar
        left={
          <button onClick={() => navigate(-1)}>
            <ArrowBackRounded />
            Mon Profile
          </button>
        }
        button
      />
    </div>
  );
};

export default MyProfil;
