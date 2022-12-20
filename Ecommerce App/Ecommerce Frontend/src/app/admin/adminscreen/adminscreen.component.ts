import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { LogServiceService } from 'src/app/service/log-service.service';

@Component({
  selector: 'app-adminscreen',
  templateUrl: './adminscreen.component.html',
  styleUrls: ['./adminscreen.component.css']
})
export class AdminscreenComponent implements OnInit {
  hide = true;
  logForm:FormGroup;
  constructor(private api:ApiserviceService,private router:Router,private logService:LogServiceService) {this.logForm=new FormGroup({
    emailId:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    },
    );}

  ngOnInit(): void {
  }
checkData(){
  const logData = this.logForm.value;
    console.log(logData);
    this.api.loginUser(logData).subscribe(()=>{
      alert("Login Successfully");
      this.logService.isLogin=true;
      this.router.navigate(['admindashboard']);
    },error=>{
      alert("Wrong Id Or Password")
    });
    
}

}
