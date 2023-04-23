import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../products.service";
import {AddProductPageModule} from "./add-product-page.module";
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.css']
})
export class AddProductPageComponent implements OnInit {

  productTypes: string[] = ['Male', 'Female', 'Uni'];

  addProductForm: FormGroup = new FormGroup('');
  submitted = false;
  errorMessage: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
  ) {

  }
  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  get name(){
    return this.addProductForm.get('name')?.value;
  }



  get type(){
    return this.addProductForm.get('type')?.value;
  }

  get price(){
    return this.addProductForm.get('price')?.value;
  }


  onSubmit(): void {
    this.submitted = true;
    if (this.addProductForm.invalid) {
      return;
    }

    this.productService.addProduct(this.addProductForm.value).subscribe(
      () => {
        this.addProductForm.reset();
        this.submitted = false;
        this.errorMessage = '';
        this.router.navigate(['admin'])
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );

  }
}
