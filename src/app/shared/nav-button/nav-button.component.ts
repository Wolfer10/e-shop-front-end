import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent {

  @Input()
  route: String = '';

  @Input()
  buttonName: String = '';

  @Input()
  isHidden: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
  }

  onButtonClick(){
    this.router.navigate([this.route]);
    if (this.route == "login"){
      this.authService.logout();
    }
  }
}
