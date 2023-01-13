import RouterPage from "./routes/RouterPage";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer limit={1} />
      <RouterPage />
    </div>
  );
}

export default App;
