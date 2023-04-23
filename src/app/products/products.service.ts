import { Injectable } from '@angular/core';
import {Shoe} from "../model/shoe";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, ) { }

  getShoes() : Observable<Shoe[]> {
    return this.http.get<any[]>('http://localhost:3000/products/').pipe(
       map(data => data.map( product => new Shoe(product["_id"], product["name"], product["price"], product["type"]))))
  }

  addProduct(product: Product) : Observable<Product> {
    return this.http.post<any>('http://localhost:3000/products/', {...product});
  }

}
