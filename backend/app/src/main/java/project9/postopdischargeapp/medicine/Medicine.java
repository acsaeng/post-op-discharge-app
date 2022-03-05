package project9.postopdischargeapp.medicine;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Medicine {
    private int id;
	private String name;
	private String dose;
	private String duration;
	private String frequency;
	private int assigner;
	private int assignee;

	public Medicine(int id, 
			String name, 
			String dose, 
			String duration, 
			String frequency, 
			int assigner, 
			int assignee) {
		this.id = id;
		this.name = name;
		this.dose = dose;
		this.duration = duration;
		this.frequency = frequency;
		this.assigner = assigner;
		this.assignee = assignee;
	}
	
	
}
