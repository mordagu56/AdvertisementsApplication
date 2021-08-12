package com.auth.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth.dao.IUserDao;
import com.auth.model.User;

@Service
public class AuthService implements IAuthService {

	@Autowired
	private IUserDao userDao;
	@Override
	public List<User> getAllUsers() {
		List<User> usr = userDao.getAllUsers();
		return usr;
	}

	@Override
	public User getUserById(int userId) {
		User usr = userDao.getUserById(userId);
		return usr;
	}

	@Override
	public synchronized boolean registerUser(User user) {
		boolean reg = userDao.registerUser(user);
		return reg;
	}

	@Override
	public boolean loignUser(User user) {
		boolean log = userDao.loignUser(user);
		return log;
	}

}
