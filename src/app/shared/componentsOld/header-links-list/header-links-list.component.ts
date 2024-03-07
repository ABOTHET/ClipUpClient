import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HeaderLinksListItemComponent} from "../header-links-list-item/header-links-list-item.component";
import {Link} from "../../interfaces/link";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-header-links-list',
  standalone: true,
  imports: [
    RouterLink,
    HeaderLinksListItemComponent,
    NgForOf
  ],
  templateUrl: './header-links-list.component.html',
  styleUrl: './header-links-list.component.sass'
})
export class HeaderLinksListComponent {

  @Input()
  public links: Link[] = []

}
