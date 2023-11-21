/* eslint-disable no-unused-vars */
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
} from "../../assets/icons/icons";
import { Img } from "../../kits/kits";
import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import AnnonceDetails from "../../pages/Dashboard/pages/Apercu/components/AnnonceDetails";
import { CantPostAnnonnce } from "../toastMessages";
import ShareContainer from "./ShareContainer";
import { toast } from "react-toastify";

const AnnounceCard = ({ announce }) => {
  const { handleShowModal, auth } = useContext(AppContext);
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
        className="announce-card"
        onClick={() => {
          !auth.verified
            ? toast(<CantPostAnnonnce />, { hideProgressBar: true })
            : handleShowModal(
                "show",
                <AnnonceDetails announce={announce} />,
                true
              );
        }}
      >
        <div className="announce-item">
          <Img image={"user.jpeg"} alt={""} />
          <div className="item-content">
            <div className="top">
              <div className="left">
                <div>
                  <h3>
                    {announce.name} <span> {announce.annoncerType}</span>
                  </h3>
                  <p>etoile ({announce.stars})</p>
                </div>
              </div>
              <div className="right">
                <div className="announce-content">
                  <p>
                    <IconProfileFill /> {announce.postulant} postulants
                  </p>
                  <p>
                    <PhDotOutlineFill /> il y a une {announce.date}
                  </p>
                  <span aria-describedby={id} onClick={(e) => handlePopover(e)}>
                    <RiShareLine />
                  </span>
                </div>
              </div>
            </div>
            <p className="desc">{announce.description}</p>
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
