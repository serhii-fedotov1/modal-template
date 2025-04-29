import { Button } from "./components/button/Button";
import { useModal } from "./context/ModalContext";

export const Header = () => {
  const { open } = useModal();

  const openSimpleModal = () => {
    open({ name: "simpleModal" });
  };

  return (
    <header className="flex justify-between items-center bg-gray-800 p-3">
      <h1 className="text-xl font-bold text-gray-200">Modal DEMO</h1>
      <Button onClick={openSimpleModal}>Open Modal</Button>
    </header>
  );
};
