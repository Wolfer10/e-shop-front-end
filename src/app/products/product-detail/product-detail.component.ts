import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../model/product";
import {Shoe} from "../../model/shoe";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {


  product: Product = {
    id: '',
    name: '',
    price: 0,
    type: '',
  }
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.fetchProduct();
  }

  fetchProduct() {
    this.http.get<any>(`http://localhost:3000/products/${this.route.snapshot.params['id']}`).subscribe(data => {
      this.product = new Shoe(data["_id"], data["name"], data["price"], data["type"]);
    })
  }

}

