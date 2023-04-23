import { Component, OnInit} from '@angular/core';
import {HeaderModule} from "./header.module";
import {AuthService} from "../../auth/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService) {
  }

  private _isHidden: boolean = false;

  get isHidden(): boolean{
    return this._isHidden;
  }

  set isHidden(isHidden: boolean){
    this._isHidden = isHidden;
  }

  ngOnInit(){
    this.authService.user.subscribe ({
       next: (user) => {
         this.isHidden = (user !== null)
       }
    })
  }

  protected readonly localStorage = localStorage;
  protected readonly Number = Number;
}
