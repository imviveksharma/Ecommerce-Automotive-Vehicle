package com.niit.VehicleService.repository;

import com.niit.VehicleService.domain.Vehicle;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


public interface VehicleRepository extends MongoRepository<Vehicle,Integer> {
}
