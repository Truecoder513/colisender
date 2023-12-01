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

export const ShareContainer2 = ({ handleClose }) => {
  return (
    <div className="shareContainer2">
      <div className="top">
        <p>Booster l’annonce sur nos page sociaux</p>
        <span onClick={(e) => handleClose(e)}>
          <CloseCircled />
        </span>
      </div>
      <div className="content">
        <div className="account-links">
          <div>
            <input type="radio" name="instagram" id="instagram" />
            <label htmlFor="instagram">
              <InstagramAlt /> Instagram
            </label>
          </div>
          <div>
            <input type="radio" name="Linkedin" id="Linkedin" />
            <label htmlFor="Linkedin">
              <LinkedinWithCircle /> Linkedin
            </label>
          </div>
          <div>
            <input type="radio" name="Twitter" id="Twitter" />
            <label htmlFor="Twitter">
              <IonLogoTwitter /> Twitter
            </label>
          </div>
          <div>
            <input type="radio" name="TikTok" id="TikTok" />
            <label htmlFor="TikTok">
              <BaselineTiktok /> TikTok
            </label>
          </div>
          <div>
            <input type="radio" name="Facebook" id="Facebook" />
            <label htmlFor="Facebook">
              <MdiFacebook /> Facebook
            </label>
          </div>
        </div>

        <button>Valider</button>
      </div>
    </div>
  );
};
