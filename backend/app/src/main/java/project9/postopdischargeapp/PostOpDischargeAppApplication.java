package project9.postopdischargeapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import project9.postopdischargeapp.database.DatabaseConnection;

@SpringBootApplication
public class PostOpDischargeAppApplication {

    public static void main(String[] args) {
        DatabaseConnection.initialize();
        SpringApplication.run(PostOpDischargeAppApplication.class, args);
    }

}
