import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Productlist } from './productlist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _url:string='../assets/data/products.json';

  constructor(private http:HttpClient) { }
  
  getProducts():Observable<Productlist[]>{
  return this.http.get<Productlist[]>(this._url);
  }
}
