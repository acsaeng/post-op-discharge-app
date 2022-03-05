package project9.postopdischargeapp.recovery;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping(path = "/education/recoveries")
public class RecoveriesController {

    private final RecoveriesService service;

    @Autowired
    public RecoveriesController(RecoveriesService service) {
        this.service = service;
    }

    /**
     * 'GET' mapping that retrieves all recoveries associated with a patient
     * @param patientId
     * @return
     */
    @GetMapping(path = "/patientId={patientId}")
    @ResponseBody
    public ArrayList<Recoveries> getRecoveriesById(@PathVariable("patientId") int patientId) {
        return this.service.getRecoveriesById(patientId);
    }
    
    /**
     * 'GET' mapping that retrieves a specific recovery associated with a patient
     * @param recoveryId
     * @return
     */
    @GetMapping(path = "/recoveryId={recoveryId}")
    @ResponseBody
    public ArrayList<Recoveries> getRecoveriesByRecoveryId(@PathVariable("recoveryId") int recoveryId) {
        return this.service.getRecoveriesByRecoveryId(recoveryId);
    }
    
    /**
	 * 'POST' mapping that adds a recovery
	 * @param comment = RequestBody JSON object to be passed to the Recoveries class where the JSON keys are already mapped to specific data members
	 * @throws Exception when there is an SQL Exception
	 */
	@PostMapping(path = "/")
	public int addRecovery(@RequestBody Recoveries newRecovery) {
		return this.service.addRecovery(newRecovery);
	}
}
