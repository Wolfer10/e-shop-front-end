import {Component, OnInit} from '@angular/core';
import {Shoe} from "../../model/shoe";
import {MatTableDataSource} from "@angular/material/table";
import {ProductsService} from "../../products/products.service";
import {AdminModule} from "../admin.module";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'type', 'price'];
  dataSource: MatTableDataSource<Shoe> = new MatTableDataSource();
  constructor(private productService: ProductsService) {}
  ngOnInit() {
    this.productService.getShoes().subscribe(shoes => {
      this.dataSource = new MatTableDataSource(shoes);
    });

  }

}
