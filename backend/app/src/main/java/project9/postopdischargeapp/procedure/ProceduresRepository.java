package project9.postopdischargeapp.procedure;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import project9.postopdischargeapp.database.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

@Repository("ProceduresRepo")
public class ProceduresRepository {

    private final Connection database;
    private ResultSet results;

    public ProceduresRepository() {
         this.database = DatabaseConnection.getConnection();
    }

    public ArrayList<Procedures> getProceduresById(int patientId) {
    	ArrayList<Procedures> procedures = new ArrayList<Procedures>();

        try {
            // Execute SQL query to retrieve procedures belonging to one specified user
            PreparedStatement statement = this.database.prepareStatement("SELECT * FROM PROCEDURES "
            		+ "WHERE Patient_ID = ?");

            statement.setInt(1, patientId);
            results = statement.executeQuery();

            // Extract the procedures belonging to one specified user
            while (results.next()) {
            	procedures.add(new Procedures(
                        results.getString("title"),
                        results.getString("procedure_description"),
                        results.getString("link"),
                        results.getInt("assigner_id"),
                        results.getInt("patient_id")));
            }
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return procedures;
    }
    
    public ArrayList<Procedures> getProceduresByProcedureId(int procedureId) {
    	ArrayList<Procedures> requestedProcedure = new ArrayList<Procedures>();

        try {
            // Execute SQL query to retrieve procedures belonging to one specified user
            PreparedStatement statement = this.database.prepareStatement("SELECT * FROM PROCEDURES "
            		+ "WHERE Procedure_ID = ?");

            statement.setInt(1, procedureId);
            results = statement.executeQuery();

            // Extract the procedures belonging to one specified user
            while (results.next()) {
            	requestedProcedure.add(new Procedures(
                        results.getString("title"),
                        results.getString("procedure_description"),
                        results.getString("link"),
                        results.getInt("assigner_id"),
                        results.getInt("patient_id")));
            }
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return requestedProcedure;
	}
    
    public int addProcedure(@RequestBody Procedures newProcedure) {
    	int responseCheck = 0;
    	
    	try {    	
        	PreparedStatement statement = this.database.prepareStatement("INSERT INTO PROCEDURES "
        			+ "(Title, Procedure_Description, Link, Assigner_ID, Patient_ID) VALUES "
    				+ "(?, ?, ?, ?, ?)");
    		statement.setString(1, newProcedure.getTitle());
    		statement.setString(2, newProcedure.getDescription());
    		statement.setString(3, newProcedure.getLink());
    		statement.setInt(4, newProcedure.getAssignerId());
    		statement.setInt(5, newProcedure.getPatientId());

    		responseCheck = statement.executeUpdate();
    		statement.close();
    		
    	}catch(Exception e) {
    		System.out.println(e);
    	}
    	
    	return responseCheck;
	}

}
