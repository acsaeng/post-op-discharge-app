package project9.postopdischargeapp.photos;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import project9.postopdischargeapp.database.DatabaseConnection;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

import javax.imageio.ImageIO;

@Repository("PhotosRepo")
public class PhotosRepository {

    private final Connection database;
    private ResultSet results;
    private int latestID;

    public PhotosRepository() {
         this.database = DatabaseConnection.getConnection();
    }
    
    public Photos getSinglePhoto(int photoId) {
    	Photos singlePhoto = null;
    	
    	try {
    		PreparedStatement statement = this.database.prepareStatement("SELECT * FROM PHOTOS AS P WHERE P.Photo_ID=?;");
    		statement.setInt(1, photoId);
    		results = statement.executeQuery();
    		
    		while (results.next()) {
    			Blob blob = results.getBlob("Photo");
    			byte[] byteArray = blob.getBytes(1,(int)blob.length());
    			
    			singlePhoto = new Photos(results.getInt("Photo_ID"), results.getInt("Client_ID"), 
    					results.getTimestamp("Upload_Datetime").toLocalDateTime().toString().replace('T', ' '), 
//    					results.getBlob("Photo") );
    					byteArray);
            }
    	}catch(Exception e) {
    		System.out.println(e);
    	}
    	
    	return singlePhoto;
    }

    
    public int addPhoto(MultipartFile multipartFile, int clientId) {
    	int responseCheck =0;
//    	System.out.println("inside the service -> addPhoto");
    	
    	
    	try {
    		//get image from multipartfile received through endpoint and convert to byte array
    		InputStream inputStream = multipartFile.getInputStream();
    		BufferedImage bufferimage =  ImageIO.read(inputStream);
    		ByteArrayOutputStream output = new ByteArrayOutputStream();
    		ImageIO.write(bufferimage, "jpg", output );
    	    byte [] data = output.toByteArray();
    		
    		getLatestID();
        	
        	PreparedStatement statement = this.database.prepareStatement("INSERT INTO PHOTOS (Photo_ID, Client_ID, Upload_Datetime, Photo) VALUES "
    				+ "(?, ?, ?, ?)");
    		statement.setInt(1, (this.latestID+1));
    		statement.setInt(2, clientId);
    		statement.setTimestamp(3, java.sql.Timestamp.valueOf(java.time.LocalDateTime.now()));
//    		statement.setBlob(4, multipartFile.getInputStream()); 
    		statement.setBytes(4, data); 

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
		PreparedStatement statement = this.database.prepareStatement("SELECT MAX(Photo_ID) FROM PHOTOS");
		results = statement.executeQuery();
		results.next();
		
		this.latestID = results.getInt("Max(Photo_ID)");
		statement.close();
	}

}
