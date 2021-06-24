import "./App.css";
import "./CSS/Globalstyle.css";
import {BrowserRouter} from "react-router-dom"
import Routing from "./Routing/Routing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routing></Routing>
      </BrowserRouter>
    </>
  );
}

export default App;
