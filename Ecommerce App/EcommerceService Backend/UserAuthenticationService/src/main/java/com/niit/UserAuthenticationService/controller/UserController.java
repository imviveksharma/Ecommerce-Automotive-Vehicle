package com.niit.UserAuthenticationService.controller;

import com.niit.UserAuthenticationService.domain.User;
import com.niit.UserAuthenticationService.exception.UserAlreadyExistsException;
import com.niit.UserAuthenticationService.exception.UserNotFoundException;
import com.niit.UserAuthenticationService.service.SecurityTokenGenerator;
import com.niit.UserAuthenticationService.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/")
public class UserController {
    private ResponseEntity responseEntity;
    private UserService userService;
    private SecurityTokenGenerator securityTokenGenerator;

    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }
    @CrossOrigin("*")
    @PostMapping("login")
    public ResponseEntity<?> loginUser(@RequestBody User user) throws UserNotFoundException {
        Map<String, String> map = null;
        try {
            User userObj = userService.findByEmailIdAndPassword(user.getEmailId(), user.getPassword());
            if (userObj.getEmailId().equals(user.getEmailId())) {
                map = securityTokenGenerator.generateToken(user);
                responseEntity = new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (UserNotFoundException e) {
            throw new UserNotFoundException();
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>("Try After Some time.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @CrossOrigin("*")
    @PostMapping(path = "/register",produces="application/json")
    public ResponseEntity<String> saveUser(@RequestBody User user) throws UserAlreadyExistsException {
        try{
            User createUser=userService.saveUser(user);
            responseEntity=new ResponseEntity<String>("User Created",HttpStatus.OK);
        }catch(UserAlreadyExistsException ex){
            throw new UserAlreadyExistsException();
        }catch(Exception ex){
            responseEntity=new ResponseEntity<String>("Error in Saving Data",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @GetMapping("/api/v1/userservice/users")
    public ResponseEntity<?> getAllUsers(HttpServletRequest request) {
        List<User> list = userService.getAllUsers();
        responseEntity = new ResponseEntity<>(list, HttpStatus.OK);
        return responseEntity;
    }
}
