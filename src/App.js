import "./App.css";
import "./CSS/Globalstyle.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="content">
        <div className="left" >
          <Sidebar></Sidebar>
        </div>
        <div className="right">
          <Navbar></Navbar>
          <Profile></Profile>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
