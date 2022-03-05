package project9.postopdischargeapp.recovery;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Recoveries {

    private String title;
    private String description;
    private int assignerId;
    private int patientId;
    
    
    public Recoveries(
                @JsonProperty("title") String title, 
                @JsonProperty("description") String description,
                @JsonProperty("assignerId") int assignerId,
                @JsonProperty("patientId") int patientId) {
        this.title = title;
        this.description = description;
        this.assignerId = assignerId;
        this.patientId = patientId;
    }
}
