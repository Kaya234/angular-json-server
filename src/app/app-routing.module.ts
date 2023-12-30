import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-list/course-detail/course-detail.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
    children: []
  },
  {
    path: 'courses',
    pathMatch: 'full',
    component: CourseListComponent,
    children: []
  },
  {
    path: 'courses/:id',
    pathMatch: 'full',
    component: CourseDetailComponent,
    children: []
  },
  {
    path: 'search',
    component: SearchComponent,
    children: []
  },
  {
    path: 'categories',
    component: CategoryComponent,
    children: []
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
