import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { MatTableModule } from '@angular/material/table';
import { AddProductButtonComponent } from './add-product-button/add-product-button.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { CdkTableModule} from '@angular/cdk/table';
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    AdminComponent,
    AddProductButtonComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    CdkTableModule,
    FlexModule,
  ],
  exports: [
    AdminComponent,
    AddProductButtonComponent,
  ]
})
export class AdminModule { }
