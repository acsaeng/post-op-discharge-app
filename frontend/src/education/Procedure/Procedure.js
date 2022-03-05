import React, { useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../navbar/Navbar';
import ProceduresList from './ProceduresList';

const Procedure = () => {

  const [assignerId, setAssignerId] = useState(8); //This needs to be updated to be dynamic!!!
  const [patientId, setPatientId] = useState(3); //This needs to be updated to be dynamic!!!
  // const patientId = urlParams.get("patientId")

  const [isLoading, setIsLoading] = useState(true);
  const [procedures, setProcedures] = useState({});

  function loadProcedures() {
    if(isLoading) {
        // axios.get('http://localhost:8081/patientId='+patientId+'/education/procedures/')
        axios.get('http://localhost:8081/patientId=3/education/procedures/')
        .then(response => {
            const procedure = response.data;
            console.log(procedure.title)
            setProcedures({
                title: procedure.title,
                description: procedure.description,
                assignerId: procedure.assignerId,
                patientId: procedure.patientId
            });
        }).catch(err => console.log(err));
        setIsLoading(false);
    }
  }

  loadProcedures();


  // // GET all procedures for a patient
  // function GetProcedures(){
  //   useEffect(()=>{
  //       axios.get('http://localhost:8081/patientId='+patientId+'/education/procedures/').then(
  //           res => {
  //               var singleProcedure = res.data[0]
  //               setTitle(singleProcedure.title)
  //               setDescription(singleProcedure.description)
  //           })
  //   },[])
  // }

  //when the submit button is clicked, get the information and create new procedure on database
  function clickButton(event) {
    event.preventDefault();
    document.getElementById("titleInput").value = ""
    document.getElementById("descriptionInput").value = ""
    // console.log("From Clicking the button: "+ title + " " + description)
    // postNewProcedure(event)
  }

  // //create new comment on the database
  // function postNewProcedure(event) {
  //   event.preventDefault();

  //   axios.post('http://localhost:8081/patientId='+patientId+'/education/procedures/', {
  //     title: title,
  //     description: description,
  //     assignerId: parseInt(assignerId),
  //     patientId: parseInt(patientId)
  //   }).then(
  //     res => {
  //       // console.log(res);
  //     })
  // }

  
  return (
    <div className='h-100'>
      <Navbar />
      <div className="d-flex align-items-center flex-column" style={{marginTop: "15vh"}}>
        <h4>My Procedure</h4>
          <div className="card p-3">
              <div className="card-body">
                  <h5 className="card-title">{procedures.title}TEST</h5>
                  <div className="card-text">{procedures.description}DFSDFSD</div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Procedure