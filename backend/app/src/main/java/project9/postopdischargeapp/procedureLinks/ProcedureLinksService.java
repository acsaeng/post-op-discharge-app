package project9.postopdischargeapp.procedureLinks;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class ProcedureLinksService {

    private final ProcedureLinksRepository repo;

    public ProcedureLinksService(@Qualifier("LinksRepo") ProcedureLinksRepository repo) {
        this.repo = repo;
    }

    public ArrayList<ProcedureLinks> getLinksById(int procedureId) {
        return this.repo.getLinksById(procedureId);
    }

	public int addLink(ProcedureLinks newLink) {
		return this.repo.addLink(newLink);
		
	}
	
}
