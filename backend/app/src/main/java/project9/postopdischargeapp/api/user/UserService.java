package project9.postopdischargeapp.api.user;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(@Qualifier("UserRepo") UserRepository repo) {
        this.repo = repo;
    }

    public User getUserById(int userId) {
        return this.repo.getUserById(userId);
    }
}
