package project9.postopdischargeapp.procedureLinks;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProcedureLinks {

    private int procedureId;
	private String link;
    
    public ProcedureLinks(@JsonProperty("procedureId") int procedureId, @JsonProperty("link") String link) {
        this.procedureId = procedureId;
    	this.link = link;
    }
}
