import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reg } from 'src/app/reg';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-registerscreen',
  templateUrl: './registerscreen.component.html',
  styleUrls: ['./registerscreen.component.css']
})
export class RegisterscreenComponent{
  hide = true;
  regForm: FormGroup;
  constructor(private api:ApiserviceService,private router:Router) {this.regForm=new FormGroup({
    userId: new FormControl(''),
    emailId:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    },
    );}

login(){
  this.router.navigate(['login'])
}


     saveData()
    {
    const regData = <Reg>this.regForm.value;
    console.log(regData);
    this.api.storeUser(regData).subscribe(result=>{
    },error=>{
      console.log("success");
      alert("Register Successfully");
      this.router.navigate(['login']);
    });
  }

}