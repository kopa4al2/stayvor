import { RouterProvider } from "react-router-dom";
import "./App.css";
import Modal from "./components/modal";
import { router } from "./configs/routerConfig";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Modal />
    </div>
  );
}

export default App;
