import React, { useState } from 'react'

const App = () => {

  let userName =  "sanjay50986"
  let password = "12345678"

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [showWelcomeMsg, setShowWelcomeMsg] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [showInputs, setShowInputs] = useState(true)

  const handleClick = (e) => {
    e.preventDefault();
    if(user === userName && pass === password){
      setShowWelcomeMsg(`Welcome, ${user}`)
      setUser("")
      setPass("")
      setErrMsg("")
      setShowInputs(false)
    } else {
      setErrMsg("Invalid username or password")
      setUser("")
      setPass("")
      setShowWelcomeMsg("")
    }
  }

  return (
    <form onSubmit={handleClick}>
      <h1>Login Page</h1>
      {showWelcomeMsg && (
        <p>{showWelcomeMsg}</p>
      )}
      {errMsg && (
        <p>{errMsg}</p>
      )}
      { showInputs && ( <div>
        <div style={{paddingTop: "10px"}}>
      <label htmlFor="username">Username:</label>
      <input type="text"
        id="username"
        name="username"
        required
        placeholder='username'
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
      </div>

      <div style={{paddingTop: "10px"}}>
      <label htmlFor="password">Password:</label>
      <input type="password"
        id="password"
        name="password"
        required
        placeholder='password'
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />  
      </div>
      <button style={{marginTop: "10px"}} type='submit'>Submit</button>

      </div> )}
      
    </form>
  )
}

export default App