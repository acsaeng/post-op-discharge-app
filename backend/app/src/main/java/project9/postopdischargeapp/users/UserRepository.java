package project9.postopdischargeapp.users;

import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

@Repository("UserRepo")
public class UserRepository {

    private Connection database;

    public UserRepository() {
        // TODO: Implement database connection
        // this.database = DatabaseConnection.getConnection();
    }

    public List<User> getAllUsers() {
        // This is where the SQL prepared statement would go
        List<User> allUsers = new ArrayList<User>();

        allUsers.add(new User(1, "Karlen Chow"));
        allUsers.add(new User(2, "Fizzah Malik"));
        allUsers.add(new User(3, "Timothy Mok"));
        allUsers.add(new User(4, "Aron Saengchan"));
        allUsers.add(new User(5, "Simon Zhong"));
        allUsers.add(new User(6, "Jimmy Zhu"));

        return allUsers;
    }
}
