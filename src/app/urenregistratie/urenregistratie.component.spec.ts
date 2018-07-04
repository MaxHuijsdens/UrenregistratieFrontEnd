import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrenregistratieComponent } from './Urenregistratie.component';

describe('Urenregistratieomponent', () => {
  let component: UrenregistratieComponent;
  let fixture: ComponentFixture<UrenregistratieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrenregistratieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrenregistratieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
