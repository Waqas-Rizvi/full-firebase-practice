import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../Container/Home";
import { Login } from "../Container/Login";
import { Signup } from "../Container/Signup";
import { Admin } from "../Container/Admin";

export const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/admin" component={Admin}/>
            </Switch>
        </Router>
    )
}