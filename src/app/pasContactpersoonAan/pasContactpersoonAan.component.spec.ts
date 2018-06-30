import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasContactpersoonAanComponent } from './pasContactpersoonAan.component';

describe('KandidaatComponent', () => {
  let component: PasContactpersoonAanComponent;
  let fixture: ComponentFixture<PasContactpersoonAanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasContactpersoonAanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasContactpersoonAanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
