import { useModal } from "../../context/ModalContext";
import { Button } from "../button/Button";

export const Modal = ({ children, className }) => {
  const { hide } = useModal();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-filter backdrop-blur-sm"
      onClick={hide}
      role="dialog"
      aria-modal="true"
    >
      <dialog
        open
        className="relative w-full max-w-lg max-h-[80%] mx-auto bg-white rounded-lg shadow-xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
};

export const ModalTitle = ({ children }) => {
  const { hide } = useModal();

  return (
    <div className="flex justify-between items-center mb-6">
      <h2>{children}</h2>
      <Button onClick={hide}>X</Button>
    </div>
  );
};

export const ModalBody = ({ children }) => {
  return <div className="max-h-[400px] overflow-y-auto mb-6">{children}</div>;
};

export const ModalFooter = ({ children }) => {
  return <div className="flex justify-end items-center">{children}</div>;
};
