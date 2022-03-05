package project9.postopdischargeapp.api.user;

import org.springframework.stereotype.Repository;
import project9.postopdischargeapp.database.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Repository("UserRepo")
public class UserRepository {

    private final Connection database;

    public UserRepository() {
         this.database = DatabaseConnection.getConnection();
    }

    public User getUserById(int userId) {
        User user = null;

        try {
            // Execute SQL query to retrieve specified user
            PreparedStatement statement = this.database.prepareStatement("SELECT * FROM USERS WHERE User_ID = ?");

            statement.setInt(1, userId);
            ResultSet results = statement.executeQuery();

            // Extract the user's information
            while (results.next()) {
                user = new User(results.getInt("User_ID"),
                                results.getString("Position"),
                                results.getString("Team"),
                                results.getString("First_Name"),
                                results.getString("Last_Name"),
                                results.getString("Sex").charAt(0),
                                LocalDate.parse(results.getString("DoB")),
                                results.getString("Phone_Num"),
                                results.getString("Email"),
                                results.getString("User_Password"));
            }

            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return user;
    }

    public List<User> getTeamPatients(String team) {
        List<User> patients = new ArrayList<>();

        try {
            // Execute SQL query to retrieve specified user
            PreparedStatement statement = this.database.prepareStatement("SELECT * FROM USERS WHERE Position = 'Patient' AND Team = ?;");

            statement.setString(1, team.substring(0, 1).toUpperCase() + team.substring(1));
            ResultSet results = statement.executeQuery();

            // Extract the user's information
            while (results.next()) {
                User user = new User(results.getInt("User_ID"),
                        results.getString("Position"),
                        results.getString("Team"),
                        results.getString("First_Name"),
                        results.getString("Last_Name"),
                        results.getString("Sex").charAt(0),
                        LocalDate.parse(results.getString("DoB")),
                        results.getString("Phone_Num"),
                        results.getString("Email"),
                        results.getString("User_Password"));

                patients.add(user);
            }

            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return patients;
    }
}
