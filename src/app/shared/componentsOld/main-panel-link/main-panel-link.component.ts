import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main-panel-link',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './main-panel-link.component.html',
  styleUrl: './main-panel-link.component.sass'
})
export class MainPanelLinkComponent {

  @Input()
  public link: string = "/"

}
