package com.niit.UserAuthenticationService.service;

import com.niit.UserAuthenticationService.domain.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtSecurityTokenGenerator implements SecurityTokenGenerator{
    @Override
    public Map<String,String> generateToken(User user){
        String jwtToken=Jwts.builder().setIssuer("AZone")
                .setSubject(user.getEmailId())
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256,"mysecretkey")
                .compact();

        Map<String,String> map=new HashMap<>();
        map.put("token",jwtToken);
        map.put("message","User Sucessfully logged in.");
        return map;
    }

}
