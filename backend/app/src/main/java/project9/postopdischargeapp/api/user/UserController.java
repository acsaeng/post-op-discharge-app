package project9.postopdischargeapp.api.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/")
public class UserController {

    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping(path = "user/{userID}")
    @ResponseBody
    public User getUserById(@PathVariable("userID") int userId) {
        return this.service.getUserById(userId);

    }

    @GetMapping(path = "patients/{team}")
    @ResponseBody
    public List<User> getTeamPatients(@PathVariable("team") String team) {
        return this.service.getTeamPatients(team);

    }
}
