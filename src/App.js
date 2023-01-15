import RouterPage from "./routes/RouterPage";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Loading from "./components/loading/Loading";

function App() {
  return (
    <div className="App">
      <Loading />
      <ToastContainer />
      <RouterPage />
    </div>
  );
}

export default App;
