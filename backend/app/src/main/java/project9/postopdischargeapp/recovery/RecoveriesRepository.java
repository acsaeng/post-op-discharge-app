package project9.postopdischargeapp.recovery;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import project9.postopdischargeapp.database.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

@Repository("RecoveriesRepo")
public class RecoveriesRepository {

    private final Connection database;
    private ResultSet results;

    public RecoveriesRepository() {
         this.database = DatabaseConnection.getConnection();
    }

    public ArrayList<Recoveries> getRecoveriesById(int patientId) {
    	ArrayList<Recoveries> recoveries = new ArrayList<Recoveries>();

        try {
            // Execute SQL query to retrieve recoveries belonging to one specified user
            PreparedStatement statement = this.database.prepareStatement("SELECT * FROM RECOVERIES "
            		+ "WHERE Patient_ID = ?");

            statement.setInt(1, patientId);
            results = statement.executeQuery();

            // Extract the recoveries belonging to one specified user
            while (results.next()) {
            	recoveries.add(new Recoveries(
                        results.getString("title"),
                        results.getString("recovery_description"),
                        results.getString("link"),
                        results.getInt("assigner_id"),
                        results.getInt("patient_id")));
            }
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return recoveries;
    }
    
    public ArrayList<Recoveries> getRecoveriesByRecoveryId(int recoveryId) {
    	ArrayList<Recoveries> requestedRecovery = new ArrayList<Recoveries>();

        try {
            // Execute SQL query to retrieve recoveries belonging to one specified user
            PreparedStatement statement = this.database.prepareStatement("SELECT * FROM RECOVERIES "
            		+ "WHERE Recovery_ID = ?");

            statement.setInt(1, recoveryId);
            results = statement.executeQuery();

            // Extract the recoveries belonging to one specified user
            while (results.next()) {
            	requestedRecovery.add(new Recoveries(
                        results.getString("title"),
                        results.getString("recovery_description"),
                        results.getString("link"),
                        results.getInt("assigner_id"),
                        results.getInt("patient_id")));
            }
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return requestedRecovery;
	}
    
    public int addRecovery(@RequestBody Recoveries newRecovery) {
    	int responseCheck = 0;
    	
    	try {    	
        	PreparedStatement statement = this.database.prepareStatement("INSERT INTO RECOVERIES "
        			+ "(Title, Recovery_Description, Link, Assigner_ID, Patient_ID) VALUES "
    				+ "(?, ?, ?, ?, ?)");
    		statement.setString(1, newRecovery.getTitle());
    		statement.setString(2, newRecovery.getDescription());
    		statement.setString(3, newRecovery.getLink());
    		statement.setInt(4, newRecovery.getAssignerId());
    		statement.setInt(5, newRecovery.getPatientId());

    		responseCheck = statement.executeUpdate();
    		statement.close();
    		
    	}catch(Exception e) {
    		System.out.println(e);
    	}
    	
    	return responseCheck;
	}

}
