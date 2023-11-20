/* eslint-disable react/prop-types */
import {
  BaselineTiktok,
  CloseCircled,
  InstagramAlt,
  IonLogoTwitter,
  IonLogoYoutube,
  LinkedinWithCircle,
  MdiFacebook,
} from "../../assets/icons/icons";

const ShareContainer = ({ handleClose }) => {
  return (
    <div className="shareContainer">
      <div className="top">
        <p>Partager avec vos proches</p>
        <span onClick={(e) => handleClose(e)}>
          <CloseCircled />
        </span>
      </div>
      <div className="content">
        <div className="account-links">
          <span>
            <InstagramAlt />
          </span>
          <span>
            <LinkedinWithCircle />
          </span>
          <span>
            <IonLogoTwitter />
          </span>
          <span>
            <IonLogoYoutube />
          </span>
          <span>
            <BaselineTiktok />
          </span>
          <span>
            <MdiFacebook />
          </span>
        </div>
        <p>Partagez ce lien</p>
        <p className="link">
          https://docs.google.com/document/d/1BoubO0hbNC-UsjqOJasvBeqtThnljYZRnXTeZkFZzRM/edit
        </p>
        <button>Copier l’URL</button>
      </div>
    </div>
  );
};

export default ShareContainer;
