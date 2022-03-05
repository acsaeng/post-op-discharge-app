package project9.postopdischargeapp.photos;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@CrossOrigin
@RequestMapping(path = "/photos")
public class PhotosController {

    private final PhotosService service;

    @Autowired
    public PhotosController(PhotosService service) {
        this.service = service;
    }


    
    /**
	 * 'POST' mapping that adds a message
	 * @param comment = RequestBody JSON object to be passed to the Messages class where the JSON keys are already mapped to specific data members
	 * @throws Exception when there is an SQL Exception
	 */
	@PostMapping(path = "/")
	public int addMessage(@RequestParam("file") MultipartFile multipartFile, @RequestParam("clientId") int clientId) {
		System.out.println("inside the endpoint");
		return this.service.addPhoto(multipartFile, clientId);
	}
}
