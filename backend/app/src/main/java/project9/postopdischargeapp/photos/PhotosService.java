package project9.postopdischargeapp.photos;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

@Service
public class PhotosService {

    private final PhotosRepository repo;

    public PhotosService(@Qualifier("PhotosRepo") PhotosRepository repo) {
        this.repo = repo;
    }
    

	public int addPhoto( MultipartFile multipartFile, int clientId) {
		return this.repo.addPhoto(multipartFile, clientId);
	}
	
	public Photos getSinglePhoto(int photoId) {
		return this.repo.getSinglePhoto(photoId);
	}
}
