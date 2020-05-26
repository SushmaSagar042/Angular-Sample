import { StudentInfoComponent } from './student-api/student-info/student-info.component';
import { PersonInfoComponent } from './person-api/person-info/person-info.component';
import { PersonApiComponent } from './person-api/person-api.component';
import { BannerHomwComponent } from './banner-homw.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
                {path: 'person', component: PersonApiComponent},
                {path: 'personinfo', component: PersonInfoComponent}, 
                {path: 'stuinfo', component: StudentInfoComponent}, 
            // { path: 'student', loadChildren: './price-table-upload/price-table-upload.module#PriceTableUploadModule' 
            // }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BannerHomwRoutingModule {}
