import "./App.css";
import "./CSS/Globalstyle.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom"
import Routing from "./Routing/Routing";
import Navbar from "./components/Navbar";
import Dashboard from "./admin/Dashboard";

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
