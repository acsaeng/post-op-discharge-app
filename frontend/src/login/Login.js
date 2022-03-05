// import { React, useState } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import './Login.css';
import ontarioHealthLogo from "../img/ontarioHealthLogo.png";

import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../Reducers/updateUserInfo';


function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function HandleSubmit(event) {
        event.preventDefault();
        //add in the GET for checking the user login


        

        //assume successful login
        let userId = 80000;
        let patientId = 800000;
        let userType = 'Patient';

        // navigate("/dashboard")

        let arrUserInfo = [userId, patientId, userType];
        dispatch({type:"LOGGED IN", userInfo: arrUserInfo});
    

        navigate("/dashboard")






        // //Reducer for saving the global state
        // const storeUserId = (state=userId) =>{ return state}
        // const storePatientId = (state=patientId) =>{return state}
        // const storeUserType = (state=userType) =>{return state}

        // const allReducers = combineReducers({
        //     userId: storeUserId,
        //     patientId:storePatientId,
        //     userType:storeUserType
        // })

        // let store = createStore(allReducers,  
        //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

        
        // return;
    }



  return (
    <div className="d-flex justify-content-center vw-50 vertical-center" style={{backgroundColor: "#daecff"}}>
        <div className="d-flex flex-column mx-3 justify-content-center border border-4 border-secondary bg-light shadow">

            <img src={ontarioHealthLogo} alt="Ontario Health Logo" className="mx-auto my-5 w-50"></img>

            <form className="w-100" onSubmit={HandleSubmit}>
                <h1 className="mb-4">Login</h1>
                <input type="username" className="form-control w-75 mb-2 mx-auto" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" className="form-control w-75 mb-4 mx-auto" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="btn text-light fw-bold mb-4" style={{backgroundColor: "#162a53"}} type="submit" onClick={(e) => HandleSubmit(e)}>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login;