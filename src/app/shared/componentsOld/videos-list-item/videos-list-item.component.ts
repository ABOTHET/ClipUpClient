import {Component, Input} from '@angular/core';
import {PictureComponent} from "../picture/picture.component";
import {DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-videos-list-item',
  standalone: true,
  imports: [
    PictureComponent,
    DatePipe,
    RouterLink
  ],
  templateUrl: './videos-list-item.component.html',
  styleUrl: './videos-list-item.component.sass'
})
export class VideosListItemComponent {

  @Input()
  public name: string = ""
  @Input()
  public date: Date = new Date()
  @Input()
  public link: string = ""

  public getDate() {
    let date = this.date.getDate()
    let month = this.date.getMonth() + 1
    let year = this.date.getFullYear()
    let hours = this.date.getHours()
    let minutes = this.date.getMinutes()
    if (date < 10) { // @ts-ignore
      date = '0' + date  }
    if (month < 10) { // @ts-ignore
      month = '0' + month  }
    if (hours < 10) { // @ts-ignore
      hours = '0' + hours  }
    if (minutes < 10) { // @ts-ignore
      minutes = '0' + minutes  }
    let fullDate: string = `${date}.${month}.${year} ${hours}:${minutes}`
    return fullDate
  }

}
