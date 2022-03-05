import AppointmentCard from "./AppointmentCard";

function AppointmentList(props) {
  return (
    <ul>
      {props.appointments.map((appointment) => (
        <div key={appointment.id}>
          <AppointmentCard
            key={appointment.key}
            id={appointment.id}
            date={appointment.date}
            time={appointment.time}
            location={appointment.location}
            comment={appointment.comment}
            title={appointment.title}
          />
        </div>
      ))}
    </ul>
  );
}

export default AppointmentList;
