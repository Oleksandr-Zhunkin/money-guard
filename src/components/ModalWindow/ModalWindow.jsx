import Modal from "react-modal";
import s from "./ModalWindow.module.scss";
Modal.setAppElement("#root");

const ModalWindow = ({ children, isOpen, onClose }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={s.modal}
        closeTimeoutMS={250}
        overlayClassName={s.overlay}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};
export default ModalWindow;
