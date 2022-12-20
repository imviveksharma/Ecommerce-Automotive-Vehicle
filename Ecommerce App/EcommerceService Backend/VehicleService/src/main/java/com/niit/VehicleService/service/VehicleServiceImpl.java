package com.niit.VehicleService.service;

import com.niit.VehicleService.domain.Vehicle;
import com.niit.VehicleService.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {
    private VehicleRepository vehicleRepository;

    @Autowired
    private VehicleServiceImpl(VehicleRepository vehicleRepository){this.vehicleRepository=vehicleRepository;}

    @Override
    public Vehicle saveVehicleDetail(Vehicle vehicle) throws Exception {
        if(vehicleRepository.findById(vehicle.getId()).isPresent())
        {
            throw new Exception();
        }
        return vehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle updateVehicleDetail(Vehicle vehicle, int id) {
        if(vehicleRepository.findById(id).isEmpty()){
            return null;
        }
        return vehicleRepository.save(vehicle);
    }


    @Override
    public boolean deleteVehicle(int id) throws Exception {
        boolean flag=false;
        if(vehicleRepository.findById(id).isEmpty())
        {
            throw new Exception();
        }
        else
        {
            vehicleRepository.deleteById(id);
            flag=true;
        }
        return flag;
    }

    @Override
    public List<Vehicle> getAllVehicleDetail() {
     return vehicleRepository.findAll();
    }
}
