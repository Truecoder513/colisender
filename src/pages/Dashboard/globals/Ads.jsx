import { Popover } from "@mui/material";
import { FilterDataComponents2 } from "../../../components/globalsComponents/FilterDataComponents";
import Tables from "../../../components/globalsComponents/Tables";
import { Img } from "../../../kits/kits";
import { useState } from "react";
import { ShareContainer2 } from "../../../components/globalsComponents/ShareContainer";

const Ads = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "announcePopover" : undefined;

  const handlePopover = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const data = [
    {
      first: (
        <div className="profil">
          <Img image={"user.jpeg"} />
          <p>Alex jones</p>
        </div>
      ),
      second: "#125Bi0HE",
      third: "Porteur de colis",
      fourth: "Abonnement actif",
      fifth: "3 ads restant",
      sixth: <button onClick={handlePopover}>Promouvoir l’annonce</button>,
    },
  ];

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <ShareContainer2 handleClose={handleClose} />
      </Popover>
      <FilterDataComponents2 />
      <Tables
        tableHeader={[
          {
            key: "first",
            label: "Membre",
          },
          {
            key: "second",
            label: "ID_annonce",
          },
          {
            key: "third",
            label: "Type_annonce",
          },
          {
            key: "fourth",
            label: "Statut",
          },
          {
            key: "fifth",
            label: "Ads disponible",
          },
          {
            key: "sixth",
            label: "Action",
          },
        ]}
        tableData={data}
        deals
      />
    </div>
  );
};

export default Ads;
