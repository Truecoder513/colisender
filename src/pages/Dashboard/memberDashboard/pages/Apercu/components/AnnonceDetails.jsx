/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import {
  ArrowBackRounded,
  IonIosArrowDown,
  PhDotOutlineFill,
  RiShareLine,
} from "../../../../../../assets/icons/icons";
import MemberDbTopBar from "../../../../../../components/globalsComponents/MemberDbTopBar";
import AppContext from "../../../../../../context/AppContext";
import { Img } from "../../../../../../kits/kits";
import { Popover } from "@mui/material";
import ShareContainer from "../../../../../../components/globalsComponents/ShareContainer";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const AnnonceDetails = ({ announce }) => {
  const { handleShowModal } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopover = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (e, isExpanded) => {
    console.log(panel, isExpanded);
    setExpanded(isExpanded ? panel : false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "announcePopover" : undefined;
  return (
    <div>
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
      <MemberDbTopBar
        left={
          <button
            onClick={() => {
              handleShowModal("close");
            }}
          >
            <ArrowBackRounded />
            Détail de l’annonce
          </button>
        }
        button={true}
        type={announce.type === "transport" ? "porteur" : "devisColis"}
      />
      <div className="annoncesInfos">
        <div
          className={`annoncerStats ${
            announce.type === "kilos" ? "colisAnnonce" : ""
          }`}
        >
          <div className="left">
            <Img image={"user.jpeg"} alt={"user.jpg"} />
            <div className="ac-infos">
              <div>
                <p>{announce.title}</p>
                <p>{announce.stars}</p>
              </div>
              <div>
                <span>New York; Manhattan</span>
                <span>
                  <PhDotOutlineFill /> il y a 1min
                </span>
                <span>
                  <PhDotOutlineFill /> Expire dans 5 jours
                </span>
                <span>
                  <PhDotOutlineFill /> En cours de traitement
                </span>
              </div>
            </div>
          </div>
          <span className="share" onClick={(e) => handlePopover(e)}>
            <RiShareLine />
          </span>
        </div>
        <div className="colisInfo">
          <div className="left">
            <h5>A Propos de l’epédition</h5>
            <p>{announce.description}</p>
            {announce.type === "transport" && (
              <div className="colisPreviews">
                <h5>Colis</h5>
                <div className="imgs">
                  <Img image={"user.jpeg"} alt={"user.jpg"} />
                  <Img image={"user.jpeg"} alt={"user.jpg"} />
                  <Img image={"user.jpeg"} alt={"user.jpg"} />
                </div>
                <h5>Vidéo</h5>
                <video width="100%" height="240" controls>
                  <source src="/images/video.mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {announce.type === "kilos" && (
              <div className="annoncer-paper">
                <h5>Passeport</h5>
                <Img image={"passeport.png"} alt={"passeport"} />
                <h5>Billet d'avion</h5>
                <Img image={"billet.png"} alt={"billet.jpg"} />
              </div>
            )}
          </div>

          <div className="right">
            <Accordion
              expanded={expanded === "date"}
              onChange={handleChange("date")}
              className="accordion"
            >
              <AccordionSummary expandIcon={<IonIosArrowDown />}>
                Date
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordiondetails">
                  <div>
                    <span>15 Juil 2023</span>
                    <p>Date depart</p>
                  </div>
                  <div>
                    <span>15 Juil 2023</span>
                    <p>Date d'arrivée</p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "itineraie"}
              onChange={handleChange("itineraie")}
              className="accordion"
            >
              <AccordionSummary expandIcon={<IonIosArrowDown />}>
                Itinéraie
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordiondetails">
                  <div>
                    <span>Paris</span>
                    <p>Lieu de départ</p>
                  </div>
                  <div>
                    <span>Bordeaux</span>
                    <p>Lieu de destination</p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "poids"}
              onChange={handleChange("poids")}
              className="accordion"
            >
              <AccordionSummary expandIcon={<IonIosArrowDown />}>
                Poids et dimension
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordiondetails">
                  <div>
                    <span>150 Kg</span>
                    <p>Lieu de départ</p>
                  </div>
                  <div>
                    <span>1,76m </span>
                    <p>Largeur du colis</p>
                  </div>
                  <div>
                    <span>2,00m</span>
                    <p>Hauteur du colis </p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "budjet"}
              onChange={handleChange("budjet")}
              className="accordion"
            >
              <AccordionSummary expandIcon={<IonIosArrowDown />}>
                Budget
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordiondetails">
                  <div>
                    <span>500</span>
                    <p>Dollar</p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "destinataire"}
              onChange={handleChange("destinataire")}
              className="accordion"
            >
              <AccordionSummary expandIcon={<IonIosArrowDown />}>
                Destinataire
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordiondetails">
                  <div>
                    <span>John cena</span>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "currentValue"}
              onChange={handleChange("currentValue")}
              className="accordion"
            >
              <AccordionSummary expandIcon={<IonIosArrowDown />}>
                Valeur actuelle du colis
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordiondetails">
                  <div>
                    <span>500</span>
                    <p>Dollar</p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "fragilite"}
              onChange={handleChange("fragilite")}
              className="accordion"
            >
              <AccordionSummary expandIcon={<IonIosArrowDown />}>
                Fragilité du colis
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordiondetails">
                  <div>
                    <span>Solide</span>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "colisState"}
              onChange={handleChange("colisState")}
              className="accordion"
            >
              <AccordionSummary expandIcon={<IonIosArrowDown />}>
                Etat du colis
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordiondetails">
                  <div>
                    <span>Neuf</span>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnonceDetails;
