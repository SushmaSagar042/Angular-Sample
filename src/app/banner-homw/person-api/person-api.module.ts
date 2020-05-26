import { PersonApiComponent } from './person-api.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { PersonInfoComponent } from './person-info/person-info.component';



@NgModule({
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatCheckboxModule,MatInputModule,MatAutocompleteModule,MatCardModule,FormsModule,ReactiveFormsModule,MatSliderModule],
    declarations: [PersonApiComponent, PersonInfoComponent],
    entryComponents: [PersonApiComponent]
})
export class PersonApiModule { }
