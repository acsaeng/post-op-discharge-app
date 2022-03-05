import React from "react";
import { useState, useEffect } from "react";
import AppointmentList from "./AppointmentList";
import AppointmentStaticModal from "./AppointmentStaticModal";
import Navbar from "../navbar/Navbar";

const Appointments = (props) => {
  /* loading state is used to handle the case that the data is still being fetched from database */
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAppointments, setLoadedAppointments] = useState([]);
  const [displayModal, setModal] = useState(false);

  const [senderId, setSenderId] = useState(window.localStorage.getItem("userId"));
  const [userType, setUserType] = useState(window.localStorage.getItem("userType"));
  const [patientId, setPatientId] = useState(Number(window.localStorage.getItem("patientId")));


  /* fetch appointments from data
  and setLoadedAppointments with an array of appointments */
  function fetchAppointments() {
    setIsLoading(true);

    let url = "http://localhost:8080/appointment/" + userType + "_" + senderId;

    console.log(url);
    fetch(
      url
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


  return (
    <section>
      <Navbar />
      <AppointmentList appointments={loadedAppointments} />
      <AppointmentStaticModal reload={setIsLoading} role={userType} />
    </section>
  );
};

export default Appointments;
