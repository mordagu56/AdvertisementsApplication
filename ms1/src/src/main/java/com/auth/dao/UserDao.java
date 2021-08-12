package com.auth.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.auth.model.User;

@Transactional
@Repository
public class UserDao implements IUserDao {
	
	@PersistenceContext	
	private EntityManager entityManager;

	@SuppressWarnings("unchecked")
	@Override
	public List<User> getAllUsers() {
		String sqll = "FROM User as us1 ORDER BY us1.userId";
		return (List<User>) entityManager.createQuery(sqll).getResultList();
	}

	@Override
	public User getUserById(int userId) {
		return entityManager.find(User.class, userId);
	}

	@Override
	public boolean registerUser(User user) {
		entityManager.persist(user);
		return true;
	}

	@SuppressWarnings("unchecked")
	@Override
	public boolean loignUser(User user) {
		String sql1 = "FROM User as us1 ORDER BY us1.userId";
		List<User> list = (List<User>) entityManager.createQuery(sql1).getResultList();
		for(User u : list) {
			if(user.getEmail().equals(u.getEmail())) {
				if(user.getPassword().equals(u.getPassword())) return true;
			}
		}
		return false;
	}

}
