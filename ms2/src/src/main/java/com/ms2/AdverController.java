package com.ms2;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;


@RestController
public class AdverController {
	
	@Autowired
	private AdverService advService; 
	
	
	// this method saves an advertisement object in database and return response entity.
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.POST, value = "/Advertisment", consumes  = {"application/JSON"})  // CREATE
	public ResponseEntity<?> addAdver(@RequestBody Adver adver)
	{
		
		try 
		{
			advService.addAdver(adver); 		
			System.out.println("addAdver in function");
			return ResponseEntity.ok().build();
		}
		catch(Exception e) 
		{
			System.out.println("addAdver Not in function");
			return ResponseEntity.notFound().build();
		}
		
	}
	// this method filters advertisements by category and  returns all of them from database.
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/AdvertismentByKat/{kathegorie}", produces = {"application/JSON"})
	public List<Adver> getAdverebyKategorie(@PathVariable String kathegorie) 
	{
		try 
		{
			
			System.out.println("getAdverbyKathegorie in function");
			return advService.getAdverKategorie(kathegorie);
		}
		catch(Exception e) 
		{
			System.out.println("getAdverByKathegorie NOT in function");
			return null;
		}
	}
	// this method a single advertisement by Id and returns a JSON object.
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/AdvertismentById/{Id}", produces = {"application/JSON"})
	public Adver getAdverById(@PathVariable String Id) 
	{
		try 
		{
			
			System.out.println("getAdverbyID in function");
			return advService.getAdverByID(Id);
		}
		catch(Exception e) 
		{
			System.out.println("getAdverbyID NOT in function");
			return null;
		}
	}
	// this method updates a single advertisement by ID and returns response entity.
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.PUT, value = "/AdUpdateById/{id}", consumes  = {"application/JSON"}) // UPDATE
	public ResponseEntity<?> updateAdver(@RequestBody Adver adver) 
	{
		try 
		{
					
			advService.updateAdver(adver);  		
			System.out.println("updateAdver in function");
			return ResponseEntity.ok().build();
		}
		catch(Exception e) 
		{
			System.out.println("updateAdver NOT in function");
			return ResponseEntity.notFound().build();
		}		
	}
	// this method deletes a single advertisement by Id and returns response entity.
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.DELETE, value = "/AdDeleteById/{id}", consumes  = {"application/JSON"}) // DELETE
	public ResponseEntity<?> deleteAdverID(@PathVariable String id) 
	{
		try 
		{
			
			advService.deleteAdverByID(id);	
			System.out.println("deleteAdverbyID in function");
			return ResponseEntity.ok().build();
		}
		catch(Exception e) 
		{
			System.out.println("deleteAdverbyID NOT in function");
			return ResponseEntity.notFound().build();
		}			
	}
	// this method filters advertisements by userId and  returns all of them from database.
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/AdvertismentByUserId/{userId}", produces = {"application/JSON"})
	public List<Adver> getAdverByUserId(@PathVariable String userId) 
	{
		try 
		{
			
			System.out.println("getAdverbyUserID in function");
			return advService.getAdverByUserID(userId);
		}
		catch(Exception e) 
		{
			System.out.println("getAdverbyUserID NOT in function");
			return null;
		}
	}
	// this method returns all advertisement from database
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/getAdver", produces = {"application/JSON"}) 
	public List<Adver> getAllAds() 
	{	
		try 
		{		
			System.out.println("getAllAds in function");
			return advService.getAll();
		}
		catch(Exception e) 
		{
			System.out.println("getAllAds NOT in function");
			return null;
		}
		
	}
	
}
