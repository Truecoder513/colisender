/* eslint-disable react/prop-types */
import { Popover } from "@mui/material";
import {
  BaselineTiktok,
  CalendarIcon,
  CloseCircled,
  HeightIcon,
  IcRoundTrain,
  IconProfileFill,
  InstagramAlt,
  IonLocation,
  IonLogoTwitter,
  IonLogoYoutube,
  LengthIcon,
  LinkedinWithCircle,
  MdiFacebook,
  MinibusIcon,
  PhDotOutlineFill,
  RiShareLine,
  UilPlaneFly,
  WeightIcon,
} from "../../../../../assets/icons/icons";
import { Img } from "../../../../../kits/kits";
import { useState } from "react";

const ShareContainer = ({ handleClose }) => {
  return (
    <div className="shareContainer">
      <div className="top">
        <p>Partager avec vos proches</p>
        <span onClick={handleClose}>
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

const AnnounceCard = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "announcePopover" : undefined;
  return (
    <div className="search-result">
      <div className="s-r-item">
        <Img image={"user.jpeg"} alt={""} />
        <div className="item-content">
          <div className="top">
            <div className="left">
              <div>
                <h3>
                  Alban Miro transport <span> VIP</span>{" "}
                </h3>
                <p>etoile (4.5)</p>
              </div>
            </div>
            <div className="right">
              <div className="announce-content">
                <p>
                  <IconProfileFill /> 05 postulants
                </p>
                <p>
                  <PhDotOutlineFill /> il y a une 1h0min
                </p>
                <span aria-describedby={id} onClick={handleClick}>
                  <RiShareLine />
                </span>
                <Popover
                  id={id}
                  open={open}
                  // style={{ width: "50vw" }}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <ShareContainer handleClose={handleClose} />
                </Popover>
              </div>
            </div>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis culpa
            aspernatur saepe ratione velit quidem quis vel tempore dolore. Odio
            eaque sed culpa numquam sapiente! Quod architecto aliquid itaque
            esse!
          </p>
          <div className="trip-info">
            <span>
              <IonLocation />
              Paris - Bordeaux
            </span>
            <span>
              <CalendarIcon />
              12, Août
            </span>
            <span>
              <WeightIcon />
              120Kg
            </span>
            <span>
              <HeightIcon />
              450 cm
            </span>
            <span>
              <LengthIcon />
              100 cm
            </span>
            <span>
              <UilPlaneFly />
            </span>
            <span>
              <MinibusIcon />
            </span>
            <span>
              <IcRoundTrain />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnounceCard;
