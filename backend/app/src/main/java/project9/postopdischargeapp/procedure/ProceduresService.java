package project9.postopdischargeapp.procedure;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class ProceduresService {

    private final ProceduresRepository repo;

    public ProceduresService(@Qualifier("ProceduresRepo") ProceduresRepository repo) {
        this.repo = repo;
    }

    public ArrayList<Procedures> getProceduresById(int userId) {
        return this.repo.getProceduresById(userId);
    }
    

	public int addProcedure(Procedures newProcedure) {
		return this.repo.addProcedure(newProcedure);
		
	}
}
