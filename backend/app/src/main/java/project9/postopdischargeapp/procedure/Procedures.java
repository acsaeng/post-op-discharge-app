package project9.postopdischargeapp.procedure;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Procedures {

//    private int procedureId;
    private String title;
    private String description;
    private int assignerId;
    private int patientId;
    
    
    public Procedures(
//    		@JsonProperty("procedureId") int procedureId,  
                @JsonProperty("title") String title, 
                @JsonProperty("description") String description,
                @JsonProperty("assignerId") int assignerId,
                @JsonProperty("patientId") int patientId) {
//        this.procedureId = procedureId;
        this.title = title;
        this.description = description;
        this.assignerId = assignerId;
        this.patientId = patientId;
    }
}
