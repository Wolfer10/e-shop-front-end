import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {HeaderComponent} from "./header.component";
import {NavButtonModule} from "../nav-button/nav-button.module";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    NavButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
