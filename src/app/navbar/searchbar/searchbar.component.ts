import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  constructor( public router: Router, ){  }

  searchFilter(term: string){
    if (term !== "" || term !== term) {
      this.router.navigate(
        ['/search'],
        { queryParams: { q: term } }
      );
    }
  }
}
