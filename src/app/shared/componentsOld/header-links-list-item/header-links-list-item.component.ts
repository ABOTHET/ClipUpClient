import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Link} from "../../interfaces/link";

@Component({
  selector: 'app-header-links-list-item',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './header-links-list-item.component.html',
  styleUrl: './header-links-list-item.component.sass'
})
export class HeaderLinksListItemComponent {

  @Input()
  public link: Link = {} as Link

}
