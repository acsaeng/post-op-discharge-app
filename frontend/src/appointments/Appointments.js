import React from "react";
import { useState, useEffect } from "react";
import AppointmentList from "./AppointmentList";
import AppointmentStaticModal from "./AppointmentStaticModal";

const Appointments = (props) => {
  /* loading state is used to handle the case that the data is still being fetched from database */
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAppointments, setLoadedAppointments] = useState([]);
  const [displayModal, setModal] = useState(false);

  /* fetch appointments from data
  and setLoadedAppointments with an array of appointments */
  function fetchAppointments() {
    setIsLoading(true);

    fetch(
      "https://ensf609-hackthon-dummyatabase-default-rtdb.firebaseio.com/appointments.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const appointments = [];
        for (const key in data) {
          const appointment = {
            id: key,
            ...data[key],
          };
          appointments.push(appointment);
        }

        setIsLoading(false);
        setLoadedAppointments(appointments);
      });
  }

  function addAppointmentHandler(appointmentData) {
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

  /* load data once only */
  useEffect(() => {
    fetchAppointments();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }


  function renderAddAppointmentButton() {
    if(props.role!=='patient')
    {
      return <button onClick={()=>setModal(true)}>Add Appointment</button>;
    }
  }

  return (
    <section>
      <AppointmentList appointments={loadedAppointments} />
      <AppointmentStaticModal display={displayModal} setDisplay={setModal}/>
    </section>
  );
};

export default Appointments;
