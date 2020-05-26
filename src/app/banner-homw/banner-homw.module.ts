import { StudentApiModule } from './student-api/student-api.module';
import { PersonApiModule } from './person-api/person-api.module';
import { BannerHomwRoutingModule } from './banner-homw-routing.module';
import { BannerHomwComponent } from './banner-homw.component';
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
    imports: [
        BannerHomwRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        PersonApiModule,
        StudentApiModule
    ],
    declarations: [
       BannerHomwComponent,
        // CommonDatepickerComponent,
        // CustomUTC2Local
        
    ],
    
})
export class BannerHomwModule {}
