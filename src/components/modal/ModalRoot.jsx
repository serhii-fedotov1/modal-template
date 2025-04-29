import { createPortal } from "react-dom";
import { useModal } from "../../context/ModalContext";
import { modalMap } from "./modalMap";

export const ModalRoot = () => {
  const { activeModal } = useModal();

  if (!activeModal) {
    return null;
  }

  const Modal = modalMap[activeModal.name];
  const modalProps = activeModal.props || {};

  return createPortal(<Modal {...modalProps} />, document.getElementById('modal'));
};
