import { Component } from '@angular/core';
import {VideosListItemComponent} from "../videos-list-item/videos-list-item.component";

@Component({
  selector: 'app-videos-list',
  standalone: true,
  imports: [
    VideosListItemComponent
  ],
  templateUrl: './videos-list.component.html',
  styleUrl: './videos-list.component.sass'
})
export class VideosListComponent {

}
