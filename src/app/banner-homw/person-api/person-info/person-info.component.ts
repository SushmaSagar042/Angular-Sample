import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  locatorModel:FormGroup;
  data_list: any;
  jsonData:Array<any>=[];
  // 'assets/json/excelData.json';
  private _jsonURL = 'assets/json/person.json';
  constructor(
    fb:FormBuilder,
    private http: HttpClient,
    private readonly router: Router,
    private readonly route:ActivatedRoute) { 
      this.locatorModel = this.createForm(fb);
      this.getJSON().subscribe(data => {
       this.fillFormData(data);
  })
}

  ngOnInit(): void {
   
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  createForm(fb:FormBuilder):FormGroup {
    return fb.group({
      ename:[{value:'',disabled:false}],
      eid:[{value:'',disabled:false}],
      contact:[{value:'',disabled:false}],
      mail:[{value:'',disabled:false}]
    });
  }
  fillFormData(data) {
    this.locatorModel.controls['ename'].setValue(data[0].name);
    this.locatorModel.controls['eid'].setValue(data[0].id);
    this.locatorModel.controls['contact'].setValue(data[0].contact);  
    this.locatorModel.controls['mail'].setValue(data[0].email);
  }

}
