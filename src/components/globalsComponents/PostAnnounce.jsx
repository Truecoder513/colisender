import { ColisButton } from "../../kits/kits";

/* eslint-disable react/prop-types */
const PostAnnounce = ({ left = "", button = false }) => {
  return (
    <div className="postAnnounce">
      <div className="left">{left}</div>
      {button && (
        <div className="right">
          <ColisButton label={"Poster une annonnce"} hover />
        </div>
      )}
    </div>
  );
};

export default PostAnnounce;
