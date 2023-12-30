import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Course } from './shared/course.model';
import { environment } from 'src/environments/environment';

@Injectable( { providedIn: 'root' })
export class CoursesService {


    constructor(private http: HttpClient) {}

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

getCourses(): Observable<Course> {
  return this.http
    .get<Course>(environment.apiURL)
    .pipe(retry(1), catchError(this.handleError));
}

getCourse(id: number): Observable<Course> {
  return this.http
    .get<Course>(environment.apiURL + id)
    .pipe(retry(1), catchError(this.handleError));
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
handleError(error: any) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(() => {
    return errorMessage;
  });
}
}
