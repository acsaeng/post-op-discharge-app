import { React, useState } from 'react'
import { useNavigate } from "react-router-dom";

import './Login.css';
import ontarioHealthLogo from "../img/ontarioHealthLogo.png";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    function handleSubmit(event) {
        return;
    }



  return (
    <div className="d-flex justify-content-center vw-50 vertical-center" style={{backgroundColor: "#daecff"}}>
        <div className="d-flex flex-column mx-3 justify-content-center border border-4 border-secondary bg-light shadow">

            <img src={ontarioHealthLogo} alt="Ontario Health Logo" className="mx-auto my-5 w-50"></img>

            <form className="w-100" onSubmit={handleSubmit}>
                <h1 className="mb-4">Login</h1>
                <input type="username" className="form-control w-75 mb-2 mx-auto" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" className="form-control w-75 mb-4 mx-auto" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="btn text-light fw-bold mb-4" style={{backgroundColor: "#162a53"}} type="submit" onClick={() => navigate("/dashboard")}>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login