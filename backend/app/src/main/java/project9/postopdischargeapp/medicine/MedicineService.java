package project9.postopdischargeapp.medicine;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class MedicineService {

    private final MedicineRepository repo;

    public MedicineService(@Qualifier("MedicineRepo") MedicineRepository repo) {
        this.repo = repo;
    }

    public ArrayList<Medicine> getMedicineById(int userId) {
        return this.repo.getMedicineById(userId);
    }
    
    public ArrayList<Medicine> getMedicineByPatientId(int userId) {
    	return this.repo.getMedicineByPatientId(userId);
	}

	public int addMedicine(Medicine newMedicine) {
		return this.repo.addMedicine(newMedicine);
		
	}
	
}
