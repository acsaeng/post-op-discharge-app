import  { React, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../navbar/Navbar';
import { useNavigate } from "react-router-dom";

const Procedure = () => {
  const navigate = useNavigate();

  const [assignerId, setAssignerId] = useState(8); //This needs to be updated to be dynamic!!!
  const [patientId, setPatientId] = useState(3); //This needs to be updated to be dynamic!!!
  // const patientId = urlParams.get("patientId")

  const [isLoading, setIsLoading] = useState(true);
  const [procedures, setProcedures] = useState({});

  const [userInfo, setUserInfo] = useState({});

  function loadProcedures() {
    if(isLoading) {
        axios.get('http://localhost:8081/patientId='+patientId+'/education/procedures/')
        .then(response => {
            const procedure = response.data;
            console.log(procedure[0])
            setProcedures({
                title: procedure[0].title,
                description: procedure[0].description,
                link: procedure[0].link,
                assignerId: procedure[0].assignerId,
                patientId: procedure[0].patientId
            });
        }).catch(err => console.log(err));
        setIsLoading(false);
    }
  }

  loadProcedures();

  //when the submit button is clicked, get the information and create new procedure on database
  function clickButton(event) {
    event.preventDefault();
    navigate("/education/procedure/add")
  }
  
  return (
    <div className='h-100'>
      <Navbar />
      <div className="d-flex align-items-center flex-column" style={{marginTop: "5vh"}}>
        <h4>My Procedure</h4>
          <button className="menu-option-btn m-1 py-4 btn fw-bold" onClick={() => navigate("/education/procedure/add")}>Add Procedure</button>
          <div className="card p-3">
              <div className="card-body">
                  <h5 className="card-title">{procedures.title}</h5>
                  <div className="card-text">{procedures.description}</div>
                  <div>
                    <a className="pt-3" href={procedures.link}>{procedures.link}</a>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Procedure