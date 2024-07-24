import "./App.css";
import RoutesMain from "./routes";
import GlobalStyle from "./globalStyle/globalStyle";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <RoutesMain />
      <GlobalStyle />
      <ToastContainer />
    </div>
  );
}

export default App;
