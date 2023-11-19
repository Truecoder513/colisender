import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Modal = () => {
  const { modal } = useContext(AppContext);
  return (
    <div className="modal">
      {modal.show ? <div className="modalContainer"></div> : ""}
    </div>
  );
};

export default Modal;
