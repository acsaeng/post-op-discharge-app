package project9.postopdischargeapp.medicine;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
//@RequestMapping(path = "/medicineId={medicineId}/medicine")
@RequestMapping(path = "/medicine")
public class MedicineController {

    private final MedicineService service;

    @Autowired
    public MedicineController(MedicineService service) {
        this.service = service;
    }

   
    @GetMapping(path = "/")
    @ResponseBody
    public ArrayList<Medicine> getMedicineById(@PathVariable("medicineId") int medicineId) {
        return this.service.getMedicineById(medicineId);
    }
    
    
    @GetMapping(path = "/patientId={patientId}")
    @ResponseBody
    public ArrayList<Medicine> getMedicineByPatientId(@PathVariable("patientId") int medicineId) {
        return this.service.getMedicineByPatientId(medicineId);
    }
    
   
	@PostMapping(path = "/")
	public int addMedicine(@RequestBody Medicine newProcedure) {
		return this.service.addMedicine(newProcedure);
	}
}
