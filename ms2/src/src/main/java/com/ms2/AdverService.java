package com.ms2;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdverService extends Adver{
    
	@Autowired
	private DataBase dataInterface;
	
	// this method saves an advertisement object.
	public void addAdver(Adver adver){
		dataInterface.save(adver);
		
	}
	 // this method returns multiple advertisement objects by category as a list from database.
	public List<Adver> getAdverKategorie(String kathegorie) {
		
		
		return dataInterface.fetchAdverKathegorie(kathegorie);
		}	
	// this method return a single advertisement object from database.	
	public Adver getAdverByID(String id)  				
	{
		return dataInterface.findOne(id);
	}
	// this method updates a single object in database.
	public void updateAdver(Adver adver) 
	{ 		
	   dataInterface.save(adver);
	}
	//this method deletes a single object from database.
	public void deleteAdverByID(String id) 
	{
		dataInterface.delete(id);
	}
	// this method returns multiple advertisement objects by userId as a list from database.
	public List<Adver> getAdverByUserID(String userId) 
	{
		return dataInterface.fetchAdverUserId(userId);
		
	}
	//this method returns all advertisement from database.
	public List<Adver> getAll()
	{
		List<Adver> lists = new ArrayList<>();  	
		dataInterface.findAll().forEach(lists::add);
		return lists;
	}

}
