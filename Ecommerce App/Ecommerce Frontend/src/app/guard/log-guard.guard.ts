import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogServiceService } from '../service/log-service.service';

@Injectable({
  providedIn: 'root'
})
export class LogGuardGuard implements CanActivate {
  constructor(private loginService:LogServiceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.isLogin){return true;}
    else
    {
      this.router.navigateByUrl("admin");
      return false;
    }
  }
  
}
