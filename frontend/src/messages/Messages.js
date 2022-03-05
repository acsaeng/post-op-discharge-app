import axios from 'axios';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Messages.css';

import { IconContext } from 'react-icons/lib';
import { FaCamera } from "react-icons/fa";


import Navbar from '../navbar/Navbar';
import MessagesBox from './MessagesBox';



// export default class Messages extends Component{
function Messages() {

  const [message, setData] = useState('');
  const [originalVal, setOriginalVal] = useState('');

  const [senderId, setSenderId] = useState(8); //This needs to be updated to be dynamic!!!
  const [patientId, setPatientId] = useState(8); //This needs to be updated to be dynamic!!!

  //update the state on change
  function getData(val) {
    setData(val.target.value)
    setOriginalVal(val.target.value)
    // console.warn(val.target.value)
  }



  function getFormattedLocalDateTime() {
    var rightNow = new Date();
    var formatedDay = rightNow.getDate() < 10 ? "0" + rightNow.getDate().toString() : rightNow.getDate()
    var formatedMonth = (rightNow.getMonth() + 1) < 10 ? "0" + (rightNow.getMonth() + 1).toString() : (rightNow.getMonth() + 1)
    var formattedMinutes = rightNow.getMinutes() < 10 ? "0" + rightNow.getMinutes().toString() : rightNow.getMinutes().toString()
    var formattedSeconds = rightNow.getSeconds() < 10 ? "0" + rightNow.getSeconds().toString() : rightNow.getSeconds().toString()
    var dateTime = rightNow.getFullYear() + "-" + formatedMonth + "-" + formatedDay + " " + rightNow.getHours() + ":" + formattedMinutes + ":" + formattedSeconds
    // console.log('dateTime = '+dateTime);
    return dateTime;
  }

  //create new comment on the database
  function postNewMessage(event) {
    event.preventDefault();
    var dateTime = getFormattedLocalDateTime()
    // sessionStorage.setItem("scrollPosition", window.pageYOffset);

    axios.post('http://localhost:8081/messages/', {
      messageId: 0, //placeholder
      datetimeSent: dateTime,
      message: message,
      attachmentId: 0,
      senderId: senderId,
      patientId: patientId

    }).then(
      res => {
        // console.log(res);
      })

  }

  //when the enter key is hit, get the information and create new comment on database
  function handleKeyDown(event) {

    if (event.key === 'Enter') {
      setData(originalVal)
      document.getElementById("messageInput").value = ""
      // console.log("From hitting the enter key: "+message)
      // event.preventDefault();

      postNewMessage(event)
    }
  }

  //when the submit button is clicked, get the information and create new comment on database
  function clickButton(event) {
    event.preventDefault();
    setData(originalVal)
    document.getElementById("messageInput").value = ""
    // console.log("From Clicking the button: "+message)
    postNewMessage(event)
  }

  function uploadPhoto(event){
    console.log(event.target.files[0])
  }


  return (
    <div className="h-100" stle={{ "overflow": "hidden" }}>
      <Navbar />

      <MessagesBox />

      <label className="d-flex flex-row input-field">
        <IconContext.Provider value={{ className: 'camera-icon' }}>
          <div className="cam-wrapper mx-3">
            
            <FaCamera title="Attach a Photo" />
          <input className="hidden-file-uploader" type="file" onChange={(event) => uploadPhoto(event)} />

          </div>
        </IconContext.Provider>
        

        <input className="message-input mx-2 my-2 w-100" id="messageInput" type="text" required onChange={getData} onKeyDown={handleKeyDown} size="100" placeholder="Enter a message" />
        <button className="btn btn-secondary mx-2 my-2 message-send" type="submit" onClick={clickButton}>Send</button>
      </label>




    </div>
  )
}



export default Messages;
