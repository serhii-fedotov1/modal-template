import { Button } from "./components/button/Button";
import { useModal } from "./context/ModalContext";
import { Header } from "./Header";

export const Content = () => {
  const { open } = useModal();

  const openSimpleModal = () => {
    open({ name: "simpleModal" });
  };

  const openOtherModal = () => {
    open({ name: "otherModal", props: { content: "Modal content" } });
  };

  return (
    <div>
      <Header />
      <div className="p-5 flex items-center justify-center gap-2.5">
        <Button onClick={openSimpleModal}>Open modal</Button>
        <Button onClick={openOtherModal}>Open other modal</Button>
      </div>
    </div>
  );
};
