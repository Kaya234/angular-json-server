import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  courses: any = [];

  constructor(public coursesService: CoursesService, public router: Router){  }
  ngOnInit(): void {
    this.subscription = this.coursesService.getCourses().subscribe(data => {
      this.courses = data;
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
