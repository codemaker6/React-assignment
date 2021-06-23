import React from "react"

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
        <div className="forgot-pass"><a href="/admin/userlogin" >click here to go User login</a></div>
        <button className="log">Login Now</button>
    </form>
</div>
</section>
        </>
    )
}
export default Adminlogin