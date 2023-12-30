import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  title = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  courses: any = [];
  query!: string;

  constructor(public coursesService: CoursesService, public router: Router, public actRoute: ActivatedRoute){  }
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.query = this.actRoute.snapshot.queryParams['category'];

    this.subscription =  this.coursesService.getCourses().subscribe(data => {
    this.courses = data;
    this.courses = this.courses.filter((courses: { category: string; }) => courses.category === this.query);
  });

  this.title = this.query[0].toUpperCase() + this.query.slice(1);

}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
