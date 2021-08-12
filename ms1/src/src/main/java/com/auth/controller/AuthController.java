package com.auth.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.auth.model.User;
import com.auth.service.IAuthService;


@CrossOrigin(origins = "*")
@RestController
public class AuthController {
	
	@Autowired
	private IAuthService authService;
	
	@PostMapping("register")
	public ResponseEntity<Void> registerUser(@RequestBody User user, UriComponentsBuilder builder) {
        boolean reg = authService.registerUser(user);
        if (!reg) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/register/{id}").buildAndExpand(user.getUserId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	
	@PostMapping("login")
	public ResponseEntity<Void> loginUser(@RequestBody User user, UriComponentsBuilder builder) {
		boolean log = authService.loignUser(user);
		if (!log) {
			System.out.println("Failed to log in");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(builder.path("/login/{id}").buildAndExpand(user.getUserId()).toUri());
		System.out.println("Loged in succesfully");
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	 
	@GetMapping("users")
	public ResponseEntity<List<User>> getUsers() {
		List<User> list = authService.getAllUsers();
		return new ResponseEntity<List<User>>(list, HttpStatus.OK);
	}
	
	@GetMapping("user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") int id) {
		User user =  authService.getUserById(id);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@GetMapping("test")
	public ResponseEntity<String> testApp() {
		return new ResponseEntity<String> ("Message", HttpStatus.OK);
	}

}
