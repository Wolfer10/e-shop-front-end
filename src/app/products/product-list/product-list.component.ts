import { Component } from '@angular/core';
import {ProductsModule} from "../products.module";
import {Router} from "@angular/router";
import {ProductsService} from "../products.service";
import {Shoe} from "../../model/shoe";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  constructor(private router: Router, private productsService: ProductsService) {}

  products: Shoe[] = [];

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getShoes().subscribe({
      next: value => this.products = value,
      }
    )
  }

  onProductClick(productId: String) {
    this.router.navigate([`/products/${productId}`])
  }

}
