package project9.postopdischargeapp.procedureLinks;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping(path = "/patientId={patientId}/education/procedure/links")
public class ProcedureLinksController {

    private final ProcedureLinksService service;

    @Autowired
    public ProcedureLinksController(ProcedureLinksService service) {
        this.service = service;
    }

    /**
     * 'GET' mapping that retrieves all procedure links associated with a procedure
     * @param procedureId
     * @return
     */
    @GetMapping(path = "/procedureId={procedureId}")
    @ResponseBody
    public ArrayList<ProcedureLinks> getLinksById(@PathVariable("procedureId") int procedureId) {
        return this.service.getLinksById(procedureId);
    }
    
    /**
	 * 'POST' mapping that adds a procedure link
	 * @param comment = RequestBody JSON object to be passed to the ProcedureLinks class where the JSON keys 
	 * are already mapped to specific data members
	 * @throws Exception when there is an SQL Exception
	 */
	@PostMapping(path = "/")
	public int addLink(@RequestBody ProcedureLinks newLink) {
		return this.service.addLink(newLink);
	}
}
