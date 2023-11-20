import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { CloseIcon } from "../../assets/icons/icons";

const Modal = () => {
  const { modal, handeShowModal } = useContext(AppContext);
  return modal.show ? (
    <div className="modal">
      <div className={`modalContainer ${modal.large ? "largeModal" : ""}`}>
        {!modal.large && (
          <div className="close">
            <span onClick={() => handeShowModal("close")}>
              <CloseIcon />
            </span>
          </div>
        )}
        {modal.modalContent}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
