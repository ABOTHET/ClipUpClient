import { Component } from '@angular/core';
import {MainPanelLinkComponent} from "../main-panel-link/main-panel-link.component";

@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [
    MainPanelLinkComponent
  ],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.sass'
})
export class MainPanelComponent {

}
