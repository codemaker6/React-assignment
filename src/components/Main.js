import React from "react"
import Sidebar from "./Sidebar"
import Profile from "./Profile"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Admin from "../admin/Admin"
const Main=()=>{
    return(
        <>
        <div className="content">
        <div className="left" >
          <Sidebar></Sidebar>
        </div>
        <div className="right">
          <Profile></Profile>
          <Footer></Footer>
        </div>
      </div>

        </>
    )
}
export default Main;