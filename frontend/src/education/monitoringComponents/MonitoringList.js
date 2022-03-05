import MonitoringCard from "./MonitoringCard";

function MonitoringList(props) {
  return (
    <ul>
      {props.entires.map((patientData) => (
        <div key={patientData.id}>
          <MonitoringCard
            key={patientData.id}
            id={patientData.id}
            title={patientData._postTitle}
            date={patientData._entryDateTime}
            image={patientData._imageData}
            comment={patientData._postDescription}
          />
        </div>
      ))}
    </ul>
  );
}

export default MonitoringList;