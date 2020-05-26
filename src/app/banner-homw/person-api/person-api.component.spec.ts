import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonApiComponent } from './person-api.component';

describe('PersonApiComponent', () => {
  let component: PersonApiComponent;
  let fixture: ComponentFixture<PersonApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
