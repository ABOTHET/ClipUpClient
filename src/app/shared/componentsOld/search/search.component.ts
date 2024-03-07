import { Component } from '@angular/core';
import {PictureComponent} from "../picture/picture.component";

@Component({
  selector: 'app-search',
  standalone: true,
    imports: [
        PictureComponent
    ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass'
})
export class SearchComponent {

}
