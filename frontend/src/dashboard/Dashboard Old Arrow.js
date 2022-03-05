import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
// import {useLocation} from 'react-router-dom';

import { FaBook, FaCommentAlt, FaCalendarAlt } from 'react-icons/fa'
import { CgPill } from 'react-icons/cg'

import './Dashboard.css';
import Navbar from '../navbar/Navbar';

const Dashboard = () => {
    const navigate = useNavigate();

    const urlParams = new URLSearchParams(useLocation().search)
    var userId = urlParams.get("patientId")
    console.log(userId)

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