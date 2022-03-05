package project9.postopdischargeapp.messages;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping(path = "/messages")
public class MessagesController {

    private final MessagesService service;

    @Autowired
    public MessagesController(MessagesService service) {
        this.service = service;
    }

    @GetMapping(path = "/{userId}")
    @ResponseBody
    public ArrayList<Messages> getMessagesById(@PathVariable("userId") int userId) {
        return this.service.getMessagesById(userId);
    }
    
    /**
	 * 'POST' mapping that adds a message
	 * @param comment = RequestBody JSON object to be passed to the Messages class where the JSON keys are already mapped to specific data members
	 * @throws Exception when there is an SQL Exception
	 */
	@PostMapping(path = "/")
	public int addMessage(@RequestBody Messages newMessage) {
		System.out.println("inside the endpoint");
		return this.service.addMessage(newMessage);
	}
}
