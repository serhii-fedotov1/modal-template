import { useModal } from "../context/ModalContext";
import { Button } from "../components/button/Button";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from "../components/modal/Modal";

export const OtherModal = ({ content }) => {
  const { hide } = useModal();

  return (
    <Modal>
      <ModalTitle>Other modal</ModalTitle>
      <ModalBody>
        <p>My content is passed through props. Observe:</p>
        <div className="m-1 p-3 rounded-md bg-gray-400">{content}</div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={hide}>Done</Button>
      </ModalFooter>
    </Modal>
  );
};
