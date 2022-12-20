import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../service/apiservice.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  updateVehicle: FormGroup;
  constructor(private api:ApiserviceService,private router:Router,private apiService:ApiserviceService) {this.updateVehicle=new FormGroup({
    id:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required])
  }) }

  ngOnInit(): void {
  }
 updateData(){
  const updateData=this.updateVehicle.value;
  this.apiService.updateVehicle(updateData).subscribe(()=>{
    alert("Updated Succesfully");
    this.router.navigate(['admindashboard'])
  })
 }
}
