import React from "react"
import { useState } from "react"
import Userdata from "./Userdata"
import {Link} from "react-router-dom"
import {Alert} from "react-bootstrap"

const Userlogin=()=>{
    const [emaillog,setEmaillog]=useState(" ");
    const [passwordlog,setPasswordlog]=useState(" ");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);
    function handlelogin(e){
        e.preventDefault()
        let mail=localStorage.getItem("useremail").replace(/"/g, "");
        let pass=localStorage.getItem("userpassword").replace(/"/g, "");
        if(!emaillog||!passwordlog)
        {
            setFlag(true)
            console.log("empty field")
        }
        else if((passwordlog !== pass) || (emaillog !== mail)){
            setFlag(true)
        }
        else{
            setHome(!home);
            setFlag(false);

        }

    }
    return(
        <>
        {home?
        <section className="adminlogin">
        <h4 style={{color:"white",paddingTop:"10px"}}>Please Login As User</h4>
        <div className="contentform">
       <div className="text"> User Login Form</div>
         <form onSubmit={handlelogin}>
        <div className="fielddata">
            <span className="fa fa-user"></span>
            <input type="email" placeholder="Email Id" required
                onChange={(event)=>setEmaillog(event.target.value)}
            />
        </div>
        <div className="fielddata">
            <span className="fa fa-lock"></span>
            <input type="password" placeholder="Password" required
                onChange={(event)=>setPasswordlog(event.target.value)}
            />
        </div>
        {/* <!-- exter links--> */}
        <div className="forgot-pass"><Link to="/admin/usersignup" > click here to go User SignUp</Link></div>
        <button type="submit"className="log">Login Now</button>
        {flag && <Alert color='primary' variant="warning" >
                    Fill correct Info else keep trying.
                        </Alert>}
    </form>
</div>
</section>:<Userdata/>}
        </>
    )
}
export default Userlogin