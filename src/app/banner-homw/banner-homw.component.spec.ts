import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHomwComponent } from './banner-homw.component';

describe('BannerHomwComponent', () => {
  let component: BannerHomwComponent;
  let fixture: ComponentFixture<BannerHomwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerHomwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerHomwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
