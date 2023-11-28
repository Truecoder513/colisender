/* eslint-disable react/jsx-key */
import { useNavigate } from "react-router";
import {
  ArrowBackRounded,
  PhDotOutlineFill,
} from "../../../../../assets/icons/icons";
import MemberDbTopBar from "../../../../../components/globalsComponents/MemberDbTopBar";
import TabsContainer from "../../../../../components/globalsComponents/TabsContainer";
import FilterDataComponents from "../../../../../components/globalsComponents/FilterDataComponents";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Img } from "../../../../../kits/kits";

const AnnonceHistory = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MemberDbTopBar
        left={
          <button onClick={() => navigate(-1)}>
            <ArrowBackRounded />
            Mes annonces
          </button>
        }
        button
      />
      <TabsContainer
        headers={[
          "Exportation de colis",
          "Porteur de colis",
          "Annonces postulées",
        ]}
        contents={[
          <ExportationHistory />,
          <PorteurHistory />,
          <CandidateHistory />,
        ]}
      />
    </div>
  );
};

export default AnnonceHistory;

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    background: "#708FCB",
    div: {
      background: "white",
      textAlign: "center",
      padding: "2px 10px",
      borderRadius: "5px",
      color: "black",
      fontSize: "12px",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    borderTop: "1px solid rgba(0, 0, 0, 0.05) ",
  },
  [`.images`]: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    img: {
      width: "50px",
      heigth: "50px",
    },
  },
  [`.expired`]: {
    color: "#FF4D4F",
    svg: {
      fill: "#FF4D4F",
    },
  },
  [`.validate`]: {
    color: "#288C5C",
    svg: {
      fill: "#288C5C",
    },
  },
  [`span`]: {
    display: "flex",
    alignItems: "center",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  bordeRadius: "4px",
}));

const ExportationHistory = () => {
  return (
    <div className="content-padding">
      <FilterDataComponents />
      <div className="ctp-content">
        <TableContainer>
          <Table
            aria-label="customized table"
            style={{
              borderCollapse: "separate",
              borderSpacing: "0px 10px",
            }}
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <div>Colis à Expédier</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Lieu Départ</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Destination</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Date</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Type de trafique</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Image</div>
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <div>
                    <p>Groupe électrogène</p>
                    <p>150kg</p>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">Paris</StyledTableCell>
                <StyledTableCell align="center">Bordeau</StyledTableCell>
                <StyledTableCell align="center">16-07-2023</StyledTableCell>
                <StyledTableCell align="center">
                  Trafique Régional
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div className="images">
                    <Img image={"user.jpeg"} />
                    <Img image={"user.jpeg"} />
                    <Img image={"user.jpeg"} />
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <span className="expired">
                    <PhDotOutlineFill /> Expiré
                  </span>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <div>
                    <p>Groupe électrogène</p>
                    <p>150kg</p>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">Paris</StyledTableCell>
                <StyledTableCell align="center">Bordeau</StyledTableCell>
                <StyledTableCell align="center">16-07-2023</StyledTableCell>
                <StyledTableCell align="center">
                  Trafique Régional
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div className="images">
                    <Img image={"user.jpeg"} />
                    <Img image={"user.jpeg"} />
                    <Img image={"user.jpeg"} />
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <span className="validate">
                    <PhDotOutlineFill /> Validée
                  </span>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

const PorteurHistory = () => {
  return (
    <div className="content-padding">
      <FilterDataComponents />
      <div className="ctp-content">
        <TableContainer>
          <Table
            aria-label="customized table"
            style={{
              borderCollapse: "separate",
              borderSpacing: "0px 10px",
            }}
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <div>Colis à convoyer</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Lieu Départ</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Destination</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Date</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Type de trafique</div>
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <div>
                    <p>Groupe électrogène</p>
                    <p>150kg</p>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">Paris</StyledTableCell>
                <StyledTableCell align="center">Bordeau</StyledTableCell>
                <StyledTableCell align="center">16-07-2023</StyledTableCell>
                <StyledTableCell align="center">
                  Trafique Régional
                </StyledTableCell>
                <StyledTableCell align="center">
                  <span className="expired">
                    <PhDotOutlineFill /> Expiré
                  </span>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <div>
                    <p>Groupe électrogène</p>
                    <p>150kg</p>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">Paris</StyledTableCell>
                <StyledTableCell align="center">Bordeau</StyledTableCell>
                <StyledTableCell align="center">16-07-2023</StyledTableCell>
                <StyledTableCell align="center">
                  Trafique Régional
                </StyledTableCell>
                <StyledTableCell align="center">
                  <span className="validate">
                    <PhDotOutlineFill /> Validée
                  </span>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

const CandidateHistory = () => {
  return (
    <div className="content-padding">
      <FilterDataComponents />
      <div className="ctp-content">
        <TableContainer>
          <Table
            aria-label="customized table"
            style={{
              borderCollapse: "separate",
              borderSpacing: "0px 10px",
            }}
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <div>Colis à Expédier</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Lieu Départ</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Destination</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Date</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Type de trafique</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>Image</div>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <div>
                    <p>Groupe électrogène</p>
                    <p>150kg</p>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">Paris</StyledTableCell>
                <StyledTableCell align="center">Bordeau</StyledTableCell>
                <StyledTableCell align="center">16-07-2023</StyledTableCell>
                <StyledTableCell align="center">
                  Trafique Régional
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div className="images">
                    <Img image={"user.jpeg"} />
                    <Img image={"user.jpeg"} />
                    <Img image={"user.jpeg"} />
                  </div>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <div>
                    <p>Groupe électrogène</p>
                    <p>150kg</p>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">Paris</StyledTableCell>
                <StyledTableCell align="center">Bordeau</StyledTableCell>
                <StyledTableCell align="center">16-07-2023</StyledTableCell>
                <StyledTableCell align="center">
                  Trafique Régional
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div className="images">
                    <Img image={"user.jpeg"} />
                    <Img image={"user.jpeg"} />
                    <Img image={"user.jpeg"} />
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
