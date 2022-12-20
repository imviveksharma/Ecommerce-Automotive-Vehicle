package com.niit.VehicleService.service;

import com.niit.VehicleService.domain.Vehicle;

import java.util.List;

public interface VehicleService {
    Vehicle saveVehicleDetail(Vehicle vehicle) throws Exception;
    Vehicle updateVehicleDetail(Vehicle vehicle,int id);
    boolean deleteVehicle(int id) throws Exception;
    List<Vehicle> getAllVehicleDetail();

}
