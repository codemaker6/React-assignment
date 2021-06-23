import React from "react"
import {Route,Switch} from "react-router-dom"
import App from "../App"
import Admin from "../admin/Admin"
import Main from "../components/Main"
import Userlogin from "../User/Userlogin"
import Adminlogin from "../admin/Adminlogin"

const Routing=()=>{
    return(
        <>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/admin/userlogin" component={Userlogin}/>
            <Route exact path="/admin/adminlogin" component={Adminlogin}/>
            </Switch>
        </>
    )
}
export default Routing;