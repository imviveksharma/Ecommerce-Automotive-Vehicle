import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartServiceService } from 'src/app/service/cart-service.service';
interface Vehicle{
  id:Number;
  title:String;
  price:String;
  description:String;
  category:String;
  image:String;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Vehicle[] = [];
 
  constructor(private cartService:CartServiceService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.products=res;
    })
  }
   removeItem(item:any){
    this.cartService.removeCart(item);
   }


   nav(){
   this.router.navigate(['register'])
   }
   displayedColumns: string[] = ['id', 'title', 'category', 'price','actions','buy'];
  dataSource = this.products;
  }