import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactpersoonComponent } from './contactpersoon.component';

describe('ContactpersoonComponent', () => {
  let component: ContactpersoonComponent;
  let fixture: ComponentFixture<ContactpersoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactpersoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactpersoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
