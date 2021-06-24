import React from "react"
import Sidebar from "./Sidebar"
import Profile from "./Profile"
import Footer from "./Footer"
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