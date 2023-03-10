package com.niit.UserAuthenticationService.service;

import com.niit.UserAuthenticationService.domain.User;
import com.niit.UserAuthenticationService.exception.UserAlreadyExistsException;
import com.niit.UserAuthenticationService.exception.UserNotFoundException;
import com.niit.UserAuthenticationService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
     private UserRepository userRepository;

     @Autowired
     public UserServiceImpl(UserRepository userRepository)
     {
         this.userRepository=userRepository;
     }

    @Override
    public User saveUser(User user) throws UserAlreadyExistsException {
       return userRepository.save(user);
    }

    @Override
    public User findByEmailIdAndPassword(String emailId, String password) throws UserNotFoundException
    {
       User user=userRepository.findByEmailIdAndPassword(emailId, password);
        if(user == null)
        {
           throw new UserNotFoundException();
        }
        else return user;
    }

    @Override
    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }
}
