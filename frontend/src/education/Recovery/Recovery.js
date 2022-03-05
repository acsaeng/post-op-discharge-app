import  { React, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../navbar/Navbar';
import { useNavigate } from "react-router-dom";

const Recovery = () => {
  const navigate = useNavigate();

  const [assignerId, setAssignerId] = useState(8); //This needs to be updated to be dynamic!!!
  const [patientId, setPatientId] = useState(3); //This needs to be updated to be dynamic!!!
  // const patientId = urlParams.get("patientId")

  const [isLoading, setIsLoading] = useState(true);
  const [recoveries, setRecoveries] = useState({});

  const [userInfo, setUserInfo] = useState({});

  function loadRecoveries() {
    if(isLoading) {
        axios.get('http://localhost:8081/patientId='+patientId+'/education/recoveries/')
        .then(response => {
            const recovery = response.data;
            console.log(recovery[0])
            setRecoveries({
                title: recovery[0].title,
                description: recovery[0].description,
                link: recovery[0].link,
                assignerId: recovery[0].assignerId,
                patientId: recovery[0].patientId
            });
        }).catch(err => console.log(err));
        setIsLoading(false);
    }
  }

  loadRecoveries();

  //when the submit button is clicked, get the information and create new recovery on database
  function clickButton(event) {
    event.preventDefault();
    navigate("/education/recovery/add")
  }
  
  return (
    <div className='h-100'>
      <Navbar />
      <div className="d-flex align-items-center flex-column" style={{marginTop: "5vh"}}>
        <h4>My Recovery</h4>
          <button className="menu-option-btn m-1 py-4 btn fw-bold" onClick={() => navigate("/education/recovery/add")}>Add Recovery</button>
          <div className="card p-3">
              <div className="card-body">
                  <h5 className="card-title">{recoveries.title}</h5>
                  <div className="card-text">{recoveries.description}</div>
                  <div>
                    <a className="pt-3" href={recoveries.link}>{recoveries.link}</a>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Recovery