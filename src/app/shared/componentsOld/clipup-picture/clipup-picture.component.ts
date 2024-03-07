import { Component } from '@angular/core';
import {PictureComponent} from "../picture/picture.component";

@Component({
  selector: 'app-clipup-picture',
  standalone: true,
  imports: [
    PictureComponent
  ],
  templateUrl: './clipup-picture.component.html',
  styleUrl: './clipup-picture.component.sass'
})
export class ClipupPictureComponent {

  public src: string = "../../../../assets/pictures/ClipUpLogo.webp"

}
