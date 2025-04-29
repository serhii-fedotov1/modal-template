import { Button } from "../components/button/Button";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from "../components/modal/Modal";
import { useModal } from "../context/ModalContext";

export const SimpleModal = () => {
  const { hide } = useModal();

  return (
    <Modal>
      <ModalTitle>Simple modal</ModalTitle>
      <ModalBody>
        <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          consequatur quibusdam temporibus, mollitia molestiae quo et quis dicta
          distinctio. Dicta nam id qui neque quos sint adipisci at modi.
          Similique illum expedita, deserunt tempore ipsum harum necessitatibus
          dolorem! Quibusdam et deleniti necessitatibus ipsa. Consequatur dolor,
          necessitatibus sequi aperiam nihil, numquam ratione quia officia eius
          voluptas dolorum laudantium nisi doloremque voluptates eveniet? Minus
          explicabo fugit iusto earum veritatis cum expedita vel.
        </p>
        <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          consequatur quibusdam temporibus, mollitia molestiae quo et quis dicta
          distinctio. Dicta nam id qui neque quos sint adipisci at modi.
          Similique illum expedita, deserunt tempore ipsum harum necessitatibus
          dolorem! Quibusdam et deleniti necessitatibus ipsa. Consequatur dolor,
          necessitatibus sequi aperiam nihil, numquam ratione quia officia eius
          voluptas dolorum laudantium nisi doloremque voluptates eveniet? Minus
          explicabo fugit iusto earum veritatis cum expedita vel.
        </p>
        <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          consequatur quibusdam temporibus, mollitia molestiae quo et quis dicta
          distinctio. Dicta nam id qui neque quos sint adipisci at modi.
          Similique illum expedita, deserunt tempore ipsum harum necessitatibus
          dolorem! Quibusdam et deleniti necessitatibus ipsa. Consequatur dolor,
          necessitatibus sequi aperiam nihil, numquam ratione quia officia eius
          voluptas dolorum laudantium nisi doloremque voluptates eveniet? Minus
          explicabo fugit iusto earum veritatis cum expedita vel.
        </p>
        <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          consequatur quibusdam temporibus, mollitia molestiae quo et quis dicta
          distinctio. Dicta nam id qui neque quos sint adipisci at modi.
          Similique illum expedita, deserunt tempore ipsum harum necessitatibus
          dolorem! Quibusdam et deleniti necessitatibus ipsa. Consequatur dolor,
          necessitatibus sequi aperiam nihil, numquam ratione quia officia eius
          voluptas dolorum laudantium nisi doloremque voluptates eveniet? Minus
          explicabo fugit iusto earum veritatis cum expedita vel.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={hide}>Done</Button>
      </ModalFooter>
    </Modal>
  );
};
