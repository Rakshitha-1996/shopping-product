import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import  {Productlist}    from '../productlist';


@Component({
  selector: 'app-shoproducts',
  templateUrl: './shoproducts.component.html',
  styleUrls: ['./shoproducts.component.css']
})
export class ShoproductsComponent implements OnInit {

  constructor(private _productservice:ProductsService) { }
  public _products:Productlist[]=[];
  private allproducts:Productlist[]=[];
  
onClick(value){
  this.filterProducts(value);
}



  ngOnInit(){
    debugger
    this._productservice.getProducts()
    
    .subscribe(data=>
      {this.allproducts = data;
        this.filterProducts('all');
      } )
    
    
  }
  filterProducts(filterValue) {
    if (filterValue == 'all') {
      this._products = this.allproducts;
    } else {
      this._products = this.allproducts.filter(
        x => x.p_category == filterValue
      );
    }
  }
}
