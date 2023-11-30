/* eslint-disable react/prop-types */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";

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
    cursor: "pointer",
  },
  [`.images`]: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    img: {
      width: "50px",
      height: "50px",
    },
  },
  [`.profil`]: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    img: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
    },
  },
  [`.expired`]: {
    color: "#FF4D4F",
    svg: {
      fill: "#FF4D4F",
    },
  },
  [`.treat`]: {
    color: "#1890FF",
    svg: {
      fill: "#1890FF",
    },
  },
  [`.validate`]: {
    color: "#288C5C",
    svg: {
      fill: "#288C5C",
    },
  },
  [`.new`]: {
    color: "#544E72",
    svg: {
      fill: "#544E72",
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

const Tables = ({
  tableHeader,
  tableData,
  details = "expedition",
  whichDetails = "transport",
}) => {
  const navigate = useNavigate("");
  const handleDetails = () => {
    if (whichDetails === "transport") {
      if (details === "expedition") {
        navigate("/annoncesDetails/0");
      } else {
        navigate("/annoncesDetails/1");
      }
    } else if (whichDetails === "members") {
      navigate("/membersDetails");
    }
  };
  return (
    <>
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
              {tableHeader.map((item, index) => (
                <StyledTableCell key={item.key + index}>
                  <div>{item.label}</div>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((item, rowIndex) => (
              <StyledTableRow key={rowIndex} onClick={() => handleDetails()}>
                {tableHeader.map((headerItem, headerIndex) => (
                  <StyledTableCell
                    key={headerItem + headerIndex}
                    align={headerIndex > 0 ? "center" : "left"}
                  >
                    {item[headerItem.key]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tables;
