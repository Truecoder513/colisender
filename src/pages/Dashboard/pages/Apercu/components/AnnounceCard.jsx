/* eslint-disable react/prop-types */
import { Popover } from "@mui/material";
import {
  CalendarIcon,
  HeightIcon,
  IcRoundTrain,
  IconProfileFill,
  IonLocation,
  LengthIcon,
  MinibusIcon,
  PhDotOutlineFill,
  RiShareLine,
  UilPlaneFly,
  WeightIcon,
} from "../../../../../assets/icons/icons";
import { Img } from "../../../../../kits/kits";
import { useContext, useState } from "react";
import AppContext from "../../../../../context/AppContext";
import AnnonceDetails from "./AnnonceDetails";
import { CantPostAnnonnce } from "../../../../../components/toastMessages";
import ShareContainer from "../../../../../components/globalsComponents/ShareContainer";
import { toast } from "react-toastify";

const AnnounceCard = () => {
  const { handeShowModal, auth } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopover = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "announcePopover" : undefined;

  return (
    <>
      <Popover
        id={id}
        open={open}
        onClick={(e) => e.stopPropagation()}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <ShareContainer handleClose={handleClose} />
      </Popover>
      <div
        className="search-result"
        onClick={() => {
          !auth.verified
            ? toast(<CantPostAnnonnce />, { hideProgressBar: true })
            : handeShowModal("show", <AnnonceDetails />, true);
        }}
      >
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
                  <span aria-describedby={id} onClick={(e) => handlePopover(e)}>
                    <RiShareLine />
                  </span>
                </div>
              </div>
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              culpa aspernatur saepe ratione velit quidem quis vel tempore
              dolore. Odio eaque sed culpa numquam sapiente! Quod architecto
              aliquid itaque esse!
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
    </>
  );
};

export default AnnounceCard;
