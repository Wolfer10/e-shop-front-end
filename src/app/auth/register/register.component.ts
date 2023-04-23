import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {User} from '../../model/user';
import * as moment from 'moment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup('');

  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }


  isValidDate(control: AbstractControl): ValidationErrors | null {
    const date = control.value;
    if (!date) {
      return null;
    }
    const parsedDate = moment(date, 'YYYY-MM-DD', true);
    return parsedDate.isValid() ? null : { invalidDate: true };
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passwordConfirmation: new FormControl('', Validators.required),
      birthDate: new FormControl('',  [Validators.required, this.isValidDate])
    });
  }

  changeDatePicker(): any {
    this.registerForm.value.expireDate = moment(this.registerForm.value.expireDate).format('YYYY-MM-DD');
  }

  get username() {
    return this.registerForm.get('username')!;
  }

  get password() {
    return this.registerForm.get('password')!;
  }

  get passwordConfirmation() {
    return this.registerForm.get('passwordConfirmation')!;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {username, password, birthDate} = this.registerForm.value;
      console.log(birthDate)
      const user = {username: username, password: password, birthdate: birthDate, accessLevel : 1} as User;
      this.authService.register(user).subscribe({
        next: next => {this.router.navigate(['/login']);},
        error: err => this.errorMessage = err
      });
    }
  }
}
