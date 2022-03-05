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
      "http://localhost:8080/appointment/patient_6"
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
          console.log(appointment)
          appointments.push(appointment);
        }

        setIsLoading(false);
        setLoadedAppointments(appointments);
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
    if (props.role !== 'patient') {
      return <button onClick={() => setModal(true)}>Add Appointment</button>;
    }
  }

  return (
    <section>
      <AppointmentList appointments={loadedAppointments} />
      <AppointmentStaticModal display={displayModal} setDisplay={setModal} />
    </section>
  );
};

export default Appointments;
