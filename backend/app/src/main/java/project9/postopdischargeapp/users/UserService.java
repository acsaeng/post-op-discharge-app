package project9.postopdischargeapp.users;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(@Qualifier("UserRepo") UserRepository repo) {
        this.repo = repo;
    }

    public List<User> getAllUsers() {
        return this.repo.getAllUsers();
    }
}
