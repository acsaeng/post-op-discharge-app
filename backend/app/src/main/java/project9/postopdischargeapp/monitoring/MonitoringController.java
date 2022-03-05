package project9.postopdischargeapp.monitoring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project9.postopdischargeapp.messages.Messages;
import project9.postopdischargeapp.messages.MessagesService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping(path = "/education/monitoring")
public class MonitoringController {

    private final MonitoringService _monitoringService;

    @Autowired
    public MonitoringController(MonitoringService monitoringService) {
        _monitoringService = monitoringService;
    }

    @GetMapping(path = "/patient/{userId}")
    @ResponseBody
    public List<MonitoringEntry> getMonitoringEntriesByPatientId(@PathVariable("userId") int userId) {
        return _monitoringService.getMonitoringEntriesByPatientId(userId);
    }

    @GetMapping(path = "/assigner/{userId}")
    @ResponseBody
    public Map<Integer, List<MonitoringEntry>> getMonitoringEntriesByAssignerId(@PathVariable("userId") int userId) {
        return _monitoringService.getMonitoringEntriesByAssignerId(userId);
    }
}
