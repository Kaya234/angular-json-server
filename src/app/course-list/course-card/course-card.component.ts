import { Component, Input } from '@angular/core';
import {  Course } from '../../shared/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  @Input()
  course!: Course;

}
