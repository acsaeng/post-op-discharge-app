package project9.postopdischargeapp.messages;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
public class Messages {

    private int messageId;
    private LocalDateTime datetimeSent;
    private String message;
    private int attacmentId;
    private int senderId;
    private int patientId;
    
    
    public Messages(@JsonProperty("messageId") int messageId, 
    			@JsonProperty("datetimeSent") String datetimeSent, 
                @JsonProperty("message") String message, 
                @JsonProperty("attacmentId") int attacmentId,
                @JsonProperty("senderId") int senderId,
                @JsonProperty("patientId") int patientId) {
        this.messageId = messageId;
        this.datetimeSent = LocalDateTime.parse(datetimeSent, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        this.message = message;
        this.attacmentId = attacmentId;
        this.senderId = senderId;
        this.patientId = patientId;
    }
}
