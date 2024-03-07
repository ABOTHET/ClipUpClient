import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.sass'
})
export class PictureComponent {
  private pathToFolderPictures: string = '../../../../assets/pictures'
  // Введи только название картинки с форматом
  // Пример -> NotFound.svg
  @Input()
  public src: string | null = null
  public getLink(): string {
    let path: string
    if (this.src == null) {
      path = `${this.pathToFolderPictures}/NotFound.svg`
      return path
    }
    // Если true - значит это веб-ссылка, если false - значит НЕ веб-ссылка
    let isWebLink: boolean = this.src.indexOf("//") != -1
    if (!isWebLink) {
      path = `${this.pathToFolderPictures}/${this.src}`
      return path
    }
    return this.src
  }

}
