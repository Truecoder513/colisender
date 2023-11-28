/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router";

import MemberDbTopBar from "../../../../../components/globalsComponents/MemberDbTopBar";

import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import {
  PhDotOutlineFill,
  ArrowBackRounded,
  IonIosArrowDown,
} from "../../../../../assets/icons/icons";
import { Img } from "../../../../../kits/kits";

const MyProfil = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (e, isExpanded) => {
    console.log(panel, isExpanded);
    setExpanded(isExpanded ? panel : false);
  };
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

          <div className="profil-info">
            <Accordion
              expanded={expanded === "Information général"}
              onChange={handleChange("Information général")}
              className="accordion"
            >
              <AccordionSummary expandIcon={<IonIosArrowDown />}>
                Information général
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordiondetails">
                  <div>
                    <span>Nom</span>
                    <p>Jones</p>
                  </div>
                  <div>
                    <span>Prénoms</span>
                    <p>Alex</p>
                  </div>
                  <div>
                    <span>Type de pièce d’identité</span>
                    <p>Passeport</p>
                  </div>
                  <div>
                    <span>Date de naissance</span>
                    <p>16-Juin-2000</p>
                  </div>
                  <div>
                    <span>Sexe</span>
                    <p>Masculin</p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "Adresse"}
              onChange={handleChange("Adresse")}
              className="accordion"
            >
              <AccordionSummary expandIcon={<IonIosArrowDown />}>
                Adresse
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordiondetails">
                  <div>
                    <span>Pays</span>
                    <p>Benin</p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "Contact"}
              onChange={handleChange("Contact")}
              className="accordion"
            >
              <AccordionSummary expandIcon={<IonIosArrowDown />}>
                Contact
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordiondetails">
                  <div>
                    <span>Pays</span>
                    <p>Benin</p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "Fichier/Document"}
              onChange={handleChange("Fichier/Document")}
              className="accordion"
            >
              <AccordionSummary expandIcon={<IonIosArrowDown />}>
                Fichier/Document
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordiondetails">
                  <div>
                    <span>Pays</span>
                    <p>Benin</p>
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

export default MyProfil;
