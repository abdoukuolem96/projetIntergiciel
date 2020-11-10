import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PellerinDetailsComponent } from './pellerin-details.component';

describe('PellerinDetailsComponent', () => {
  let component: PellerinDetailsComponent;
  let fixture: ComponentFixture<PellerinDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PellerinDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PellerinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
