import React from "react"

const Userlogin=()=>{
    return(
        <>
        <section className="adminlogin">
        <h4 style={{color:"white",paddingTop:"10px"}}>Please Login As User</h4>
        <div class="contentform">
    <div class="text"> User Login Form</div>
    <form action="#">
        <div class="fielddata">
            <span class="fa fa-user"></span>
            <input type="text" placeholder="Email Id" required/>
        </div>
        <div class="fielddata">
            <span class="fa fa-lock"></span>
            <input type="password" placeholder="Password" required/>
        </div>
        {/* <!-- exter links--> */}
        <div class="forgot-pass"><a href="/admin/adminlogin" > click here to go admin login</a></div>
        <button class="log">Login Now</button>
    </form>
</div>
</section>
        </>
    )
}
export default Userlogin