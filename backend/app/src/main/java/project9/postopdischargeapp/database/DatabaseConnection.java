package project9.postopdischargeapp.database;

import java.sql.*;

public class DatabaseConnection {

    private static final String url = "jdbc:mysql://localhost:3306/postopdischargeapp";

    private static final String username = "dummyRootUser";

    private static final String password = "password";

    private static Connection connection;

    public static void initialize() {
        try {
            connection = DriverManager.getConnection(url, username, password);
        } catch(SQLException e) {
            e.printStackTrace();
        }
    }

    public static void close() {
        try {
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static Connection getConnection() {
        return connection;
    }
}