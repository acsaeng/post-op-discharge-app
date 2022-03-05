package project9.postopdischargeapp.monitoring;

//import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;
import project9.postopdischargeapp.database.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository("MonitoringRepo")
public class MonitoringRepository {
    private final Connection database;
    private ResultSet results;
    private String query;

    public MonitoringRepository(){this.database = DatabaseConnection.getConnection();}

    public List<MonitoringEntry> getMonitoringEntriesByPatientId(int patientId){
        List<MonitoringEntry> monitoringEntries = new ArrayList<>();
        try{
            query = "SELECT * "+
                    "FROM MONITORING "+
                    "LEFT JOIN PHOTOS "+
                    "ON MONITORING.Photo_ID = PHOTOS.Photo_ID "+
                    "WHERE MONITORING.Patient_ID = ?";
            PreparedStatement statement = this.database.prepareStatement(query);
            statement.setInt(1,patientId);
            results = statement.executeQuery();
            while (results.next()){
                addMonitoringEntryToList(monitoringEntries);
            }
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return monitoringEntries;
    }

    public Map<Integer, List<MonitoringEntry>> getMonitoringEntriesByAssignerId(int AssignerId){
        Map<Integer, List<MonitoringEntry>> monitoringEntries = new HashMap<>();
        try{
            query = "SELECT * "+
                    "FROM MONITORING "+
                    "LEFT JOIN PHOTOS "+
                    "ON MONITORING.Photo_ID = PHOTOS.Photo_ID "+
                    "WHERE MONITORING.Assigner_ID = ?";
            PreparedStatement statement = this.database.prepareStatement(query);
            statement.setInt(1,AssignerId);
            results = statement.executeQuery();
            while (results.next()){
                int patientId = results.getInt("patient_id");
                if(monitoringEntries.containsKey(patientId)){
                    addMonitoringEntryToList(monitoringEntries.get(patientId));
                }else{
                    List<MonitoringEntry> monitoringPatientEntries = new ArrayList<>();
                    addMonitoringEntryToList(monitoringPatientEntries);
                    monitoringEntries.put(patientId,monitoringPatientEntries );
                }
            }
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return monitoringEntries;
    }

//    @NotNull
    private void addMonitoringEntryToList(List<MonitoringEntry> monitoringEntries) throws SQLException {
        monitoringEntries.add(new MonitoringEntry(results.getInt("monitoring_id"),
                results.getInt("assigner_id"),
                results.getInt("patient_id"),
                results.getDate("post_datetime"),
                results.getString("post_title"),
                results.getString("post_description"),
                results.getBlob("Photo")));
    }

    public int addMonitoringEntry(@RequestBody MonitoringEntry monitoringEntry){
        int responseCheck = 0;

        try {
            query = "INSERT INTO Monitoring (Assigner_ID, Patient_ID, Post_Datetime, Post_Title, Post_Description, Photo_ID)\n" +
                    "VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement statement = this.database.prepareStatement(query);
            statement.setInt(1, monitoringEntry.get_assignerId());
            statement.setInt(2, monitoringEntry.get_patientId());
            statement.setDate(3, monitoringEntry.get_entryDateTime());
            statement.setString(4, monitoringEntry.get_postTitle());
            statement.setString(5, monitoringEntry.get_postDescription());
            statement.setBlob(6, monitoringEntry.get_imageData());

            responseCheck = statement.executeUpdate();
            statement.close();

        }catch(Exception e) {
            e.printStackTrace();
        }

        return responseCheck;

    }
}
