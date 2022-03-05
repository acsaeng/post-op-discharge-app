import AppointmentCard from "./AppointmentCard";

function AppointmentList(props) {
  return (
    <ul>
      {props.appointments.map((appointment) => (
        <div key={appointment.id}>
          <AppointmentCard
            id={appointment.Appointment_ID}
            appointment_id={appointment.Appointment_ID}
            date={appointment.Appointment_Datetime}
            time={appointment.Appointment_Datetime}
            location={appointment.Location}
            comments={appointment.Comments}
            title={appointment.Title}
            assigner_id={appointment.Assigner_ID}
            patient_id={appointment.Patient_ID}
            phone_num={appointment.Phone_Num}
          />
        </div>
      ))}
    </ul>
  );
}

export default AppointmentList;
