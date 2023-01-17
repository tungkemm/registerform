import RouterPage from "./routes/RouterPage";
import { ToastContainer } from "react-toastify";
import Loading from "./components/ui/loading/Loading";
import "./App.css";

function App() {
  return (
    <div>
      <Loading />
      <ToastContainer />
      <RouterPage />
    </div>
  );
}

export default App;
