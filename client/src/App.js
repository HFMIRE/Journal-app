import "./App.css";
import Navigation from "./components/Navigation";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import GetAllEntries from "./components/GetAllEntries";
import AddEntry from "./components/AddEntry";
import EditEntry from "./components/EditEntry";
import DeleteEntry from "./components/DeleteEntry";
import Security from "./components/Security";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/getallentries" component={GetAllEntries} />
          <Route path="/addentry" component={AddEntry} />
          <Route path="/editentry" component={EditEntry} />
          <Route path="/deleteentry" component={DeleteEntry} />
          <Route path="/login" component={Login} />
          <Route path="/security" component={Security} />
          <Route path="/" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
