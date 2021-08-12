package com.ms2;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;



public interface DataBase extends CrudRepository<Adver, String>{
	
    

    @Query("SELECT a FROM Adver a WHERE a.advKategorie=:category")
    List<Adver> fetchAdverKathegorie(@Param("category") String category);
    
    @Query("SELECT a FROM Adver a WHERE a.userId=:category")
    List<Adver> fetchAdverUserId(@Param("category") String category);
    
	
}
