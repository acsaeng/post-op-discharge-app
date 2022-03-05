package project9.postopdischargeapp.api.appointment;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Appointment {
	private int appointmentId;
	private int assignerId;
	private int patientId;
	private String title;
	private String appointmentDatetime;
	private String location;
	private String comments;
	private String phoneNum;

	public Appointment(@JsonProperty("Appointment_ID") int appointmentId, @JsonProperty("Title") String title,
			@JsonProperty("Appointment_Datetime") String appointmentDatetime, @JsonProperty("Location") String location,
			@JsonProperty("Comments") String comments, @JsonProperty("Phone_Num") String phoneNum, @JsonProperty("Assigner_ID") int assignerId,
			@JsonProperty("Patient_ID") int patientId) {
		this.appointmentId=appointmentId;
		this.title=title;
		this.appointmentDatetime=appointmentDatetime;
		this.location=location;
		this.comments=comments;
		this.phoneNum=phoneNum;
		this.assignerId=assignerId;
		this.patientId=patientId;
	}

}
