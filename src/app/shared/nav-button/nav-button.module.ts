import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from './nav-button.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    NavButtonComponent
  ],
  exports: [
    NavButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class NavButtonModule { }
