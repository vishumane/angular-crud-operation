import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StudentService } from './student/student.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { StudentAddComponent } from './student/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentViewComponent } from './student/student-view/student-view.component';

const appRoutes: Routes = [
  { path: 'student-add', component: StudentAddComponent },
  { path: 'student/:id',      component: StudentViewComponent },
  {
    path: 'students',
    component: StudentListComponent
  },
  { path: 'student-add/:id', component: StudentAddComponent },
  {
    path: 'students',
    component: StudentListComponent
  },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:      [ 
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [ AppComponent, StudentAddComponent,StudentViewComponent,StudentListComponent,PageNotFoundComponent ],
  providers: [StudentService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
