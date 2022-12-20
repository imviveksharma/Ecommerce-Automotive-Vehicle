package com.niit.VehicleService.domain;

import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Document
public class Vehicle {
    @Id
    private int id;
    private String title;
    private String price;
    private String description;
    private String category;
    private String image;
}
