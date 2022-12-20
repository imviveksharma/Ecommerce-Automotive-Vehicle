import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {
  hide = true;
  logForm:FormGroup;
  constructor(private api:ApiserviceService,private router:Router) {this.logForm=new FormGroup({
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
      this.router.navigate(['cart']);
    });
    
}
}
