import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaBook, FaPills, FaCommentAlt, FaCalendarAlt } from 'react-icons/fa'

import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

  return (
    <div className='h-100'>
        <div className='vertical-centre rounded p-5 border border-dark shadow-lg w-50' style={{'background-color': '#daecff'}}>
            <div className="row justify-content-center">
                <button className="col-md-6 m-3 btn menu-option-btn" onClick={() => navigate("/education")}>
                    <h4><FaBook /><br/>Education</h4>
                </button>
                <button className="col-md-6 m-3 btn menu-option-btn fw-bold" onClick={() => navigate("/medications")}>
                    <h4><FaPills /><br/>Medication</h4>
                </button>
            </div>

            {/* <div class="w-100"></div> */}
            <div className="row justify-content-center">
                <button className="col-12 col-sm-12 col-md-6 m-3 btn menu-option-btn fw-bold" onClick={() => navigate("/messages")}>
                    <h4><FaCommentAlt /><br/>Messages</h4>
                </button>
                <button className="col-md-6 m-3 btn menu-option-btn fw-bold" onClick={() => navigate("/appointments")}>
                    <FaCalendarAlt /><br/>Appointments
                </button>
            </div>
        </div>
    </div>
  )
}

export default Dashboard