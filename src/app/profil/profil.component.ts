import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {User} from "../model/user";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  public user : User = {
    username: '',
    password: '',
    birthdate: new Date(),
    accessLevel: 0
  };

  ngOnInit(): void {
    this.authService.getUserByName(localStorage.getItem("user")!).subscribe( user => {
        this.user = user;
        console.log(user)
      }
    )
  }


}
