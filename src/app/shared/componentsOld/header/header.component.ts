import { Component } from '@angular/core';
import {PictureComponent} from "../picture/picture.component";
import {ClipupPictureComponent} from "../clipup-picture/clipup-picture.component";
import {RouterLink} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {HeaderLinksListComponent} from "../header-links-list/header-links-list.component";
import {SearchComponent} from "../search/search.component";
import {Link} from "../../interfaces/link";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    PictureComponent,
    ClipupPictureComponent,
    RouterLink,
    HeaderLinksListComponent,
    SearchComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  public links: Link[] = [
    { link: "", name: "Выйти" },
    { link: "", name: "Аккаунт" },
    { link: "", name: "Настройки" },
  ]
  public clipupName: string = ""
  public constructor() {
    this.clipupName = environment.clipupName
  }
}
