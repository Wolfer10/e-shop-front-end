import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ],

  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ],


})
export class ProductsModule { }
