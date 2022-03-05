import React from 'react'
import { useNavigate } from "react-router-dom";
import { FaWaveSquare, FaProcedures, FaPlus } from 'react-icons/fa'
import Navbar from '../navbar/Navbar';

const Education = () => {
  const navigate = useNavigate();

  return (
    <div className='h-100'>
      <Navbar />
      <div className="d-flex align-items-center flex-column" style={{marginTop: "15vh"}}>
          <button className="menu-option-btn m-1 py-4 btn fw-bold" onClick={() => navigate("/education/monitoring")}>
              <FaWaveSquare /><br/>Monitoring
          </button>

          <button className="menu-option-btn m-1 py-4 btn fw-bold" onClick={() => navigate("/education/procedure")}>
              <FaProcedures /><br/>Procedure
          </button>

          <button className="menu-option-btn m-1 py-4 btn fw-bold" onClick={() => navigate("/education/recovery")}>
              <FaPlus /><br/>Recovery
          </button>
      </div>
     </div>
  )
}

export default Education