package project9.postopdischargeapp.api.appointment;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import project9.postopdischargeapp.database.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;

import java.util.ArrayList;

@Repository("AppointmentRepo")
public class AppointmentRepository {
	private final Connection database;
	private ResultSet results;
	private int latestID;

	public AppointmentRepository() {
		this.database = DatabaseConnection.getConnection();
	}

	public ArrayList<Appointment> getAppointmentsById(int id, String role) {

		ArrayList<Appointment> appointments = new ArrayList<Appointment>();

		PreparedStatement statement;

		try {

			// Patient shall only see his or her appointments
			// Non-patient shall only see the appointments assigned by the assigner
			// statement.setString(index, String) will pass the double quote of String, hard
			// to work with
			if (role.toLowerCase().equals("patient")) {
				statement = this.database.prepareStatement("SELECT * FROM APPOINTMENT WHERE Patient_ID = ?");

			} else {
				statement = this.database.prepareStatement("SELECT * FROM APPOINTMENT WHERE Assigner_ID = ?");
			}

			statement.setInt(1, id);
			System.out.println(statement.toString());
			results = statement.executeQuery();

			while (results.next()) {
				appointments.add(new Appointment(results.getInt("Appointment_ID"), results.getString("Title"),
						results.getString("Appointment_Datetime"), results.getString("Location"),
						results.getString("Comments"), results.getString("Phone_Num"), results.getInt("Assigner_ID"),
						results.getInt("Patient_ID")));
			}

			statement.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return appointments;
	}

	public int addAppointment(@RequestBody Appointment newAppointment) {
		int responseCheck = 0;
		try {
			this.getLatestID();

			PreparedStatement statement = this.database.prepareStatement(
					"INSERT INTO APPOINTMENT (Appointment_ID, Title, Appointment_Datetime, Location, Comments, Phone_Num, Assigner_ID, Patient_ID) VALUES"
							+ "(?, ?, ?, ?, ?, ?, ?, ?)");
			
			statement.setInt(1, (this.latestID+1));
			statement.setString(2, newAppointment.getTitle());
			statement.setString(3, newAppointment.getAppointmentDatetime());
			statement.setString(4, newAppointment.getLocation());
			statement.setString(5, newAppointment.getComments());
			statement.setString(6, newAppointment.getPhoneNum());
			statement.setInt(7, newAppointment.getAssignerId());
			statement.setInt(8, newAppointment.getPatientId());
			
			System.out.println(statement.toString());
			
			responseCheck = statement.executeUpdate();
			statement.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

		return responseCheck;
	}

	private void getLatestID() throws Exception {
		PreparedStatement statement = this.database.prepareStatement("SELECT MAX(Appointment_ID) FROM APPOINTMENT");
		results = statement.executeQuery();
		results.next();

		this.latestID = results.getInt("Max(Appointment_ID)");
		statement.close();
	}

}
