import React, {useState} from 'react'

const UserDetailForm = () => {
    async function handleSubmit(e) {
        // e.preventDefault(); 
        let myHeaders = new Headers(); 
        myHeaders.append("Content-Type", "application/json"); 
        const requestOption = {
          method: "POST", 
          Headers: myHeaders, 
          body: JSON.stringify({username, password}), 
        }
        const response  = await fetch("/users", requestOption)
        if(response.ok) {
          const jwt = await response.text(); 
          localStorage.setItem("jwt", jwt)
        } else {
          alert("failed")
          console.log(response.err)
        }
      }
    const [username, setUsername] = useState("")    
    const [password, setPassword] = useState("")
    return (
        <div>
            <form onSubmit={handleSubmit} >
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
          <button >
              Register
          </button>
            </form>
        </div>
    )
}

export default UserDetailForm
