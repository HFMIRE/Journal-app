import './App.css';
// import UserDetailForm from "./UserDetailForm"
import Signup from "./component/Signup"
import Login from  "./component/Login"
import Dashoard from "./component/Dashboard"
import Entry from "./component/Entry"
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";

function App() {
  return (
     <div className="App">
       <Router> 
      {/* <UserDetailForm /> */}
      <Switch > 
      <Route path="/Signup" component={Signup}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Dashoard" component={Dashoard}/>
      <Route path="/Entry" component={Entry}/>
      </Switch>
       </Router>
     </div>
  )
}

export default App;
