import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-person-api',
  templateUrl: './person-api.component.html',
  styleUrls: ['./person-api.component.css']
})
export class PersonApiComponent implements OnInit {
  jsonData:Array<any>=[];
  // 'assets/json/excelData.json';
  private _jsonURL = 'assets/json/person.json';
  constructor(private http: HttpClient,
    private readonly router: Router) {
  }

  ngOnInit(): void {
  }
  
  getPersonData() {
    let navigationExtras: NavigationExtras = {
    }
    this.router.navigate(['personinfo'], navigationExtras);
}
getStudentData() {
  let navigationExtras: NavigationExtras = {
  }
  this.router.navigate(['stuinfo'], navigationExtras);
}





}
