import React from "react"
import {Link} from "react-router-dom"
const Adminsignup=()=>{
    return(
        <>
         <section className="adminlogin">
        <h4 style={{color:"white",paddingTop:"10px"}}>Please SignUp As Admin</h4>
        <div className="contentform">
    <div className="text">Admin SignUp Form</div>
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
        <div className="forgot-pass"><Link to="/admin/adminlogin" >click here to go Admin Login In</Link></div>
        <button className="log">Register</button>
    </form>
</div>
</section>
        </>
    )
}
export default Adminsignup