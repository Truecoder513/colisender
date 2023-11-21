import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { CloseIcon } from "../../assets/icons/icons";

const Modal = () => {
  const { modal, handleShowModal } = useContext(AppContext);
  return modal.show ? (
    <div className="modal">
      <div className={`modalContainer ${modal.large ? "largeModal" : ""}`}>
        {!modal.large && (
          <div className="close">
            <span onClick={() => handleShowModal("close")}>
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
const Modal2 = () => {
  const { modal2 } = useContext(AppContext);
  return modal2.show ? (
    <div className="modal">
      <div className={`modalContainer ${modal2.large ? "largeModal" : ""}`}>
        {modal2.modalContent}
      </div>
    </div>
  ) : (
    ""
  );
};

const ModalContainer = () => {
  return (
    <>
      <Modal />
      <Modal2 />
    </>
  );
};

export default ModalContainer;
