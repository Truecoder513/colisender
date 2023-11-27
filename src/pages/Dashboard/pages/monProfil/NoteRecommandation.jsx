import { useNavigate } from "react-router";
import {
  ArrowBackRounded,
  IconStars,
  PhDotOutlineFill,
} from "../../../../assets/icons/icons";
import MemberDbTopBar from "../../../../components/globalsComponents/MemberDbTopBar";
import { Img } from "../../../../kits/kits";

const NoteRecommandation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MemberDbTopBar
        left={
          <button onClick={() => navigate(-1)}>
            <ArrowBackRounded />
            Note & Recommandations
          </button>
        }
        button
      />

      <div className="content-padding">
        <div className="p-r-content">
          <div className="top">
            <div className="left">
              <Img image={"user.jpeg"} alt={"user.jpg"} />
              <div className="user-infos">
                <div>
                  <p>Alex Jones</p>
                  <p>3.5</p>
                </div>
                <div>
                  <span>New York; Manhattan</span>
                  <span>
                    <PhDotOutlineFill /> 17-Jun-2023
                  </span>
                </div>
              </div>
            </div>
            <button>Nouveau</button>
          </div>
          <div className="notes">
            <h1>Notes & Recommandation</h1>

            <div>
              <div>
                <h1>0.0</h1>
                <IconStars />
              </div>
              <div className="note">
                {["5", "4", "3", "2", "1"].map((item, index) => (
                  <div key={index}>
                    <span className="level">{item}</span>
                    <div className="bars">
                      <div></div>
                      <span className="percentage"></span>
                    </div>
                    <span>0.0%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteRecommandation;
