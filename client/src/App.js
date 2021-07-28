
import './App.css';
import React,{useState} from "react"
import axios from "axios"
// const apiUrl = 'http://localhost:5000';
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  headers: {
    "Authorization": `Bearer ${token}`
  },

})

axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

function App() {
  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null)
  const [usernameLog, setUsernameLog] = useState("")    
  const [passwordLog, setPasswordLog] = useState("")
  const [username, setUsername] = useState("")    
  const [password, setPassword] = useState("")
  const register = () => {
    axios.post("/register", {username, password} )
    .then(res => console.log(res))
  }
  const login = async () => {
    const { data } = await axios.get(`${apiUrl}/login`, {usernameLog, passwordLog} )
    localStorage.setItem('token', data.token);
    setJwt(data.token);
  }

  return (
     <div className="App">
       <div className="signup">
          <h1>Signup</h1>
          <label htmlFor="username">
             Name:
              <input 
              id="username"
              value = {username}
              placeholder="Name"
              onChange = {(e) => setUsername(e.target.value)}
              required/>
          </label>
          <label htmlFor="password">
             Password:
              <input 
              id="password"
              value = {password}
              placeholder="Password"
              onChange = {(e) => setPassword(e.target.value)}
              required/>
          </label>
          <button onClick={() => register()} >
              Register
          </button>
      </div>
      <div className="login">
          <h1>Login</h1>
          <label htmlFor="username">
             Name:
              <input 
              id="username"
              value = {usernameLog}
              placeholder="Name"
              onChange = {(e) => setUsernameLog(e.target.value)}
              required/>
          </label>
          <label htmlFor="password">
             Password:
              <input 
              id="password"
              value = {passwordLog}
              placeholder="Password"
              onChange = {(e) => setPasswordLog(e.target.value)}
              required/>
          </label>
          <button onClick={() => login()} >
              Login
          </button>
          <h3>{jwt}</h3>
      </div>
     </div>
  )
}

export default App;
