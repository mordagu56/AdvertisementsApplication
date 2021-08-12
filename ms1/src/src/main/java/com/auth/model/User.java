package com.auth.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@Column(name="userId")
	private int userId;
	@Column(name="email")
	private String email;
	@Column(name="password")
	private String password;
	@Column(name="fullName")
	private String fullName;
		
	public User() {
		super();
	}
	public User(String email, String password) {//, String fullName) {
		super();
		this.email = email;
		this.password = password;
		//this.fullName = fullName;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	
	

}
