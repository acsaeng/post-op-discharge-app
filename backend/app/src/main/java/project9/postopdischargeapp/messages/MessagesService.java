package project9.postopdischargeapp.messages;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class MessagesService {

    private final MessagesRepository repo;

    public MessagesService(@Qualifier("MessagesRepo") MessagesRepository repo) {
        this.repo = repo;
    }

    public ArrayList<Messages> getMessagesById(int userId) {
        return this.repo.getMessagesById(userId);
    }
    

	public int addMessage(Messages newMessage) {
		return this.repo.addMessage(newMessage);
		
	}
}
