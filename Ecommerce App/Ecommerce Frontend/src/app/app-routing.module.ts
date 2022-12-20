import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './admin/add-vehicle/add-vehicle.component';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';
import { LoginscreenComponent } from './component/accounts/loginscreen/loginscreen.component';
import { RegisterscreenComponent } from './component/accounts/registerscreen/registerscreen.component';

import { AdminscreenComponent } from './admin/adminscreen/adminscreen.component';
import { CartComponent } from './component/cart/cart.component';
import { HomescreenComponent } from './component/homescreen/homescreen.component';
import { LogGuardGuard } from './guard/log-guard.guard';
import { UpdateVehicleComponent } from './admin/update-vehicle/update-vehicle.component';

const routes: Routes = [
  {
path:"login",
component:LoginscreenComponent
  },
  {
    path:"register",
    component:RegisterscreenComponent
  },
  {
     path:"admin",
     component:AdminscreenComponent,
     children:[]
  },{
    path:"admindashboard",
    component:AdminDashComponent,
    canActivate:[LogGuardGuard]
  },{
    path:"admindashboard/add",
    component:AddVehicleComponent,
    canActivate:[LogGuardGuard]
   },
  {
    path:"admindashboard/update",
    component:UpdateVehicleComponent,
    canActivate:[LogGuardGuard]
  }
  ,
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"",
    component:HomescreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
