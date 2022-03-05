package project9.postopdischargeapp.api.appointment;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class AppointmentService {
	private final AppointmentRepository repo;
	
	public AppointmentService(@Qualifier("AppointmentRepo") AppointmentRepository repo) {
        this.repo = repo;
    }
	
	public ArrayList<Appointment> getAppointmentsById(String role_id)
	{
		String[] roleAndId = role_id.split("_");
        String role = roleAndId[0];
        int id;
        ArrayList<Appointment> appointments = new ArrayList<Appointment>();
        
        try {
        	id = Integer.parseInt(roleAndId[1]);
        	appointments = repo.getAppointmentsById(id, role);
        }catch(Error e) {
        	e.printStackTrace();
        }
        
        return appointments;
	}
	
	public int addAppointment(Appointment newAppointment) {
		return this.repo.addAppointment(newAppointment);
	}
}
