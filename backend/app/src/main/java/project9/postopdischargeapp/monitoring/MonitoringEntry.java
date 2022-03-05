package project9.postopdischargeapp.monitoring;

import java.sql.Date;
import java.sql.Blob;

public class MonitoringEntry {
    private int _monitoringId;
    private int _assignerId;
    private int _patientId;
    private Date _entryDateTime;
    private String _postTitle;
    private String _postDescription;
    private Blob _imageData;

    public MonitoringEntry(int monitoringId,
                           int assingerId,
                           int patientId,
                           Date entryDateTime,
                           String postTitle,
                           String postDescription,
                           Blob imageData){
        _monitoringId = monitoringId;
        _assignerId = assingerId;
        _patientId = patientId;
        _entryDateTime = entryDateTime;
        _postTitle = postTitle;
        _postDescription = postDescription;
        _imageData = imageData;
    }


}
