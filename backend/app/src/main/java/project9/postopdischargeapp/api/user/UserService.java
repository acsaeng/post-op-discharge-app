package project9.postopdischargeapp.api.user;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(@Qualifier("UserRepo") UserRepository repo) {
        this.repo = repo;
    }

    public User getUserById(int userId) {
        return this.repo.getUserById(userId);
    }

    public List<User> getTeamPatients(String team) {
        return this.repo.getTeamPatients(team);
    }
    
    public String authenticateUser(String username, String password) throws Exception{
    	String token = "";
    	int numMins = 60;

    	User result =  this.repo.loginUser(username, password);
    	
    	//if user exists on the database
//    	if (result.getPosition().length() > 0) {
   		if (result != null) {
    		String userType = result.getPosition();
    		String userId = String.valueOf(result.getUserId());
    		String patientId = "0";
    		if (userType.equals("Patient")) {
    			patientId = userId;
    		}
    		
//    		ArrayList<String> userInfo = new ArrayList<String>();
//    		userInfo.add(userType);
//    		userInfo.add(userId);
//    		userInfo.add(patientId);
    		
    		HashMap<String, String> userInfo = new HashMap<String, String>();
    		userInfo.put("userType", userType);
    		userInfo.put("userId" , userId);
    		userInfo.put("patientId", patientId);
    		
    		
    		try {
    		    Algorithm algorithm = Algorithm.HMAC256("secret");
    		    token = JWT.create()
    		    		.withPayload(userInfo)
//    		    		.withSubject(userType)
//    		    		.withSubject(userId)
//    		    		.withSubject(patientId)
    		    		.sign(algorithm);
    		} catch (JWTCreationException exception){
    			System.out.println("Invalid Signing configuration / Couldn't convert Claims.");
    		}
    	}
    	
    	return token;
    }
}
