import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
public cartItem:any=[]
public productList=new BehaviorSubject<any>([])
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartItem.push(...product);
    this.productList.next(product);
  }

  addtoCart(product:any){
    this.cartItem.push(product);
    this.productList.next(this.cartItem);
  }
  removeCart(product:any){
    this.cartItem.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartItem.splice(index,1)
      }
    })
  }

}
