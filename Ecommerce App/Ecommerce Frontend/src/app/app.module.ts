import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CartComponent } from './component/cart/cart.component';
import { HomescreenComponent } from './component/homescreen/homescreen.component';

import { RegisterscreenComponent } from './component/accounts/registerscreen/registerscreen.component';
import { AdminscreenComponent } from './admin/adminscreen/adminscreen.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginscreenComponent } from './component/accounts/loginscreen/loginscreen.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVehicleComponent } from './admin/add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './admin/update-vehicle/update-vehicle.component';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';
@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    LoginscreenComponent,
    RegisterscreenComponent,
    AdminscreenComponent,
    CartComponent,
    AddVehicleComponent,
    UpdateVehicleComponent,
    AdminDashComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
