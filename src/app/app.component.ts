import { Component, HostListener } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers : [Title]
})


export class AppComponent {


  constructor( private title: Title) {
    this.title.setTitle('Courses for you');
}

  @HostListener('window:focus', ['$event'])
  onFocus(): void {
    this.title.setTitle('Courses for you');
  }


  @HostListener('window:blur', ['$event'])
  onBlur(): void {
    this.title.setTitle('Wait, come back!');
  }

}
