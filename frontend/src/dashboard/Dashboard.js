import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
// import {useLocation} from 'react-router-dom';

import { FaBook, FaCommentAlt, FaCalendarAlt } from 'react-icons/fa'
import { CgPill } from 'react-icons/cg'

import './Dashboard.css';
import Navbar from '../navbar/Navbar';

import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


// const Dashboard = () => {
function Dashboard() {    
    const navigate = useNavigate();

    const urlParams = new URLSearchParams(useLocation().search)
    var selectedPatientId = urlParams.get("patientId")
    console.log(selectedPatientId)
    if (selectedPatientId){
        window.localStorage.setItem('patientId', selectedPatientId)
    }

    // senderId = window.localStorage.getItem("senderId");
    // userType = window.localStorage.getItem("userType");
    const [senderId, setSenderId] = useState(window.localStorage.getItem("senderId")); 
    const [userType, setUserType] = useState( window.localStorage.getItem("userType")); 

    // const [senderId, setSenderId] = useState(useSelector(state => state[0])); 
    // // const [patientId, setPatientId] = useState( useSelector(state => state[1])); 
    // const [userType, setUserType] = useState( useSelector(state => state[2])); 
    // console.log("currently in Dashboard")
    // console.log("senderId = " + senderId)
    // console.log("patientId = " + patientId)
    // console.log("userType = " + userType)

    let arrUserInfo = [senderId, selectedPatientId, userType];
    const dispatch = useDispatch();
    dispatch({ type: "LOGGED IN", userInfo: arrUserInfo });

    return (
        <div className='h-100'>
                <Navbar />

                <div className="d-flex align-items-center flex-column" style={{marginTop: "15vh"}}>
                    <button className="menu-option-btn m-1 py-4 btn fw-bold" onClick={() => navigate("/education")}>
                        <FaBook /><br/>Education
                    </button>

                    <button className="menu-option-btn m-1 py-4 btn fw-bold" onClick={() => navigate("/medications")}>
                        <CgPill /><br/>Medication
                    </button>

                    <button className="menu-option-btn m-1 py-4 btn fw-bold" onClick={() => navigate("/messages")}>
                        <FaCommentAlt /><br/>Messages
                    </button>
                    <button className="menu-option-btn m-1 py-4 btn fw-bold" onClick={() => navigate("/appointments")}>
                        <FaCalendarAlt /><br/>Appointments
                    </button>
                </div>
        </div>
    )
}

export default Dashboard