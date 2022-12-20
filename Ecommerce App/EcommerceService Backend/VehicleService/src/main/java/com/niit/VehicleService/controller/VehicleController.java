package com.niit.VehicleService.controller;

import com.niit.VehicleService.domain.Vehicle;
import com.niit.VehicleService.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/")

public class VehicleController {
    private ResponseEntity responseEntity;
    private VehicleService vehicleService;

    @Autowired
    private VehicleController(VehicleService vehicleService){this.vehicleService=vehicleService;}
    @CrossOrigin("*")
    @PostMapping("vehicle")
    public ResponseEntity<?> saveVehicle(@RequestBody Vehicle vehicle){
        try{
            vehicleService.saveVehicleDetail(vehicle);
            responseEntity=new ResponseEntity<>(vehicle, HttpStatus.CREATED);
        } catch (Exception e) {
            responseEntity=new ResponseEntity<>("Error",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @CrossOrigin("*")
    @GetMapping("vehicles")
    public ResponseEntity<?> getAllVehicles(){
        try{
            responseEntity=new ResponseEntity<>(vehicleService.getAllVehicleDetail(),HttpStatus.OK);
        } catch (Exception e) {
            responseEntity=new ResponseEntity<>("Error",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @DeleteMapping("vehicles/{id}")
    public ResponseEntity<?> deleteVehicle(@PathVariable("id") int id)
    {
        try{
            vehicleService.deleteVehicle(id);
            responseEntity=new ResponseEntity<>("Succesfully Deleted",HttpStatus.OK);
        } catch (Exception e) {
            String ex=e.getMessage();
            System.out.println(ex);
            responseEntity=new ResponseEntity<>("Error",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @CrossOrigin("*")
    @PutMapping("/vehicle/{id}")
    public ResponseEntity<?> updateVehicle(@RequestBody Vehicle vehicle, @PathVariable int id)
    {
        return new ResponseEntity<>(vehicleService.updateVehicleDetail(vehicle,id), HttpStatus.OK);
    }
}
