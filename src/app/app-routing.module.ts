import { StudentApiComponent } from './banner-homw/student-api/student-api.component';
import { PersonApiComponent } from './banner-homw/person-api/person-api.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerHomwComponent } from './banner-homw/banner-homw.component';


const routes: Routes = [
  { path: '', component: PersonApiComponent,
  children: [
    { path: 'person', component: PersonApiComponent },
    { path: 'student', component: StudentApiComponent }
  ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
