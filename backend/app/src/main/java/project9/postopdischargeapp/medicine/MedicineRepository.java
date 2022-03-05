package project9.postopdischargeapp.medicine;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;
import project9.postopdischargeapp.database.DatabaseConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
@Repository("MedicineRepo")
public class MedicineRepository {
	private final Connection database;
	private ResultSet results;
	public MedicineRepository() {
		this.database = DatabaseConnection.getConnection();
	}
	public ArrayList<Medicine> getMedicineById(int medicineId) {
		ArrayList<Medicine> medicines = new ArrayList<Medicine>();
		try {
			// Execute SQL query to retrieve procedures belonging to one specified user
			PreparedStatement statement = this.database.prepareStatement("SELECT * FROM PROCEDURES "
					+ "WHERE Patient_ID = ?");
			statement.setInt(1, medicineId);
			results = statement.executeQuery();
			// Extract the procedures belonging to one specified user
			while (results.next()) {
				medicines.add(new Medicine(
						results.getInt("medicine_id"),
						results.getString("title"),
						results.getString("dose"),
						results.getString("duration"),
						results.getString("frequency"),
						results.getInt("assigner_id"),
						results.getInt("patient_id")));
			}
			statement.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return medicines;
	}
	public ArrayList<Medicine> getMedicineByPatientId(int patientId) {
		ArrayList<Medicine> requestedMedicine = new ArrayList<Medicine>();
		try {
			// Execute SQL query to retrieve procedures belonging to one specified user
			PreparedStatement statement = this.database.prepareStatement("SELECT * FROM MEDICATION "
					+ "WHERE Patient_ID = ?");
			statement.setInt(1, patientId);
			results = statement.executeQuery();
			// Extract the medicines belonging to one specified patient
			while (results.next()) {
				requestedMedicine.add(new Medicine(
						results.getInt("medication_id"),
						results.getString("title"),
						results.getString("dose"),
						results.getString("duration"),
						results.getString("frequency"),
						results.getInt("assigner_id"),
						results.getInt("patient_id")));
			}
			statement.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return requestedMedicine;
	}
	public int addMedicine(@RequestBody Medicine newMedicine) {
		int responseCheck = 0;

		try {
			PreparedStatement statement = this.database.prepareStatement("INSERT INTO Medicine "
					+ "(Medicine_ID, Title, Dose, Duration, Frequency, Assigner_ID, Patient_ID) VALUES "
					+ "(?, ?, ?, ?,?,?,?)");

			statement.setInt(1, newMedicine.getId());
			statement.setString(2, newMedicine.getName());
			statement.setString(3, newMedicine.getDose());
			statement.setString(4, newMedicine.getDuration());
			statement.setString(5, newMedicine.getFrequency());
			statement.setInt(6, newMedicine.getAssigner());
			statement.setInt(7, newMedicine.getAssignee());
			responseCheck = statement.executeUpdate();
			statement.close();

		}catch(Exception e) {
			System.out.println(e);
		}

		return responseCheck;
	}
	public void removeItem(int id) {
		try {

			PreparedStatement statement = this.database.prepareStatement("DELETE FROM Medicine "
					+ "WHERE MEDICINEID = ?");

			statement.setInt(1, id);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	/**
	 * Modify the data table from the database entry
	 *
	 * @param med
	 */
	public void updateItem(Medicine med) {
		try {
			PreparedStatement statement = this.database.prepareStatement("UPDATE Medicine" + " SET MEDICINEID = ?, NAME = ?, DOSE = ?,"
					+ "DURATION = ?, FREQUENCY = ?, ASSIGNERID = ?, ASSIGNEEID = ? WHERE MEDICINEID = ?");
			statement.setInt(1, med.getId());
			statement.setString(2, med.getName());
			statement.setString(3, med.getDose());
			statement.setString(4, med.getDuration());
			statement.setString(5, med.getFrequency());
			statement.setInt(6, med.getAssigner());
			statement.setInt(7, med.getAssignee());
			statement.setInt(8, med.getId());
			statement.executeUpdate();
			// System.out.println("Updated Table " + tableName);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}








