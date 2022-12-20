import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { count, map, Observable, shareReplay } from 'rxjs';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  count:number;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
   public productList:any;
  constructor(private breakpointObserver: BreakpointObserver,private api:ApiserviceService,private cartService:CartServiceService) {this.count=0;}
  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList =res ;
    });
  }

  incrementCount(item:any){
    this.count++;
    this.cartService.addtoCart(item)
  }
}
