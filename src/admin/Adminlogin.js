import React from "react"
import {Link} from "react-router-dom"

const Adminlogin=()=>{
    return(
        <>
        <section className="adminlogin">
        <h4 style={{color:"white",paddingTop:"10px"}}>Please Login As Admin</h4>
        <div className="contentform">
    <div className="text">Admin Login Form</div>
    <form action="#">
        <div className="fielddata">
            <span className="fa fa-user"></span>
            <input type="text" placeholder="Email Id" required/>
        </div>
        <div className="fielddata">
            <span className="fa fa-lock"></span>
            <input type="password" placeholder="Password" required/>
        </div>
        {/* <!-- exter links--> */}
        <div className="forgot-pass"><Link to="/admin/adminsignup" >click here to go Admin Sign Up</Link></div>
        <button className="log">Login Now</button>
    </form>
</div>
</section>
        </>
    )
}
export default Adminlogin