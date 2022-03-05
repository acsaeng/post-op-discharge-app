package project9.postopdischargeapp.photos;

import java.util.ArrayList;
import java.util.List;

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

    @GetMapping(path="/{photoId}") 
	public Photos getSinglePhoto(@PathVariable("photoId") int photoId){
		Photos singlePhoto = null;
    	try {
    		singlePhoto = this.service.getSinglePhoto(photoId);
		} catch(Exception e) {
			e.printStackTrace();
			
		}
    	return singlePhoto;
	}

    

	@PostMapping(path = "/")
	public int addPhoto(@RequestParam("file") MultipartFile multipartFile, @RequestParam("clientId") int clientId) {
//		System.out.println("inside the endpoint");
		return this.service.addPhoto(multipartFile, clientId);
	}
}
