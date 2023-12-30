import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('fade', [
      state('fade-in', style({ opacity: 1 })),
      state('fade-out', style({ opacity: 0 })),
      transition('fade-in <=> fade-out', animate('1.5s ease-in-out')),
    ]),
  ],
})
export class HomePageComponent implements OnInit, OnDestroy {
  categories: string[] = ['programming', 'art', 'cooking', 'music'];
  fade = true;
  fadeId:  null | ReturnType<typeof setTimeout> = null;
  indexId:  null | ReturnType<typeof setTimeout> = null;
  index = 0;

ngOnInit(): void {

  this.indexId = setInterval(() => {
    if (this.index === this.categories.length - 1) {
          this.index = 0;
          } else {
           this.index++;
         }
  }, 3400);

this.fadeId = setInterval(() => {
  this.fade = !this.fade;
}, 1700);
}

ngOnDestroy() {
  if (this.indexId ) {
    clearInterval(this.indexId);
  }
  if (this.fadeId) {
    clearInterval(this.fadeId);
  }
}

}
