package project9.postopdischargeapp.api.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class User {

    private int userId;
    private String position;
    private String team;
    private String firstName;
    private String lastName;
    private char sex;
    private LocalDate dob;
    private String phoneNum;
    private String email;
    private String password;

    public User(@JsonProperty("userId") int userId, @JsonProperty("position") String position,
                @JsonProperty("team") String team, @JsonProperty("firstName") String firstName,
                @JsonProperty("lastName") String lastName, @JsonProperty("sex") char sex,
                @JsonProperty("dob") LocalDate dob, @JsonProperty("phoneNum") String phoneNum,
                @JsonProperty("email") String email, @JsonProperty("password") String password) {
        this.userId = userId;
        this.position = position;
        this.team = team;
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.dob = dob;
        this.phoneNum = phoneNum;
        this.email = email;
        this.password = password;
    }
}
