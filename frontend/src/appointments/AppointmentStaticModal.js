import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import AppointmentForm from "./AppointmentForm";
import { useRef } from "react";

function AppointmentStaticModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const titleInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();
  const locationInputRef = useRef();
  const phoneInputRef = useRef();
  const patientInputRef = useRef();
  const assignerInputRef = useRef();
  const commentsInputRef = useRef();

  function addAppointment(appointmentData) {
    /* Firebase: whatever comes after the domain -> .com/ , e.g. meetups, will be translated to folder or table.
    Firebase expect .json at the end. */
    fetch("http://localhost:8080/appointment/", {
      method: "POST",
      body: JSON.stringify(appointmentData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTime = timeInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredPatient = patientInputRef.current.value;
    const enteredAssigner = assignerInputRef.current.value;
    const enteredComments = commentsInputRef.current.value;

    const appointmentData = {
      Appointment_ID: 0,
      Title: enteredTitle,
      Appointment_Datetime: enteredDate + " " + enteredTime + ":00",
      Location: enteredLocation,
      Phone_Num: enteredPhone,
      Comments: enteredComments,
      Patient_ID: enteredPatient,
      Assigner_ID: enteredAssigner,
    };

    console.log(appointmentData);
    addAppointment(appointmentData);
  }

  return (
    <>
      <button onClick={() => handleShow()}>Add Appointment</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Appointment Title"
                  require="true"
                  ref={titleInputRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  placeholder="YYYY-MM-DD"
                  require="true"
                  ref={dateInputRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="time"
                  placeholder="HH:MM"
                  require="true"
                  ref={timeInputRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Appointment Location"
                  require="true"
                  ref={locationInputRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone_num"
                  placeholder="e.g. 12345678790"
                  require="true"
                  ref={phoneInputRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="patient">Patient ID</label>
                <input
                  type="number"
                  className="form-control"
                  id="patient_id"
                  placeholder="e.g. 3"
                  require="true"
                  ref={patientInputRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="assigner">Your ID</label>
                <input
                  type="number"
                  className="form-control"
                  id="assigner_id"
                  placeholder="e.g. 7"
                  require="true"
                  ref={assignerInputRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="comments">Comments</label>
                <textarea
                  id="description"
                  require="true"
                  rows="5"
                  ref={commentsInputRef}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleClose}>
                Submit
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AppointmentStaticModal;
