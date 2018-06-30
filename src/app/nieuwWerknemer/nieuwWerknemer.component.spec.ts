import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwWerknemerComponent } from './nieuwWerknemer.component';

describe('NieuwWerknemerComponent', () => {
  let component: NieuwWerknemerComponent;
  let fixture: ComponentFixture<NieuwWerknemerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwWerknemerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwWerknemerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
