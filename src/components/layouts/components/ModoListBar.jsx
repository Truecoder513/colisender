import { Link } from "react-router-dom";
import { Img } from "../../../kits/kits";

const ModoListBar = () => {
  return (
    <div className="modoListBar">
      <Link to={"/conseillerWorks"} className="modoBubble">
        <span className="count">25</span>
        <Img image={"user.jpeg"} />
        <span className="active"></span>
      </Link>
      <Link to={"/conseillerWorks"} className="modoBubble">
        <span className="count">25</span>
        <Img image={"user.jpeg"} />
        <span className="active"></span>
      </Link>
      <Link to={"/conseillerWorks"} className="modoBubble">
        <span className="count">25</span>
        <Img image={"user.jpeg"} />
        <span className="active"></span>
      </Link>
      <Link to={"/conseillerWorks"} className="modoBubble">
        <span className="count">25</span>
        <Img image={"user.jpeg"} />
        <span className="active"></span>
      </Link>
    </div>
  );
};

export default ModoListBar;
