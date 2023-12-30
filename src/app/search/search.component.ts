import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  query!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  courses: any = [];

  constructor(public coursesService: CoursesService, public router: Router, public actRoute: ActivatedRoute){  }
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.query = this.actRoute.snapshot.queryParams['q'];
    this.subscription = this.coursesService.getCourses().subscribe(data => {
      this.courses = data;
      this.courses = this.courses.filter((courses: { category: string; }) => courses.category.toLowerCase().includes(this.query.toLowerCase()) || courses.category.toLowerCase().includes(this.query.toLowerCase()));
    });

}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
