import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasWerknemerAanComponent } from './pasWerknemerAan.component';

describe('PasWerknemerAanComponent', () => {
  let component: PasWerknemerAanComponent;
  let fixture: ComponentFixture<PasWerknemerAanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasWerknemerAanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasWerknemerAanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
