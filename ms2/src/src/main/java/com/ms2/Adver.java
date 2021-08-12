package com.ms2;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Adver {
  @Id 	
  public String advId ;	
  public String advName;
  public String advDate ;
  public String advKategorie;
  public String advBeschreibung;
  public String userId;
  
  
  
  public Adver() {}
  public Adver(String advId,String advName, String advDate, String advKategorie, String advBeschreibung, String userId){
   this.advId = advId;
   this.advName = advName;
   this.advDate = advDate;
   this.advKategorie= advKategorie;
   this.advBeschreibung=advBeschreibung;
   this.userId = userId;
   }
public String getAdvId() {
	return advId;
}
public void setAdvId(String advId) {
	this.advId = advId;
}
public String getAdvName() {
	return advName;
}
public void setAdvName(String advName) {
	this.advName = advName;
}
public String getAdvDate() {
	return advDate;
}
public void setAdvDate(String advDate) {
	this.advDate = advDate;
}
public String getAdvKategorie() {
	return advKategorie;
}
public void setAdvKategorie(String advKategorie) {
	this.advKategorie = advKategorie;
}
public String getAdvBeschreibung() {
	return advBeschreibung;
}
public void setAdvBeschreibung(String advBeschreibung) {
	this.advBeschreibung = advBeschreibung;
}
public String getUserId() {
	return userId;
}
public void setUserId(String userId) {
	this.userId = userId;
}

}
  
