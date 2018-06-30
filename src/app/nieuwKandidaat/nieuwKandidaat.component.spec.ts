import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwKandidaatComponent } from './nieuwKandidaat.component';

describe('KandidaatComponent', () => {
  let component: NieuwKandidaatComponent;
  let fixture: ComponentFixture<NieuwKandidaatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwKandidaatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwKandidaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
