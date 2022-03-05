package project9.postopdischargeapp.procedure;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping(path = "/education/procedures")
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
    @GetMapping(path = "/{patientId}")
    @ResponseBody
    public ArrayList<Procedures> getProceduresById(@PathVariable("patientId") int patientId) {
        return this.service.getProceduresById(patientId);
    }
    
    /**
	 * 'POST' mapping that adds a procedure
	 * @param comment = RequestBody JSON object to be passed to the Procedures class where the JSON keys are already mapped to specific data members
	 * @throws Exception when there is an SQL Exception
	 */
	@PostMapping(path = "/")
	public int addProcedure(@RequestBody Procedures newProcedure) {
		System.out.println("inside the endpoint");
		return this.service.addProcedure(newProcedure);
	}
}
