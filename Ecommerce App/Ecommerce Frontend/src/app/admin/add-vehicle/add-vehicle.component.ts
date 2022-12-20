import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
addVehicle: FormGroup;
  constructor(private api:ApiserviceService,private router:Router) {this.addVehicle=new FormGroup({
    id:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required])
  }) }

  ngOnInit(): void {
  }


  saveData(){
    const Data=this.addVehicle.value;
    console.log(Data);
    this.api.storeVehicle(Data).subscribe();
    alert("New Vehicle Added Successfully");
      this.router.navigate(['admindashboard']);
    
  }
}
