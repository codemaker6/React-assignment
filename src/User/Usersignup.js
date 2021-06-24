import React ,{useState} from "react";
import { Link } from "react-router-dom";
import Userlogin from "./Userlogin";
import {Alert} from "react-bootstrap"
const Usersignup = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    function handleformsubmit(e){
      e.preventDefault()
      if(!email||!password){
          setFlag(true)
      }
      else{
          setFlag(false);
          localStorage.setItem("useremail",JSON.stringify(email));
          localStorage.setItem("userpassword",JSON.stringify(password));
          console.log("saved data in local storage")
          setLogin(!login)
  }
    }
  return (
    <>{
        login?
      <section className="adminlogin">
        <h4 style={{ color: "white", paddingTop: "10px" }}>
          Please SignUp As User
        </h4>
        <div className="contentform">
          <div className="text">User SignUp Form</div>
          <form onSubmit={handleformsubmit}>
            <div className="fielddata">
              <span className="fa fa-user"></span>
              <input type="email" placeholder="Email Id" 
               name="email" onChange={(event)=>setEmail(event.target.value)} />
            </div>
            <div className="fielddata">
              <span className="fa fa-lock"></span>
              <input type="password" placeholder="Password" 
                   onChange={(event)=>setPassword(event.target.value)}
              />
            </div>
            {/* <!-- exter links--> */}
            <div className="forgot-pass">
              <Link to="/admin/userlogin">click here to go User Login In</Link>
            </div>
            <button className="log">Register</button>
            {flag &&
                    <Alert color='primary' variant="danger" >
                    All Field are mandatory!
                </Alert>
                }
          </form>
        </div>
      </section>
    :<Userlogin/>}
    </>
  );
};
export default Usersignup;
