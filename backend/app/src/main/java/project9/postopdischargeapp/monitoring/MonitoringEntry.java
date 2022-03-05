package project9.postopdischargeapp.monitoring;

import java.sql.Date;
import java.sql.Blob;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MonitoringEntry {
    private int _monitoringId;
    private int _assignerId;
    private int _patientId;
    private Date _entryDateTime;
    private String _postTitle;
    private String _postDescription;
    private Blob _imageData;

    public MonitoringEntry(@JsonProperty("monitoringId") int monitoringId,
                           @JsonProperty("assignerId") int assignerId,
                           @JsonProperty("patientId") int patientId,
                           @JsonProperty("entryDateTime") Date entryDateTime,
                           @JsonProperty("postTitle") String postTitle,
                           @JsonProperty("postDescription") String postDescription,
                           @JsonProperty("imageData") Blob imageData){
        _monitoringId = monitoringId;
        _assignerId = assignerId;
        _patientId = patientId;
        _entryDateTime = entryDateTime;
        _postTitle = postTitle;
        _postDescription = postDescription;
        _imageData = imageData;
    }


}
