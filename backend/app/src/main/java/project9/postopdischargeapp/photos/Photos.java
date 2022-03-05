package project9.postopdischargeapp.photos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.sql.Blob;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
public class Photos {
	
    private int photoId;
    private int clientId;
    private LocalDateTime uploadDatetime;
//    private Blob photo;
    private  byte[] photo;
    
    
    public Photos(@JsonProperty("photoId") int photoId, 
    			@JsonProperty("clientId") int clientId, 
    			@JsonProperty("uploadDatetime") String uploadDatetime, 
//                @JsonProperty("photo") Blob photo) {
    			@JsonProperty("photo") byte[] photo) {
        this.photoId = photoId;
        this.clientId = clientId;
        this.uploadDatetime = LocalDateTime.parse(uploadDatetime, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        this.photo = photo;
    }
}
