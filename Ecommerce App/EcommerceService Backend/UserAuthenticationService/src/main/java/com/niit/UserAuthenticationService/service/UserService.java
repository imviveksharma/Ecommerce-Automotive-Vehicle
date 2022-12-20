package com.niit.UserAuthenticationService.service;

import com.niit.UserAuthenticationService.domain.User;
import com.niit.UserAuthenticationService.exception.UserAlreadyExistsException;
import com.niit.UserAuthenticationService.exception.UserNotFoundException;

import java.util.List;

public interface UserService {
    public User saveUser(User user) throws UserAlreadyExistsException;
    public User findByEmailIdAndPassword(String emailId, String password) throws UserNotFoundException;
    List<User> getAllUsers();
}
