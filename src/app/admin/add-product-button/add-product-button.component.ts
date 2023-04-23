import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-product-button',
  templateUrl: './add-product-button.component.html',
  styleUrls: ['./add-product-button.component.css']
})
export class AddProductButtonComponent {

  constructor(private router: Router) {
  }

  onButtonClick(){
    console.log("Navigálás")
    this.router.navigate(['add-product'])
  }

}
