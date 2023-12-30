import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

amount = 0;

nav: Nav [] = [
  {
  link: '/fruit',
  name: "Fruit",
  exact: true
  },
  {
    link: '/vegetables',
    name: "Vegetables",
    exact: true
  },
  {
    link: '/grains',
    name: "Grains",
    exact: true
  }
];

}
