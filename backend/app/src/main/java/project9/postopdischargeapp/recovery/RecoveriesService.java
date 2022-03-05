package project9.postopdischargeapp.recovery;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class RecoveriesService {

    private final RecoveriesRepository repo;

    public RecoveriesService(@Qualifier("RecoveriesRepo") RecoveriesRepository repo) {
        this.repo = repo;
    }

    public ArrayList<Recoveries> getRecoveriesById(int userId) {
        return this.repo.getRecoveriesById(userId);
    }
    
    public ArrayList<Recoveries> getRecoveriesByRecoveryId(int recoveryId) {
		return this.repo.getRecoveriesByRecoveryId(recoveryId);
	}

	public int addRecovery(Recoveries newRecovery) {
		return this.repo.addRecovery(newRecovery);
		
	}	
}
