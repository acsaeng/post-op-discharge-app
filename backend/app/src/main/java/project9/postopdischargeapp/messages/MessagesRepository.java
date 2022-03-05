package project9.postopdischargeapp.messages;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import project9.postopdischargeapp.database.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

@Repository("MessagesRepo")
public class MessagesRepository {

    private final Connection database;
    private ResultSet results;
    private int latestID;

    public MessagesRepository() {
         this.database = DatabaseConnection.getConnection();
    }

    public ArrayList<Messages> getMessagesById(int userId) {
    	ArrayList<Messages> chatMessages = new ArrayList<Messages>();
    	DateTimeFormatter datetimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        try {
            // Execute SQL query to retrieve message chatbox belonging to one specified user
            PreparedStatement statement = this.database.prepareStatement("SELECT * FROM MESSAGES WHERE Patient_ID = ?");

            statement.setInt(1, userId);
            results = statement.executeQuery();

            // Extract the messages of chatbox belonging to one specified user
            while (results.next()) {
            	chatMessages.add( new Messages(results.getInt("message_id"),
//            			LocalDateTime.parse(results.getString("datetime_sent"), datetimeFormatter),
            			results.getString("datetime_sent"),
                        results.getString("message"),
                        results.getInt("attachment_id"),
                        results.getInt("sender_id"),
                        results.getInt("patient_id")));
            }

            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return chatMessages;
    }
    
    public int addMessage(@RequestBody Messages newMessage) {
    	int responseCheck =0;
    	
    	try {
    		getLatestID();
        	
        	PreparedStatement statement = this.database.prepareStatement("INSERT INTO Messages (Message_ID, Datetime_Sent, Message, Attachment_id, Sender_ID, Patient_ID) VALUES "
    				+ "(?, ?, ?, ?, ?, ?)");
    		statement.setInt(1, (this.latestID+1));
    		System.out.println(newMessage.getDatetimeSent());
    		System.out.println(newMessage.getDatetimeSent().toString());
    		statement.setString(2, newMessage.getDatetimeSent().toString());
    		statement.setString(3, newMessage.getMessage());
    		statement.setInt(4, newMessage.getAttacmentId());
    		statement.setInt(5, newMessage.getSenderId());
    		statement.setInt(6, newMessage.getPatientId());

    		responseCheck = statement.executeUpdate();
    		statement.close();
    		
    	}catch(Exception e) {
    		System.out.println(e);
    	}
    	
    	return responseCheck;
	}
    
    /**
	 * get the latest ID for the primary key for Messages object from database
	 * @throws Exception when there is an SQL Exception
	 */
	private void getLatestID() throws Exception{
		PreparedStatement statement = this.database.prepareStatement("SELECT MAX(Message_ID) FROM MESSAGES");
		results = statement.executeQuery();
		results.next();
		
		this.latestID = results.getInt("Max(Message_ID)");
		statement.close();
	}

}
