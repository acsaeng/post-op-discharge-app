package project9.postopdischargeapp.procedure;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping(path = "/patientId={patientId}/education/procedures")
public class ProceduresController {

    private final ProceduresService service;

    @Autowired
    public ProceduresController(ProceduresService service) {
        this.service = service;
    }

    /**
     * 'GET' mapping that retrieves all procedures associated with a patient
     * @param patientId
     * @return
     */
    @GetMapping(path = "/")
    @ResponseBody
    public ArrayList<Procedures> getProceduresById(@PathVariable("patientId") int patientId) {
        return this.service.getProceduresById(patientId);
    }
    
    /**
     * 'GET' mapping that retrieves a specific procedure associated with a patient
     * @param procedureId
     * @return
     */
    @GetMapping(path = "/procedureId={procedureId}")
    @ResponseBody
    public ArrayList<Procedures> getProceduresByProcedureId(@PathVariable("procedureId") int procedureId) {
        return this.service.getProceduresByProcedureId(procedureId);
    }
    
    /**
	 * 'POST' mapping that adds a procedure
	 * @param comment = RequestBody JSON object to be passed to the Procedures class where the JSON keys are already mapped to specific data members
	 * @throws Exception when there is an SQL Exception
	 */
	@PostMapping(path = "/")
	public int addProcedure(@RequestBody Procedures newProcedure) {
		return this.service.addProcedure(newProcedure);
	}
}
