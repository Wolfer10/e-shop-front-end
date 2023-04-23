import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {adminGuard, loginGuard} from "./auth/loginGuard";
import {AdminComponent} from "./admin/admin/admin.component";
import {AddProductPageComponent} from "./products/add-product-page/add-product-page.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent, canActivate: [loginGuard, adminGuard], },
  { path: 'products', component: ProductListComponent, canActivate: [loginGuard],},
  { path: 'products/:id', component: ProductDetailComponent, canActivate: [loginGuard],},
  { path: 'add-product', component: AddProductPageComponent, canActivate: [loginGuard],},
  { path: 'forbidden', component: ForbiddenComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
