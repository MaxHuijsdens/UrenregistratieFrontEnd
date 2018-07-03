import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KandidaatComponent } from './kandidaat.component';

describe('KandidaatComponent', () => {
  let component: KandidaatComponent;
  let fixture: ComponentFixture<KandidaatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KandidaatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KandidaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
