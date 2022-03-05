import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Procedure.css';
import Navbar from '../../navbar/Navbar';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const AddProcedure = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const assignerId = window.localStorage.getItem("userId"); 
  const patientId = window.localStorage.getItem("patientId"); 
  const userType = window.localStorage.getItem("userType"); 

  //update the state on change
  function getTitle(val) {
    setTitle(val.target.value)
  }

  //update the state on change
  function getDescription(val) {
    setDescription(val.target.value)
  }

  function getLink(val){
    setLink(val.target.value)
  }

  //when the submit button is clicked, get the information and create new procedure on database
  function clickButton(event) {
    event.preventDefault();
    document.getElementById("titleInput").value = ""
    document.getElementById("descriptionInput").value = ""
    document.getElementById("linkInput").value = ""
    // console.log("From Clicking the button: "+ title + " " + description + " " + link)
    postNewProcedure(event)
  }

  //create new comment on the database
  function postNewProcedure(event) {
    event.preventDefault();

    axios.post('http://localhost:8081/patientId='+patientId+'/education/procedures/', {
        title: title,
        description: description,
        link: link,
        assignerId: parseInt(assignerId),
        patientId: parseInt(patientId)
    }).then(res => {
        // console.log(res);
    })

    navigate("/education")
  }

  
  return (
    <div className='h-100'>
      <Navbar />
      <div className="d-flex align-items-center flex-column" style={{marginTop: "15vh"}}>
        <h3>Add a Procedure</h3>
          <div class="m-3">
              <label className="mb-2">Procedure Title: </label> <br/>
              <textarea className="form-control" cols='100' id="titleInput" onChange={getTitle} placeholder="Please enter the procedure title.">
              </textarea>
          </div>
          <div class="m-3">
              <label className="mb-2">Procedure Description: </label> <br/>
              <textarea className="form-control" cols='100' rows='3' id="descriptionInput" onChange={getDescription} placeholder="Please enter the procedure description.">
              </textarea>
          </div>
          <div class="m-3">
              <label className="mb-2">Associated Link: </label> <br/>
              <textarea className="form-control" cols='100' id="linkInput" onChange={getLink} placeholder="Please enter a link.">
              </textarea>
          </div>
          <button className="menu-option-btn m-3 py-4 btn fw-bold" onClick={clickButton}>Submit</button>
      </div>
    </div>
  )
}

export default AddProcedure