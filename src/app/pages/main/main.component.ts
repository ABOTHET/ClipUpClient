import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Login} from "../../shared/services/interfaces/login";
import {AuthService} from "../../shared/services/auth.service";
import {IdAccessToken} from "../../shared/services/interfaces/idAccessToken";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass'
})
export class MainComponent {

  Email = ''
  Password = ''

  constructor(private authService: AuthService) {
  }

  public login() {
    let data: Login = {
      email: this.Email,
      password: this.Password
    }
    this.authService.login(data).subscribe((res: IdAccessToken) => {
      console.log(res)
    })
  }
}
