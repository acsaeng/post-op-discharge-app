package project9.postopdischargeapp.monitoring;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MonitoringService {

    private final MonitoringRepository repo;

    public MonitoringService(@Qualifier("MonitoringRepo") MonitoringRepository repo) {
        this.repo = repo;
    }

    public List<MonitoringEntry> getMonitoringEntriesByPatientId(int patientId) {
        return this.repo.getMonitoringEntriesByPatientId(patientId);
    }

    public Map<Integer, List<MonitoringEntry>> getMonitoringEntriesByAssignerId(int assignerId) {
        return this.repo.getMonitoringEntriesByAssignerId(assignerId);
    }

    public int addMonitoringEntry(MonitoringEntry monitoringEntry){
        return this.repo.addMonitoringEntry(monitoringEntry);
    }
}
