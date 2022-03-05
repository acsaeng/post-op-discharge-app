package project9.postopdischargeapp.api.appointment;


import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(path = "/appointment")
public class AppointmentController {

    private final AppointmentService service;

    @Autowired
    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    @GetMapping(path = "/{role_id}")
    @ResponseBody
    public ArrayList<Appointment> getAppointmentByPatientId(@PathVariable("role_id") String role_id) {
        
    	return service.getAppointmentsById(role_id);
    }
    
    @PostMapping(path = "/")
    public int addAppointment(@RequestBody Appointment newAppointment) {
    	System.out.println("At Controller" + newAppointment.toString());
    	return this.service.addAppointment(newAppointment);
    }
}