import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Reg } from '../reg';
import { Vehicle } from '../vehicle';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://localhost:9000/v1/vehicles")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

   url="http://localhost:8081/api/register";
   storeUser(regData1: Reg): Observable<Reg>{
    return this.http.post<Reg>(`${this.url}`,regData1);
   }

  
  url1="http://localhost:8082/v1/vehicle";
  storeVehicle(addData?: Vehicle): Observable<Object>{
    return this.http.post<Object>(`${this.url1}`,addData);
  }

  url2="http://localhost:8081/api/login";
  loginUser(regData2: Reg): Observable<Reg>{
    return this.http.post<Reg>(`${this.url2}`,regData2);
   }
   
   updateVehicle(edit:any):Observable<any>{
    return this.http.put<any>(`${this.url1}/${edit.id}`,edit)
   }
  }
