import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {AddProductPageComponent} from "./add-product-page.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";



@NgModule({
  declarations: [AddProductPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  exports:[
    AddProductPageComponent
  ]
})
export class AddProductPageModule { }
