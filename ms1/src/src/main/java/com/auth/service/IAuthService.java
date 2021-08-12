package com.auth.service;

import java.util.List;

import com.auth.model.User;

public interface IAuthService {
	
	List<User> getAllUsers();
    User getUserById(int userId);
    boolean registerUser(User user);
    boolean loignUser(User user);

}
