package project9.postopdischargeapp.procedureLinks;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import project9.postopdischargeapp.database.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

@Repository("LinksRepo")
public class ProcedureLinksRepository {

    private final Connection database;
    private ResultSet results;

    public ProcedureLinksRepository() {
         this.database = DatabaseConnection.getConnection();
    }

    public ArrayList<ProcedureLinks> getLinksById(int procedureId) {
    	ArrayList<ProcedureLinks> links = new ArrayList<ProcedureLinks>();

        try {
            // Execute SQL query to retrieve links belonging to one specified user
            PreparedStatement statement = this.database.prepareStatement("SELECT * FROM PROCEDURE_VIDEO "
            		+ "WHERE Procedure_ID = ?");

            statement.setInt(1, procedureId);
            results = statement.executeQuery();

            // Extract the links belonging to one specified user
            while (results.next()) {
            	links.add(new ProcedureLinks(
            			results.getInt("procedure_id"),
                        results.getString("link")));
            }
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return links;
    }
    
    public int addLink(@RequestBody ProcedureLinks newLink) {
    	int responseCheck = 0;
    	
    	try {    	
        	PreparedStatement statement = this.database.prepareStatement("INSERT INTO PROCEDURE_VIDEO "
        			+ "(Procedure_ID, Link) VALUES (?, ?)");
    		statement.setInt(1, newLink.getProcedureId());
    		statement.setString(2, newLink.getLink());

    		responseCheck = statement.executeUpdate();
    		statement.close();
    		
    	}catch(Exception e) {
    		System.out.println(e);
    	}
    	
    	return responseCheck;
	}

}
