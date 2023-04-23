import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ]
})
export class AdminModule { }
