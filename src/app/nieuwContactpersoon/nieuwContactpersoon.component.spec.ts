import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwContactpersoonComponent } from './nieuwContactpersoon.component';

describe('NieuwContactpersoonComponent', () => {
  let component: NieuwContactpersoonComponent;
  let fixture: ComponentFixture<NieuwContactpersoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwContactpersoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwContactpersoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
