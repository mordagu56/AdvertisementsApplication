package com.auth.dao;

import java.util.List;

import com.auth.model.User;

public interface IUserDao {
	
	List<User> getAllUsers();
    User getUserById(int userId);
    boolean registerUser(User user);
    boolean loignUser(User user);

}
