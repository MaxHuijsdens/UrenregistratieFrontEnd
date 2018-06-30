import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasKandidaatAanComponent } from './pasKandidaatAan.component';

describe('KandidaatComponent', () => {
  let component: PasKandidaatAanComponent;
  let fixture: ComponentFixture<PasKandidaatAanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasKandidaatAanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasKandidaatAanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
