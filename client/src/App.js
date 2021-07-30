import "./App.css";
import Navigation from "./component/Navigation";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Dashoard from "./component/Dashboard";
import Entry from "./component/Entry";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashoard} />
          <Route path="/entry" component={Entry} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
