import React, { useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';

const Procedure = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [assignerId, setAssignerId] = useState(8); //This needs to be updated to be dynamic!!!
  const [patientId, setPatientId] = useState(8); //This needs to be updated to be dynamic!!!
  // const patientId = urlParams.get("patientId")

  //update the state on change
  function getTitle(val) {
    setTitle(val.target.value)
  }

  //update the state on change
  function getDescription(val) {
    setDescription(val.target.value)
  }

  // GET all procedures for a patient
  function GetProcedures(){
    useEffect(()=>{
        axios.get('http://localhost:8081/patientId='+patientId+'/education/procedures/').then(
            res => {
                var singleProcedure = res.data[0]
                setTitle(singleProcedure.title)
                setDescription(singleProcedure.description)
            })
    },[])
}

  //when the submit button is clicked, get the information and create new procedure on database
  function clickButton(event) {
    event.preventDefault();
    document.getElementById("titleInput").value = ""
    document.getElementById("descriptionInput").value = ""
    // console.log("From Clicking the button: "+ title + " " + description)
    postNewProcedure(event)
  }

  //create new comment on the database
  function postNewProcedure(event) {
    event.preventDefault();

    axios.post('http://localhost:8081/patientId='+patientId+'/education/procedures/', {
      title: title,
      description: description,
      assignerId: parseInt(assignerId),
      patientId: parseInt(patientId)
    }).then(
      res => {
        // console.log(res);
      })
  }

  
  return (
    <div className='h-100'>
      <Navbar />
      <div className="d-flex align-items-center flex-column" style={{marginTop: "15vh"}}>
          <p>Placeholder text for Procedures page!</p>
      </div>
    </div>
  )
}

export default Procedure