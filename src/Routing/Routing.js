import React from "react"
import {Route,Switch} from "react-router-dom"
import Admin from "../admin/Admin"
import Main from "../components/Main"
import Userlogin from "../User/Userlogin"
import Adminlogin from "../admin/Adminlogin"
import Usersignup from "../User/Usersignup"
import Adminsignup from "../admin/Adminsignup"


const Routing=()=>{
    return(
        <>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/admin/userlogin" component={Userlogin}/>
            <Route exact path="/admin/adminlogin" component={Adminlogin}/>
            <Route exact path="/admin/usersignup" component={Usersignup}/>
            <Route exact path="/admin/adminsignup" component={Adminsignup}/>
            </Switch>
        </>
    )
}
export default Routing;