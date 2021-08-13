import "./App.css";
import React from "react";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import GetAllEntries from "./components/GetAllEntries";
import AddEntry from "./components/AddEntry";
import EditEntry from "./components/EditEntry";
import DeleteEntry from "./components/DeleteEntry";
import DeleteUser from "./components/DeleteUser";
import Security from "./components/Security";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route restricted={true} component={Login} path="/login" exact />
          <Route
            restricted={false}
            path="/security"
            component={Security}
            exact
          />
          <Route path="/" restricted={false} component={Signup} exact />
          <Route restricted={true} component={Login} path="/login" exact />
          <PrivateRoute path="/getallentries" component={GetAllEntries} />
          <PrivateRoute path="/addentry" component={AddEntry} />
          <PrivateRoute path="/editentry" component={EditEntry} />
          <PrivateRoute path="/deleteentry" component={DeleteEntry} />
          <PrivateRoute path="/deleteuser" component={DeleteUser} />
          <PrivateRoute path="/logout" component={Logout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
