import { ModalRoot } from "./components/modal/ModalRoot";
import { Content } from "./Content";
import { ModalProvider } from "./context/ModalContext";

export const App = () => {
  return (
    <ModalProvider>
      <Content />
      <ModalRoot />
    </ModalProvider>
  );
};
