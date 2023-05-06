import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import { AppRoutingModule } from './app-routing.module';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {NavButtonModule} from "./shared/nav-button/nav-button.module";
import {HeaderModule} from "./shared/header/header.module";
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {AddProductPageModule} from "./products/add-product-page/add-product-page.module";
import {ProfilModule} from "./profil/profil.module";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    NavButtonModule,
    HeaderModule,
    AddProductPageModule,
    ProfilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
